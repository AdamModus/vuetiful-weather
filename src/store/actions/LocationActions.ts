import store from "@/store";
import MUTATION_TYPES from "../mutation-types";

export default {
  setCity({ commit }: any, city: string) {
    if (store.state.location.city === city) {
      return;
    }
    commit(MUTATION_TYPES.USER_SET_CITY, city);
    store.dispatch("fetchCurrentForecast", city);
  },
  setCountryCode({ commit }: any, countryCode: string) {
    if (store.state.location.countryCode === countryCode.toLowerCase()) {
      return;
    }
    commit(MUTATION_TYPES.SET_COUNTRY_CODE, countryCode);
  }
};
