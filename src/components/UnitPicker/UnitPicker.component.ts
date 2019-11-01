import { IState } from "@/store/state";
import Vue from "vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "UnitPicker",

  computed: {
    ...mapState({
      unit: (state: IState) => state.temperatureUnit.unit
    })
  },

  methods: {
    ...mapActions(["setTemperatureUnit"]),

    unitPicked(pickedUnit: string) {
      if (this.unit === pickedUnit) {
        return;
      }
      this.setTemperatureUnit(pickedUnit);
    }
  }
});
