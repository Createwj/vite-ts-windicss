const { exec, execSync } = require('child_process')
const { yellow, red, blue, green } = require('kolorist')
const util = require('util')
const promiseExec = util.promisify(exec)
const { log } = console
const params = process.argv.slice(2)

const formatRsp = (rsp) => rsp.toString().replace(/\n$/g, '').split('\n')
const exitProcess = (msg) => {
  log(red(msg))
  process.exit(0)
}

const ts = Date.now()
const date_ob = new Date(ts)
const date = date_ob.getDate()
const month = date_ob.getMonth() + 1
const year = date_ob.getFullYear()

const getDate =
  year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)

const isTodayReg = new RegExp(`^RELEASE-${getDate}-\\d{1,2}$`)

const isClean = async () => {
  try {
    const { stdout } = await promiseExec('git status')
    const result = formatRsp(stdout)
    if (result.find((item) => /working (tree|directory) clean/.test(item))) {
      log(green('nothing to commit, working tree clean'))
    } else {
      const filterStatus = result.filter((v) =>
        /^\t(new file|renamed|modified|deleted):.+/g.test(v)
      )
      log(
        yellow(
          `something need to commit or stash\n ${filterStatus.toString().replace(/,?\t/g, '\n')}`
        )
      )
      process.exit()
    }
  } catch (err) {
    exitProcess(err)
  }
}

const isMaster = async () => {
  log(blue('检测是否Master分支, 检测是否有未提交的更新...'))
  try {
    const { stdout } = await promiseExec('git status -sb')
    const result = stdout
    const match = result.match(
      /^## (?:master|feature\/long_term)...origin\/(?:master|feature\/long_term)([^\n]*)\n?\r?([\s\S]*)/
    )
    if (match) {
      if (match[2]) {
        exitProcess(`${match[2]} \n 有变更/新增的文件没有提交!!!`)
      } else if (match[1]) {
        exitProcess('有本地更新没有提交到远程库!!!')
      } else {
        log(green('Master分支检测成功, 代码变更检测成功.'))
      }
    } else {
      exitProcess('不是Master分支!!!')
    }
  } catch (err) {
    exitProcess(err)
  }
}

// 检测本地和远程是否一致
const isSameOriginCommitID = async () => {
  const resultList = ['git ls-remote origin -h HEAD|cut -f1', 'git rev-parse --verify HEAD'].map(
    async (cmd) => await promiseExec(cmd)
  )

  log(blue('对比远程库与本地库HEAD的CommitId...'))

  try {
    const result = await Promise.all(resultList)
    const remoteCommitID = formatRsp(result[0].stdout)
    const localCommitID = formatRsp(result[1].stdout)

    if (remoteCommitID[0] === localCommitID[0]) {
      log(green('与远程库版本一致.'))
    } else {
      exitProcess('本地库与远程库不同步!!!')
    }
  } catch (err) {
    exitProcess(err)
  }
}

const addTags = async () => {
  const tagList = await promiseExec('git tag')
  const tags = formatRsp(tagList.stdout)
  let tagName
  if (params.length) {
    tagName = params[0]
  } else {
    tagName = 123
  }

  if (tags.length === 1 && tags[0] === '') {
    log(blue('没有tag, 创建tag...'))
    let firstTagName = tagName || `RELEASE-${getDate}-01`
    await promiseExec(
      `git tag -a ${firstTagName} -m 'version 0.1 released' && git push origin --tags`
    )
    log(green('已添加新版本标签: ' + firstTagName))
  } else {
    const lastTag = tags[tags.length - 1]
    const todayHasTag = isTodayReg.test(lastTag)

    let newTag = ''
    if (todayHasTag) {
      newTag = lastTag.replace(/\d{1}$/g, (string) => {
        return parseInt(string) + 1
      })
    } else {
      newTag = `RELEASE-${getDate}-01`
    }

    const realTagName = tagName || newTag

    const tag = await promiseExec(
      `git tag -a ${realTagName} -m 'version ${realTagName} released' && git push origin ${realTagName}`
    )
    log(green(tag.stderr))
    log(green('已添加新版本标签: ' + realTagName))
  }
}

const init = async () => {
  await isClean()
  await isMaster()
  await isSameOriginCommitID()
  await addTags()
}
init()
