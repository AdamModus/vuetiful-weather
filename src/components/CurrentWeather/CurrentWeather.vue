<template>
  <div>
    <h1>current weather json</h1>
    <h1 class="owf owf-800"></h1>
    {{ currentWeather }}
    <h1>Current Weather Visual</h1>
    <h1 class="owf" v-bind:class="weatherIconId"></h1>
  </div>
</template>

<script lang="ts">
import { IState } from '@/store/state';
import Vue from 'vue';
import { mapState } from 'vuex';
import { ICurrentWeatherForecast } from '../../store/state/IForecasts';
import store from '../../store';

export default Vue.extend({
  name: 'CurrentWeather',

  computed: {
    ...mapState({
      currentWeather(state: IState): ICurrentWeatherForecast | undefined {
        return state.forecast.currentWeatherForecast;
      },
    }),
    weatherIconId(): string {
      if (this.currentWeather && this.currentWeather.iconId) {
        return 'owf-' + this.currentWeather.iconId;
      }
      return '';
    },
  },
});
</script>

<style scoped></style>
