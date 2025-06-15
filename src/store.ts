import {defineStore} from "pinia";
import type {City} from "./types/global";
import type {Image} from "./types/images";
import type {Weather} from "./types/weather";

export const useStore = defineStore("Store", {
    state: () => ({
        city: undefined as City | undefined,
        images: undefined as Image[] | undefined,
        weather: undefined as Weather | undefined,
    })
})