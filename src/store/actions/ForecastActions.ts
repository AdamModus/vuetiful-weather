import {
  CurrentWeatherDataResponse,
  FiveDayHourlyWeatherDataResponse,
  SixteenDayWeatherDataResponse
} from "@/models/OpenWeatherResponseTypes";
import store from "..";
import MUTATION_TYPES from "../mutation-types";
import {
  ICurrentWeatherForecast,
  IFiveDayHourlyForecast,
  ISixteenDayWeatherForecast
} from "../state/IForecasts";

const currentWeatherUrlBase = "http://api.openweathermap.org/data/2.5/weather";
const fiveDayHourlyUrlBase = "http://api.openweathermap.org/data/2.5/forecast";
const sixteenDaysForecastUrlBase =
  "http://api.openweathermap.org/data/2.5/forecast/daily";
const apiKey = "0316ba5cb8868612facee65c17e8f4a0";

function buildCurrentWeatherForecastUrl(city: String, countryCode?: String) {
  const countryCodeFragment =
    typeof countryCode === "string" ? "," + countryCode : "";
  return `${currentWeatherUrlBase}?appid=${apiKey}&q=${city}${countryCodeFragment}`;
}

function buildFiveDayHourlyForecastURL(city: String, countryCode?: String) {
  const countryCodeFragment =
    typeof countryCode === "string" ? "," + countryCode : "";
  return `${fiveDayHourlyUrlBase}?appid=${apiKey}&q=${city}${countryCodeFragment}`;
}

function buildSixteenDaysForecastURL(city: String, countryCode?: String) {
  const countryCodeFragment =
    typeof countryCode === "string" ? "," + countryCode : "";
  const numberOfDaysFragment = "cnt=16";
  return `${sixteenDaysForecastUrlBase}?appid=${apiKey}&q=${city}${countryCodeFragment}&${numberOfDaysFragment}`;
}

function extractCurrentForecastFromResponse(
  response: CurrentWeatherDataResponse
): ICurrentWeatherForecast {
  const forecast: ICurrentWeatherForecast = {
    description: response.weather[0].description,
    iconId: response.weather[0].id,
    temperature: response.main.temp,
    minTemperature: response.main.temp_min,
    maxTemperature: response.main.temp_max,
    humidity: response.main.humidity
  };
  console.log(response);
  return forecast;
}

function extractSixteenDayForecastFromResponse(
  response: SixteenDayWeatherDataResponse
): ISixteenDayWeatherForecast {
  const forecast: ISixteenDayWeatherForecast = {};
  console.log(response);
  return forecast;
}

function extractFiveDayHourlyForecastFromResponse(
  response: FiveDayHourlyWeatherDataResponse
): IFiveDayHourlyForecast {
  const forecast: IFiveDayHourlyForecast = {};
  console.log(response);
  return forecast;
}

export default {
  fetchCurrentForecast({ commit }: any, city: string, countryCode?: string) {
    fetch(buildCurrentWeatherForecastUrl(city, countryCode))
      .then(response => response.json())
      .then((result: CurrentWeatherDataResponse) => {
        store.dispatch("setCountryCode", result.sys.country);
        const forecast = extractCurrentForecastFromResponse(result);
        commit(MUTATION_TYPES.SET_CURRENT_WEATHER_FORECAST, forecast);
      });
  },

  fetchSixteenDaysForecast(
    { commit }: any,
    city: string,
    countryCode?: string
  ) {
    fetch(buildSixteenDaysForecastURL(city, countryCode))
      .then(response => response.json())
      .then((result: SixteenDayWeatherDataResponse) => {
        store.dispatch("setCountryCode", result.country);
        const forecast = extractSixteenDayForecastFromResponse(result);
        commit(MUTATION_TYPES.SET_SIXTEEN_DAY_WEATHER_FORECAST, forecast);
      });
  },

  fetchFiveDayHourlyForecast(
    { commit }: any,
    city: string,
    countryCode?: string
  ) {
    fetch(buildFiveDayHourlyForecastURL(city, countryCode))
      .then(response => response.json())
      .then((result: FiveDayHourlyWeatherDataResponse) => {
        store.dispatch("setCountryCode", result.city.country);
        const forecast = extractFiveDayHourlyForecastFromResponse(result);
        commit(MUTATION_TYPES.SET_FIVE_DAY_HOURLY_WEATHER_FORECAST, forecast);
      });
  }
};
