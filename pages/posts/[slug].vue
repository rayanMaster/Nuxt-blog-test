<script lang="ts" setup>
import {humanReadableDate} from "~/utils/dateHelper";
import type {PostDetailsRequestQuery} from "~/types/request";
import {defaultPostDetailRequest} from "~/types/request";
import {authorFullName} from "~/utils/postHelper";
import {useGetPostDetails} from "~/composables/useGetPostDetails";
import {useRoute} from "vue-router";


const route = useRoute();
const postDetailsRequest = ref<PostDetailsRequestQuery>({...defaultPostDetailRequest} as PostDetailsRequestQuery)
const {post, loading} = await useGetPostDetails(route,postDetailsRequest)

useSeoMeta({
  title: post.value?.title,
  ogTitle: post.value?.title,
  description: post.value?.excerpt,
  ogDescription: post.value?.excerpt,
  ogImage: post.value?.image,
  twitterCard: 'summary_large_image',
})

watch(post, (newPost) => {
  useSeoMeta({
    title: newPost?.title,
    ogTitle: newPost?.title,
    description: newPost?.excerpt,
    ogDescription: newPost?.excerpt,
    ogImage: newPost?.image,
    twitterCard: 'summary_large_image',
  })
})


</script>
<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div
          class="mx-auto grid max-w-full grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article
            class="flex max-w-full flex-col items-start justify-between">
          <div class="container mx-auto text-center lg:text-left xl:px-32 flex-row-reverse">
            <div class="grid items-center grid-cols-1">
              <div class="mb-12 lg:mb-0">
                <div class="text-card">
                  <CustomImageTopLoader v-if="loading"/>
                  <template v-else>
                    <div class="flex justify-start">
                      <NuxtLink :to="{path:'/posts'}">
                        <CustomIconButton
                            text="Back"
                            :text-order="2"
                            class="my-2">
                          <template #icon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <g id="Group 770589">
                                <path id="Shape"
                                      d="M13.0607 23.5607C12.4749 24.1464 11.5251 24.1464 10.9393 23.5607L0.439345 13.0607C-0.146441 12.4749 -0.146441 11.5251 0.439346 10.9393L10.9393 0.439343C11.5251 -0.146444 12.4749 -0.146443 13.0607 0.439343C13.6465 1.02513 13.6465 1.97488 13.0607 2.56066L5.12132 10.5L22.5 10.5C23.3284 10.5 24 11.1716 24 12C24 12.8284 23.3284 13.5 22.5 13.5L5.12132 13.5L13.0607 21.4393C13.6464 22.0251 13.6464 22.9749 13.0607 23.5607Z"
                                      fill="#2B3769"/>
                              </g>
                            </svg>
                          </template>
                        </CustomIconButton>
                      </NuxtLink>
                    </div>
                    <div>
                      <NuxtImg
                          v-if="post?.image"
                          :src="post?.image"
                          :alt="post?.title"
                          sizes="lg:30vw"
                          loading="lazy"
                          fit="cover"
                          class="w-full h-[30vw] rounded-lg shadow-lg dark:shadow-black/20 object-cover"/>
                    </div>
                    <div class="flex items-start justify-between">
                      <div class="text-left my-8">
                        <h2 class="text-3xl font-bold text-primary-blue">{{ post?.title }}</h2>
                        <p class="mt-2 text-primary-blue"> {{ humanReadableDate(post?.publishedAt) }}</p>
                      </div>

                      <div class="relative mt-8 flex items-center gap-x-4 justify-center">
                        <NuxtImg
                            v-if="post?.user?.avatar"
                            :src="post?.user?.avatar"
                            :alt="post?.user?.firstName"
                            loading="lazy"
                            fit="cover"
                            class="h-10 w-10 rounded-full bg-gray-50"/>
                        <div class="text-sm leading-6 text-left">
                          <p class="font-semibold text-primary-blue">
                            <span class="absolute inset-0"></span>
                            {{ authorFullName(post?.user) }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p class="mb-8 pb-2 lg:pb-0 text-primary-blue">
                      <LazyPostContent :content="post?.content"/>
                    </p>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
