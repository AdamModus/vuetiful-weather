import * as locationMutationTypes from "./LocationMutationTypes";
import * as temperatureUnitMutationTypes from "./TemperatureUnitMutationTypes";
import * as themeMutationTypes from "./ThemeMutationTypes";

export default {
  ...themeMutationTypes,
  ...temperatureUnitMutationTypes,
  ...locationMutationTypes
};
