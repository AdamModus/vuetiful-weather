export default {
  theme: {
    isDark: true
  }
};

export interface IState {
  theme: { isDark: boolean };
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
