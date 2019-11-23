import { IState } from "../state/index";

export default {
  city(state: IState) {
    return state.location.city;
  },
  countryCode(state: IState) {
    return state.location.countryCode;
  }
};
