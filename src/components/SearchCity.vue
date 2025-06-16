<script setup lang="ts">
import { computed, type Ref, ref } from "vue";
import { storeToRefs } from "pinia";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/vue/24/outline";
import { useStore } from "../store.ts";
import { findCitiesByName } from "../functions/geocode.ts";
import type { City } from "../types/global";

const store = useStore();

const { city: selectedCity } = storeToRefs(store);

const query = ref("");
const result: Ref<City[]> = ref([]);

const isDisabled = computed(() => {
  return query.value?.length === 0;
});

const onReset = () => {
  query.value = "";
  result.value = [];
}

const onSelect = (city: City) => {
  selectedCity.value = city;
  onReset();
}

const onSubmit = () => {
  findCitiesByName(query.value).then((response: City[]) => {
    result.value = response
  });
};
</script>

<template>
  <div class="relative">
    <label for="query" class="block text-sm/6 font-medium text-gray-900">Search for a city</label>
    <div class="mt-2 flex">
      <div class="-mr-px grid grow grid-cols-1 focus-within:relative">
        <input
          type="text"
          name="query"
          id="query"
          class="col-start-1 row-start-1 block w-full rounded-l-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
          placeholder="Anywhere"
          v-model="query"
          @keyup.enter="onSubmit"
          @keyup.esc="onReset"
        />
        <MapPinIcon class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4" aria-hidden="true" />
      </div>

      <button
        type="button"
        :class="[
          { 'hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600isDisabled': !isDisabled },
          'flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-1 -outline-offset-1 outline-gray-300',
        ]"
        :disabled="isDisabled"
        @click="onSubmit"
      >
        <MagnifyingGlassIcon class="-ml-0.5 size-4 text-gray-400" aria-hidden="true" />
        Go
      </button>
    </div>

    <div v-if="result.length > 0" class="absolute divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-md">
      <div class="px-4 py-2 sm:px-6">
        Select city from these options
      </div>
      <div class="px-4 py-5 sm:p-6">
        <ul>
          <li
              v-for="(option, idx) in result"
              :key="idx"
              @click="onSelect(option)"
          >
            {{ option.name }}, {{ option.country }} ({{ option.state }})
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>