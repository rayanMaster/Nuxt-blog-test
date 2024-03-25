import type {CustomErrorResponseInterface} from "~/types/request";
import {defaultErrorResponse} from "~/types/request";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const $getApi = $fetch.create({
        baseURL: config?.baseUrl ?? '/api/',
        method: "GET",
        onRequest({request, options, error}) {
        },
        onResponse({response}) {
        },
        onResponseError({response}) {

            const errorResponse: CustomErrorResponseInterface = defaultErrorResponse as CustomErrorResponseInterface
            errorResponse.url = response._data?.url;
            errorResponse.statusCode = response._data?.statusCode;
            errorResponse.statusMessage = response._data?.statusMessage;
            errorResponse.message = response._data?.message;
            errorResponse.stack = response._data?.stack

            response._data = errorResponse
        }
    })
    return {
        provide: {
            getApi: $getApi
        }
    }
})