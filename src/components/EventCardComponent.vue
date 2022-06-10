<template>
  <div class="card-container">
    <div class="event-id">{{"#"+event.id }}</div>
    <div class="event-title">{{ " " +event.title }}</div>
    <div class="event-description"><span class="subheader">What we will do: </span>{{" " + event.description }}</div>
    <div class="event-location"><span class="subheader">Where: </span>{{" " +event.location }}</div>
    <div class="event-date"><span class="subheader">When: </span>{{ " " + event.date }}</div>
    <div class="event-buttons flex justify-center align-middle">
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
  @apply m-4 p-4 w-80 h-80 border-2 border-green-700 rounded shadow-xl flex flex-col justify-between
}

.event-id {
  @apply font-bold text-green-900 flex justify-end align-bottom 
}
.event-title {
   @apply flex justify-center align-middle text-green-900  font-bold text-xl mb-4
}
.event-buttons button {
  @apply py-2 px-6 m-2 text-white text-xl font-bold border-2 border-white rounded-xl  bg-emerald-600 transition-colors hover:bg-emerald-800 
}
.subheader{
  @apply text-green-700 text-lg font-bold
}
</style>