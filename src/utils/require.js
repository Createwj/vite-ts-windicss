import { createFetch, isObject } from '@vueuse/core'
import { stringifyQuery } from 'vue-router'

const useRequest = createFetch({
  baseUrl: 'https://my-api.com',
  options: {
    async beforeFetch({ options }) {
      const myToken = 'await getMyToken()'
      console.log(options)
      options.headers = {}
      options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
    async afterFetch({ response }) {
      import.meta.env.MODE === 'development' && console.log('result:', response)
      return { response }
    },
    onFetchError({ data, error }) {
      console.error(error)
      data = undefined
      return { data, error }
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})

export function useGet(url, query) {
  stringifyQuery(query)
  console.log(stringifyQuery(query))
  const _url = computed(() => {
    const _url = unref(url)
    const _query = unref(query)
    const queryString = isObject(_query) ? stringifyQuery(_query) : _query || ''
    return `${_url}${queryString ? '?' : ''}${queryString}`
  })

  return useRequest(_url).json()
}

export function usePost(url, payload) {
  return useRequest(url).post(payload).json()
}

console.log(useRequest)
