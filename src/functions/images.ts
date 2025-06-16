import axios from "axios";
import type { City } from "../types/global";
import type { Image } from "../types/images";

const fetchImages = async (city: City): Promise<Image[]> => {
    const response = await axios.get(`images?city=${city.name}`);

    if (response.status !== 200) {
        throw new Error("Failed to fetch images from API");
    }

    if (!response.data?.data) {
        throw new Error("Data not set in response");
    }

    return response.data.data;
};

export {
    fetchImages,
}