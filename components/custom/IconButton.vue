<script setup lang="ts">

import type {PropType} from "vue";

type OrderValues = 1 | 2;

defineProps({
  textOrder: {
    type: Number as PropType<OrderValues>,
    default: 1,
    validator(value: OrderValues) {
      if (
          [undefined, 1, 2].indexOf(
              value
          ) === -1
      ) {
        console.warn(
            `IconButton: invalid "${value}" color. Should be 1 or 2`
        )
        return false
      }
      return true
    }
  },
  text: {
    type: String,
    required: true
  },
})

</script>
<template>
  <div class="relative flex justify-center">
    <div class="flex gap-1 items-center button-secondary p-2 rounded-lg">
      <span :class="[textOrder == 1 ? 'order-1' : 'order-2' ]">{{ text }}</span>
      <span class="mx-2" :class="[textOrder == 1 ? 'order-2' : 'order-1' ]">
        <slot name="icon"></slot>
      </span>

    </div>
  </div>
</template>

<style>
svg {
  height: 16px;
  width: 16px;
}
</style>