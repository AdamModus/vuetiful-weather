import { IState } from "../state/index";

export default {
  temperatureUnit(state: IState) {
    return state.temperatureUnit.unit;
  }
};
