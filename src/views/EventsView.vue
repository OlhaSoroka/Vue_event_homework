<template>
  <h1>Events page</h1>
  <div v-if="$route.name === 'event-details'">
    <router-view></router-view>
    <button class="bg-pink-500 text-white fond-bold p-2" @click="back">Back</button>
  </div>
  <div v-else class=" event-wrapper">
    <EventCardComponentVue v-for="(event, index) in events" :key="index" :event="event"
      @openEventDetails="onEventSelect($event)"></EventCardComponentVue>
  </div>
</template>

<script>
import db from "../assets/db.json"
import EventCardComponentVue from "../components/EventCardComponent.vue";
export default {
  components: {
    EventCardComponentVue
  },
  mounted() {
    this.events = db.events;
  },
  data() {
    return {
      events: [],
    }
  },
  methods: {
    onEventSelect(id) {
      this.$router.push({ name: 'event-details', params: { id } })
      this.isEventSelected = true
    },
    back() {
      this.$router.back()
    }
  }
}
</script>

<style>
.event-wrapper {
  @apply flex flex-wrap
}
</style>