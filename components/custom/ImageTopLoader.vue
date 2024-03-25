<template>
  <div class="card">
    <div class="flex flex-col">
      <div class="shimmerBG media w-full h-[30vw] rounded-lg shadow-lg dark:shadow-black/20 object-cover"></div>
      <div class="mt-10">
        <div class="shimmerBG title-line"></div>
        <div class="shimmerBG title-line end"></div>

        <div class="shimmerBG content-line m-t-24"></div>
        <div class="shimmerBG content-line"></div>
        <div class="shimmerBG content-line"></div>
        <div class="shimmerBG content-line"></div>
        <div class="shimmerBG content-line end"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  background-color: transparent;
  border-radius: 6px;
  height: 500px;
  overflow: hidden;
  width: 90%;
  margin: 40px auto;
}

.card .shimmerBG {
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
  background: #ddd;
  background: radial-gradient(circle, #f6f6f6, #f0f0f0, #E0E0E0);
  background-size: 1200px 100%;
}

@-webkit-keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

@keyframes shimmer {
  0% {
    background-position: -1200px 0;
  }
  100% {
    background-position: 1200px 0;
  }
}

.card .media {
  height: 420px;
}

.card .p-32 {
  padding: 32px;
}

.card .title-line {
  height: 40px;
  width: 100%;
  margin-bottom: 12px;
}

.card .content-line {
  height: 8px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 8px;
}

.card .end {
  width: 40%;
}

.m-t-24 {
  margin-top: 24px;
}

</style>
<script setup lang="ts">
</script>