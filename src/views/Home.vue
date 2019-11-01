<template>
  <div class="home">
    <h1>Rafa Rulez</h1>
    <LocationInput></LocationInput>
    <UnitPicker></UnitPicker>
  </div>
</template>

<script>
// @ is an alias to /src
import UnitPicker from "@/components/UnitPicker/UnitPicker";
import LocationInput from "@/components/LocationInput/LocationInput";

export default {
  name: "home",
  components: {
    LocationInput,
    UnitPicker
  }
};
</script>
