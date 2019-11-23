import { IState } from "@/store/state";
import Vue from "vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "LocationInput",

  computed: {
    ...mapState({
      city: (state: IState) => state.location.city
    })
  },

  watch: {
    city: function() {
      this.cityInput = this.city;
    }
  },

  methods: {
    ...mapActions(["setCity"]),

    submit() {
      this.setCity(this.cityInput);
    }
  },

  data: () => ({
    cityInput: ""
  })
});
