<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useStore} from "../store.ts";

const store = useStore();

const { images } = storeToRefs(store);
</script>

<template>
  <div v-if="images" class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
    <div
      v-for="(image, idx) in images"
      :key="idx"
      class="rounded"
    >
      <img :src="image.full" :alt="image.description" :title="image.description" />
    </div>
  </div>
</template>