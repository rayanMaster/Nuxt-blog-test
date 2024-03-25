<script setup lang="ts">
import {humanReadableDate, publishedDateFrom} from "~/utils/dateHelper";
import type {PostRequestQuery} from "~/types/request";
import {defaultPostRequest} from "~/types/request";
import {orderByOptions} from "~/types";
import {authorFullName, isFirst} from "~/utils/postHelper";


const order = ref(orderByOptions.orderDesc)

const postListRequest = ref<PostRequestQuery>({...defaultPostRequest} as PostRequestQuery)

const {loadNewData} = await useScroll()

const {posts, pending} = await useGetPostsList(postListRequest, order, loadNewData)


</script>

<template>
  <div class="py-24 sm:py-32 h-[1000px] overflow-auto h-min-[1000px]" id="infinite-list" ref="el">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="mx-auto max-w-full lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-primary-blue sm:text-4xl">Our Blog</h2>
        <p class="mt-2 text-lg leading-8 text-primary-blue">Learn how to build awesome blog with Nuxt and Tailwind</p>
      </div>
      <div class="mx-auto">
        <div class="flex items-center justify-start mt-32">
          <div class="mb-[0.125rem] me-4 inline-block min-h-[1.5rem] ps-[1.5rem]">
            <label
                class="inline-block ps-[0.15rem] hover:cursor-pointer text-primary-blue"
                for="inlineCheckbox1"
            >Sort By Date Descending</label>
            <input
                class="checkbox"
                type="checkbox"
                v-model="order"
                :true-value="orderByOptions.orderAsc"
                :false-value="orderByOptions.orderDesc"/>
          </div>
        </div>
      </div>
      <div
          class="mx-auto grid max-w-full grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="(post,index) in posts" :key="post.id"
                 class="flex max-w-full flex-col items-start justify-between mt-20 h-[600px]">
          <div class="container mx-auto text-center lg:text-left xl:px-32 flex-row-reverse">
            <div class="grid items-center grid-cols-2">
              <div class="mb-12 lg:mb-0" :class="[isFirst(index) ? 'order-1 -mr-14' : 'order-2 -ml-14' ]">
                <div class="text-card">
                  <h2 class="mb-8 text-3xl font-bold text-primary-blue">{{ post.title }}</h2>
                  <div class="my-4 text-primary-blue">
                    {{ humanReadableDate(post?.publishedAt) }}
                    <span class="font-bold">, {{ publishedDateFrom(post?.publishedAt) }}</span>
                  </div>
                  <p class="mb-8 pb-2 lg:pb-0 text-primary-blue">
                    {{ post.excerpt }}
                  </p>
                  <div class="relative mt-8 flex items-center gap-x-4 justify-center">
                    <NuxtImg :src="post?.user?.avatar" alt="" class="h-10 w-10 rounded-full bg-gray-50"/>
                    <div class="text-sm leading-6 text-left">
                      <p class="font-semibold text-primary-blue">
                        <span class="absolute inset-0"></span>
                        {{ authorFullName(post?.user) }}
                      </p>
                    </div>
                  </div>
                  <NuxtLink :to="{path:`/posts/${post?.id}`}">
                    <CustomIconButton
                        class="my-10"
                        :text-order="1"
                        text="Read More">
                      <template #icon>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path id="Shape"
                                d="M10.9393 23.5607C11.5251 24.1464 12.4749 24.1464 13.0607 23.5607L23.5607 13.0607C24.1465 12.4749 24.1465 11.5251 23.5607 10.9393L13.0607 0.439339C12.4749 -0.146447 11.5251 -0.146447 10.9393 0.43934C10.3536 1.02512 10.3536 1.97487 10.9393 2.56066L18.8787 10.5L1.5 10.5C0.671572 10.5 -1.1215e-06 11.1716 -1.04907e-06 12C-9.7665e-07 12.8284 0.671572 13.5 1.5 13.5L18.8787 13.5L10.9393 21.4393C10.3536 22.0251 10.3536 22.9749 10.9393 23.5607Z"
                                fill="#2B3769"/>
                        </svg>
                      </template>
                    </CustomIconButton>
                  </NuxtLink>
                </div>
              </div>
              <div :class="[!isFirst(index) ? 'order-1' : 'order-2' ]">
                <NuxtImg
                    v-if="post?.image"
                    :src="post?.image"
                    :alt="post?.title"
                    sizes="md:40vw"
                    loading="lazy"
                    fit="cover"
                    class="w-full h-[40vw] rounded-lg shadow-lg dark:shadow-black/20 object-cover"/>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="flex justify-center my-5" v-if="pending">
      <div class="loader"></div>
    </div>
  </div>
</template>