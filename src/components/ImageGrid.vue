<script setup lang="ts">
import { onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "../store.ts";
import { fetchImages } from "../functions/images.ts";
import type { Image } from "../types/images";

import { InformationCircleIcon } from "@heroicons/vue/24/outline";

const store = useStore();

const { city, images } = storeToRefs(store);

const load = () => {
  fetchImages(city.value!).then((response: Image[]) => {
    images.value = response;
  });
}

onMounted(() => load());

watch(city, () => load());
</script>

<template>
  <div v-if="images?.length" class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
    <div
      v-for="(image, idx) in images"
      :key="idx"
      class="rounded"
    >
      <img :src="image.full" :alt="image.description" :title="image.description" />
    </div>
  </div>

  <div v-else class="rounded-md bg-blue-50 p-4">
    <div class="flex">
      <div class="shrink-0">
        <InformationCircleIcon class="size-5 text-blue-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-bold text-blue-900">No images found</h3>
        <div class="mt-1 text-sm font-medium text-blue-800">
          <p>There were no images available for your selected city "{{ city!.name }}"</p>
        </div>
      </div>
    </div>
  </div>
</template>