<template>
  <div class="home">
    <h1>Rafa Rulez</h1>
    <UnitPicker></UnitPicker>
  </div>
</template>

<script>
// @ is an alias to /src
import UnitPicker from "@/components/UnitPicker/UnitPicker";

export default {
  name: "home",
  components: {
    UnitPicker
  }
};
</script>
