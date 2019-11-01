import MUTATION_TYPES from "../mutation-types";

export default {
  setCity({ commit }: any, city: string) {
    commit(MUTATION_TYPES.USER_SET_CITY, city);
  }
};
