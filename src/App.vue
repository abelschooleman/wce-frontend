<script setup lang="ts">
import { storeToRefs } from "pinia";
import axios from "axios";
import { useStore } from "./store.ts";

import SearchCity from "./components/SearchCity.vue";
import CityDetails from "./components/CityDetails.vue";

axios.defaults.baseURL = "http://localhost/api";

const store = useStore();

const { city } = storeToRefs(store);
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl flex flex-col space-y-5">
      <div>
        <h1 class="font-bold text-xl">Woub City Explorer</h1>
      </div>
      <SearchCity></SearchCity>
      <CityDetails v-if="city"></CityDetails>
    </div>
  </div>`
</template>
