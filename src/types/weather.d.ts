type Condition = {
    description: string;
    main: string;
}

type Humidity = number;

type Temperature = number;

type Weather = {
    humidity: Humidity;
    temperature: Temperature;
    conditions: Condition[];
}

export {
    Condition,
    Humidity,
    Temperature,
    Weather,
};