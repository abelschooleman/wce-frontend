<script setup lang="ts">
import CityMap from "./CityMap.vue";
import CurrentWeather from "./CurrentWeather.vue";
import ImageGrid from "./ImageGrid.vue";
</script>

<template>
  <div class="overflow-hidden rounded-lg bg-white shadow-sm">
    <div class="px-4 py-5 sm:p-6 flex flex-col space-y-4">
      <CurrentWeather></CurrentWeather>
      <CityMap></CityMap>
      <ImageGrid></ImageGrid>
    </div>
  </div>
</template>

<style scoped>

</style>