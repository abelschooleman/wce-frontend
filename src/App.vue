<script setup lang="ts">
import axios from "axios";
import CurrentWeather from "./components/CurrentWeather.vue";
import SearchInput from "./components/SearchInput.vue";
import ImageGrid from "./components/ImageGrid.vue";

axios.defaults.baseURL = "http://localhost/api";
</script>

<template>
  <SearchInput></SearchInput>
  <CurrentWeather></CurrentWeather>
  <ImageGrid></ImageGrid>
</template>
