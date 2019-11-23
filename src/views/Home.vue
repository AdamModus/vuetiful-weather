<template>
  <div class="home">
    <h1>Rafa Rulez</h1>
    <LocationInput></LocationInput>
    <UnitPicker></UnitPicker>
    <ForecastAggregator></ForecastAggregator>
  </div>
</template>

<style scoped>
@import "../assets/owfont/css/owfont-regular.min.css";
</style>

<script>
import UnitPicker from "@/components/UnitPicker/UnitPicker";
import LocationInput from "@/components/LocationInput/LocationInput";
import ForecastAggregator from "@/components/ForecastAggregator/ForecastAggregator";

export default {
  name: "home",
  components: {
    LocationInput,
    UnitPicker,
    ForecastAggregator
  }
};
</script>
