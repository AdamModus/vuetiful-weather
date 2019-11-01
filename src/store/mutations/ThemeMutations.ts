import MUTATION_TYPES from "../mutation-types";
import { IState } from "../state/index";

export default {
  [MUTATION_TYPES.SWITCH_THEME](state: IState, isDark: boolean) {
    state.theme.isDark = isDark;
  }
};
