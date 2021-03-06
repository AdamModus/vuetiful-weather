import MUTATION_TYPES from "../mutation-types";
import { IState } from "../state/index";

export default {
  [MUTATION_TYPES.USER_SET_CITY](state: IState, city: string) {
    state.location.city = city;
  },
  [MUTATION_TYPES.SET_COUNTRY_CODE](state: IState, countryCode: string) {
    state.location.countryCode = countryCode;
  }
};
