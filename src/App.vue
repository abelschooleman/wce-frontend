<script setup lang="ts">
import axios from "axios";
import SearchCity from "./components/SearchCity.vue";
import CityDetails from "./components/CityDetails.vue";

axios.defaults.baseURL = "http://localhost/api";
</script>

<template>
  <SearchCity></SearchCity>
  <CityDetails></CityDetails>
</template>
