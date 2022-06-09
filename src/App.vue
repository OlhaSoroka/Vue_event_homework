

<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="max-w-7xl mx-auto">
      <router-view></router-view>
    </div>

  </div>

</template>


<script>
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent
  }
}

</script>


<style>
</style>
