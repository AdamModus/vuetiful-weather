import MUTATION_TYPES from "../mutation-types";
import { IState } from "../state/index";
import { TemperatureUnitEnum } from "../state/ITemperatureUnitState";

export default {
  [MUTATION_TYPES.SWITCH_TEMPERATURE_UNIT](
    state: IState,
    unit: TemperatureUnitEnum
  ) {
    state.temperatureUnit.unit = unit;
  }
};
