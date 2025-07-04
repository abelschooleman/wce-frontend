type CityName = string;

type Country = string;

type State = string;

type Coordinates = {
    latitude: number;
    longitude: number;
}

type City = {
    name: CityName;
    country: Country;
    state: State | null;
    coordinates: Coordinates;
};

export { City };