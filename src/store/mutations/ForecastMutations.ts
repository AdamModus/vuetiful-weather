import MUTATION_TYPES from "../mutation-types";
import { IState } from "../state";
import {
  ICurrentWeatherForecast,
  IFiveDayHourlyForecast,
  ISixteenDayWeatherForecast
} from "../state/IForecasts";

export default {
  [MUTATION_TYPES.SET_CURRENT_WEATHER_FORECAST](
    state: IState,
    forecast: ICurrentWeatherForecast
  ) {
    state.forecast.currentWeatherForecast = forecast;
  },
  [MUTATION_TYPES.SET_SIXTEEN_DAY_WEATHER_FORECAST](
    state: IState,
    forecast: ISixteenDayWeatherForecast
  ) {
    state.forecast.sixteenDayWeatherForecast = forecast;
  },
  [MUTATION_TYPES.SET_FIVE_DAY_HOURLY_WEATHER_FORECAST](
    state: IState,
    forecast: IFiveDayHourlyForecast
  ) {
    state.forecast.fiveDayHourlyForecast = forecast;
  }
};
