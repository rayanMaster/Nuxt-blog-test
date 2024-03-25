import {type PostWithUser} from "~/types";
import {type PostRequestQuery} from "~/types/request";
import type {Ref} from "vue";

export async function useGetPostsList(
    postListRequest: Ref<PostRequestQuery>,
    order: Ref<string>,
    loadNewData: Ref<boolean>
) {
    // const posts = ref<PostWithUser[] | null>(null)

    const {data:posts, pending} = await useGetAPI<PostWithUser[]>('posts', {
        query: postListRequest,
        transform: (posts: PostWithUser[]) => {
            return posts.map((post: PostWithUser) => ({
                id: post.id,
                title: post.title,
                excerpt: post.excerpt,
                image: post.image,
                publishedAt: post.publishedAt,
                user: {
                    firstName: post.user?.firstName,
                    lastName: post.user?.lastName,
                    avatar: post.user?.avatar
                }
            })) as PostWithUser[]
        },
    })

    // watch(
    //     () => data.value,
    //     () => {
    //         if (data.value != null && data.value.length > 0) {
    //             if (posts.value == null || posts.value.length == 0) {
    //                 posts.value = data.value;
    //             } else {
    //                 posts.value.push(...data.value);
    //             }
    //         }
    //     },
    //     {
    //         immediate: true
    //     }
    // )
    //
    // watch(
    //     () => order.value,
    //     () => {
    //         triggerSorting();
    //     })
    //
    // const triggerSorting = () => {
    //     if (posts.value !== null) {
    //         posts.value?.splice(0, posts.value?.length)
    //         postListRequest.value.offset = 0
    //         postListRequest.value.order = order.value
    //     }
    // }
    //
    // watch(() => loadNewData.value,
    //     () => {
    //         if (posts?.value != null && posts?.value.length > 0) {
    //             if (loadNewData.value && postListRequest.value.offset != null && postListRequest.value.limit != null)
    //                 postListRequest.value.offset += postListRequest.value?.limit
    //         }
    //     })


    return {
        posts,
        pending
    }
}