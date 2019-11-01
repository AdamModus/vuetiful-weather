import { IState } from "../state/index";

export default {
  theme(state: IState) {
    return state.theme.isDark;
  }
};
