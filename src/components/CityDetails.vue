<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "../store";

import CityMap from "./CityMap.vue";
import CurrentWeather from "./CurrentWeather.vue";
import ImageGrid from "./ImageGrid.vue";

const store = useStore();

const { city } = storeToRefs(store);
</script>

<template>
  <div class="overflow-hidden rounded-lg bg-white shadow-sm">
    <div class="px-4 py-5 sm:p-6">
      <template v-if="city">
        <CurrentWeather></CurrentWeather>
        <CityMap></CityMap>
        <ImageGrid></ImageGrid>
      </template>

      <h1 v-else>Search for a city above</h1>
    </div>
  </div>
</template>

<style scoped>

</style>