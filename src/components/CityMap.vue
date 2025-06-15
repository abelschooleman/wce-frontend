<script setup lang="ts">
import {computed, onMounted, type Ref, ref} from "vue";
import {storeToRefs} from "pinia";
import { GoogleMap, Marker } from 'vue3-google-map'
import {useStore} from "../store.ts";
import {fetchAccessToken} from "../functions/geocode.ts";

const store = useStore();

const { city } = storeToRefs(store);

const accessToken: Ref<string|undefined> = ref(undefined);

const center = computed(() => ({ lat: city.value!.coordinates.latitude, lng: city.value!.coordinates.longitude }));

onMounted(() => {
  fetchAccessToken().then((token: string) => accessToken.value = token);
})
</script>

<template>
  <GoogleMap
      v-if="accessToken"
      :api-key="accessToken!"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>
