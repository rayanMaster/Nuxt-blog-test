<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})
</script>
<template>
  <section class="flex items-center h-screen p-16 bg-text-light">
    <div class="container flex flex-col items-center ">
      <div class="flex flex-col gap-6 max-w-md text-center">
        <h2 class="font-extrabold text-9xl text-primary-blue">
          <span class="sr-only">Error</span>{{ error?.statusCode }}
        </h2>
        <p class="text-2xl md:text-3xl text-primary-blue">{{error?.message}}</p>
        <NuxtLink class="px-8 py-4 text-xl font-semibold rounded bg-primary-blue text-gray-50 hover:text-gray-200"
                  to="/posts">Go Back to posts</NuxtLink>
      </div>
    </div>
  </section>
</template>
