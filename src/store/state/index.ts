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
  }
};

export interface IState {
  theme: IThemeState;
  temperatureUnit: ITemperatureUnitState;
  location: ILocationState;
}

// location {
//     coordinates: {
//         latitude
//         longitude
//     }
// }
// status: "failed"
// temperature: undefined,
// city: undefined,
// country: undefined,
// humidity: undefined,
// description: undefined,
// error: undefined

// export interface ILocationState {
//   coordinates: {
//     latitude: Number | undefined;
//     longitude: Number | undefined;
//   };
//   city: String | undefined;
//   countryCode: String | undefined;
// }

// export interface ITemperatureUnitState {
//   temperatureUnit: TemperatureUnitEnum | undefined;
// }

// export enum TemperatureUnitEnum {
//   CELSIUS = "Celsius",
//   KELVIN = "Kelvin",
//   FAHRENHEIT = "Fahrenheit"
// }

// export interface IForecastState {
//   forecast: any;
// }
