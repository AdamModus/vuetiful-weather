import MUTATION_TYPES from "../mutation-types";
import { TemperatureUnitEnum } from "../state/ITemperatureUnitState";

export default {
  setTemperatureUnit({ commit }: any, unit: TemperatureUnitEnum) {
    commit(MUTATION_TYPES.SWITCH_TEMPERATURE_UNIT, unit);
  }
};
