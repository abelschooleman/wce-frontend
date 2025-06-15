<script setup lang="ts">
import {computed, onMounted, watch} from "vue";
import {storeToRefs} from "pinia";
import type {Condition, Weather} from "../types/weather";
import {useStore} from "../store.ts";
import {fetchCurrentWeather} from "../functions/weather.ts";

const store = useStore();

const { city, weather } = storeToRefs(store);

const description = computed(() => {
  return weather.value?.conditions.map((c: Condition) => c.main).join(', ');
});

const load = () => {
  fetchCurrentWeather(city.value!).then((response: Weather) => {
    weather.value = response;
  });
}

onMounted(() => load());

watch(city, () => load());
</script>

<template>
  <dl v-if="weather" class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-3">
    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
      <dt class="text-sm/6 font-medium text-gray-500">Temperature</dt>
      <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{{ weather.temperature }}°C</dd>
    </div>

    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
      <dt class="text-sm/6 font-medium text-gray-500">Humidity</dt>
      <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{{ weather.humidity }}%</dd>
    </div>

    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
      <dt class="text-sm/6 font-medium text-gray-500">Conditions</dt>
      <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{{ description }}</dd>
    </div>
  </dl>
</template>

<style scoped>

</style>