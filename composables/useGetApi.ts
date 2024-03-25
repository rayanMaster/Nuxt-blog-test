import type {UseFetchOptions} from 'nuxt/app';
import defu from "defu";

export function useGetAPI<T>(
    url: string | (() => string),
    options: UseFetchOptions<T> = {}
) {

    return useFetch(url, {
        ...options,
        $fetch: useNuxtApp().$getApi,
    })
}
