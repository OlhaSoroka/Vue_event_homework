<template>
  <div class="card-container">
    <div class="event-id">{{ event.id }}</div>
    <div class="event-title">{{ event.title }}</div>
    <div class="event-description">{{ event.description }}</div>
    <div class="event-location">{{ event.location }}</div>
    <div class="event-time">{{ event.time }}</div>
    <div class="event-buttons">
      <button @click="openEventDetails">Details</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  },
  methods: {
    openEventDetails() {
      this.$emit("openEventDetails", this.event.id);
    }
  }
}

</script>

<style scoped>
.card-container {
  @apply m-4 p-4 w-64 h-64 border-2 border-pink-600 rounded shadow-xl flex flex-col justify-between
}

.event-id {
  @apply font-bold text-red-500
}

.event-title {}

.event-description {}

.event-location {}

.event-time {}

.event-buttons button {
  @apply bg-purple-900 text-white font-bold rounded p-2
}
</style>