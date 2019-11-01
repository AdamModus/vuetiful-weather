export default interface ITemperatureUnitState {
  unit: TemperatureUnitEnum;
}

export enum TemperatureUnitEnum {
  CELSIUS = "Celsius",
  FAHRENHEIT = "Fahrenheit"
}
