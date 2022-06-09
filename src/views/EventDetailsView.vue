<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <div>{{ currentEvent }}</div>
  </div>
</template>

<script>
import db from '../assets/db.json';
export default {
  props: {
    id: String
  },
  mounted() {
    this.currentEvent = db.events.find((elem) => {
      return elem.id === +this.id
    })
  },
  data() {
    return {
      currentEvent: null
    }
  }
}
</script>

<style>
</style>