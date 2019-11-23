import locationMutations from "./LocationMutations";
import temperatureUnitMutations from "./TemperatureUnitMutations";
import themeMutations from "./ThemeMutations";
import forecastMutation from "./ForecastMutations";

export default {
  ...themeMutations,
  ...temperatureUnitMutations,
  ...locationMutations,
  ...forecastMutation
};
