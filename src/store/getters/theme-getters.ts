import { IState } from "../state/index";

export default {
  currentTheme(state: IState) {
    return state.theme.isDark;
  }
};
