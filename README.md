# Vue 3 + Vite + pnpm + eslint

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3
`<script setup>` SFCs, check out the
[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) +
  [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 自动打tag
```
pnpm tag // 格式为release-日期-序号
```
自定义tag
```
node ./tag.js tag名称
```
 
 脚本执行完tag之后会自动push到远程

 脚本执行环境可自行review  tag.js文件

## husky

husky 不触发 需要变成可执行文件
pkg增加命令`prepare`

"prepare": "husky install",

或者执行

``` 
chmod 777 .husky/pre-commit
chmod 777 .husky/commit-msg
```

[windicss](https://cn.windicss.org/utilities/general/colors.html)

## 依赖检测

`npx taze -r`