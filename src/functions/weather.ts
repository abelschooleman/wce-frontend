import axios from "axios";
import type {City} from "../types/global";
import type {Weather} from "../types/weather";

const fetchCurrentWeather = async (city: City): Promise<Weather> => {
    const response = await axios.get(`weather?city=${city}`);

    if (response.status !== 200) {
        throw new Error("Failed to fetch current weather from API");
    }

    if (!response.data?.data) {
        throw new Error("Data not set in response");
    }

    const data = response.data.data;

    return {
        humidity: data.humidity,
        temperature: data.temperature_in_celcius,
        conditions: data.weather,
    }
}

export { fetchCurrentWeather };