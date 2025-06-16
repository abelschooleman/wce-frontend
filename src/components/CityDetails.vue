<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "../store.ts";

import CityMap from "./CityMap.vue";
import CurrentWeather from "./CurrentWeather.vue";
import ImageGrid from "./ImageGrid.vue";

const store = useStore();

const { city } = storeToRefs(store);
</script>

<template>
  <div class="overflow-hidden rounded-lg bg-white shadow-sm">
    <div class="px-4 py-5 sm:p-6 flex flex-col space-y-4">
      <div>
        <h2 class="font-bold text-2xl">Current weather in {{ city!.name }}</h2>
      </div>
      <CurrentWeather></CurrentWeather>
      <CityMap></CityMap>
      <ImageGrid></ImageGrid>
    </div>
  </div>
</template>

<style scoped>

</style>