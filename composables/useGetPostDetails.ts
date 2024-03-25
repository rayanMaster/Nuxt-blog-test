import {type PostWithUser} from "~/types";
import type {Ref} from "vue";
import type {PostDetailsRequestQuery} from "~/types/request";
import type {RouteParams} from "vue-router";

export async function useGetPostDetails(
    route: ReturnType<typeof useRoute>,
    postDetailsRequest: Ref<PostDetailsRequestQuery>
) {
    const {slug}: RouteParams = route.params;

    const {data: post, error, pending: loading} = await useGetAPI<PostWithUser>(`posts/${slug}`, {
        query: postDetailsRequest,
    })

    if (error.value) {
        const {data} = error.value
        if (data.statusCode == 404) {
            showError({statusCode: 404, statusMessage: data.message})
        }
    }

    return {
        post,
        loading
    }
}