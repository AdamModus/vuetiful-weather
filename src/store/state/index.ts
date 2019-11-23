import IForecasts from "./IForecasts";
import ILocationState from "./ILocationState";
import ITemperatureUnitState, {
  TemperatureUnitEnum
} from "./ITemperatureUnitState";
import IThemeState from "./IThemeState";

export default {
  theme: {
    isDark: true
  },
  temperatureUnit: { unit: TemperatureUnitEnum.CELSIUS },
  location: {
    coordinates: {
      latitude: undefined,
      longitude: undefined
    },
    city: undefined,
    countryCode: undefined
  },
  forecast: {
    currentWeatherForecast: undefined,
    sixteenDayWeatherForecast: undefined,
    fiveDayHourlyForecast: undefined
  }
};

export interface IState {
  theme: IThemeState;
  temperatureUnit: ITemperatureUnitState;
  location: ILocationState;
  forecast: IForecasts;
}
