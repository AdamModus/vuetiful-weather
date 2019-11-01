import MUTATION_TYPES from "../mutation-types";

export default {
  switchTheme({ commit }: any, oldTheme: boolean) {
    commit(MUTATION_TYPES.SWITCH_THEME, !oldTheme);
  }
};
