interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
}

interface SixteenDayWeatherListItem {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morng: number;
  };
  pressure: number;
  humidity: number;
  weather: Weather;
  speed: number;
  deg: number;
  clouds: number;
  rain: number;
  snow: number;
}

interface FiveDayHourlyWeatherListItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: Weather;
  clouds: Clouds;
  wind: {
    speed: number;
    deg: number;
  };
  rain: {
    '3h': number;
  };
  snow: {
    '3h': number;
  };
  dt_txt: number;
}

export interface CurrentWeatherDataResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: Clouds;
  rain: {
    '1h': number;
    '3h': number;
  };
  snow: {
    '1h': number;
    '3h': number;
  };
  dt: number;
  timezone: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
}

export interface SixteenDayWeatherDataResponse {
  city: City;
  country: string;
  timezone: number;
  cod: number;
  message: number;
  cnt: number;
  list: SixteenDayWeatherListItem[];
}

export interface FiveDayHourlyWeatherDataResponse {
  code: number;
  message: number;
  city: {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    timezone: number;
  };
  cnt: number;
  list: FiveDayHourlyWeatherListItem[];
}
