import axios from "axios";
import type {City} from "../types/global";

const fetchAccessToken = async (): Promise<string> => {
    const response = await axios.get("access-token");

    if (response.status !== 200) {
        throw new Error(`An unexpected error occurred: "${response.statusText}"`);
    }

    return response.data.data.token;
}

const findCitiesByName = async (name: string): Promise<City[]> => {
    const response = await axios.get(`find-city?query=${name}`);

    if (response.status !== 200) {
        throw new Error(`An unexpected error occurred: "${response.statusText}"`);
    }

    return response.data.data.map((resource: any) => {
        return {
            name: resource.name,
            country: resource.country,
            state: resource.state,
            coordinates: {
                latitude: resource.latitude,
                longitude: resource.longitude,
            },
        };
    });
}

export {
    fetchAccessToken,
    findCitiesByName,
}