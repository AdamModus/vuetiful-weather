import { IState } from "../state/index";
import MUTATION_TYPES from "./../mutation-types";

export default {
  [MUTATION_TYPES.SWITCH_THEME](state: IState, isDark: boolean) {
    state.theme.isDark = isDark;
  }
};
