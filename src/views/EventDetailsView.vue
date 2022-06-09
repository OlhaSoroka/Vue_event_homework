<template>
  <div v-if="currentEvent" class="border-2 border-teal-600 h-96 rounded-lg shadow-2xl m-2">
<div class="event-title">{{currentEvent.title}}</div>
  </div>
</template>

<script>
import db from '../assets/db.json';
export default {
  props: {
    id: String,

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