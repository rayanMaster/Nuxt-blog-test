import {type Ref} from "vue";
import type {PostWithUser} from "~/types";
import {type PostRequestQuery} from "~/types/request";

export async function useScroll() {
    const loadNewData = ref(false)
    onMounted(() => {
        const listContainer = document.querySelector('#infinite-list');
        if (listContainer) {
            listContainer.addEventListener('scroll', e => {
                loadNewData.value = listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight;
            })
        }
    })

    return {
        loadNewData
    }
}