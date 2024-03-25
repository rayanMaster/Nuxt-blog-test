<script lang="ts" setup>

useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt Blog` : 'Nuxt Blog'
  }
})
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
