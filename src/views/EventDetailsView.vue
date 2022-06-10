<template>
<h1 class="header">Selected event</h1>
  <div v-if="currentEvent" class="event-detail-wrapper">
<div class="event-id">{{"#"+currentEvent.id}}</div>
<div class="event-title">{{" " +currentEvent.title}}</div>
<div class="event-description"><span class="subheader">What we will do:</span>{{" " +currentEvent.description}}</div>
<div class="event-location"><span class="subheader">Where: </span>{{" " +currentEvent.location }}</div>
<div class="event-date"><span class="subheader">When: </span>{{" " +currentEvent.date }}</div>
<div class="event-time"><span class="subheader">Time:</span>{{" " +currentEvent.time }}</div>
<div class="event-organizer"><span class="subheader">Who organized this event:</span>{{" " +currentEvent.organizer}}</div>
<div class="event-category"><span class="subheader">What category:</span>{{" " +currentEvent.category}}</div>
<div class="event-attendees"><span class="subheader">Who will come:</span>{{" " + attendees}}</div>
<div ></div>
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
      currentEvent: null,
    }
  },
  computed: {
    attendees() {
      return this.currentEvent && this.currentEvent.attendees.map((member) => member.name).join(', ')
    }
  }
}
</script>

<style scoped >
.header{
  @apply flex justify-center font-bold text-4xl text-green-900 m-8
}
.subheader{
  @apply  text-green-700 text-xl font-bold
}
.event-id{
  @apply flex justify-end align-middle font-bold text-green-900
}
.event-detail-wrapper{
  @apply border-2 border-teal-600 h-auto w-3/5 rounded-lg shadow-2xl m-2 p-6 mx-auto
}
.event-title {
   @apply flex justify-center align-middle text-green-900  font-bold text-2xl pb-3
}
.event-description{
  @apply text-gray-800 text-xl  my-3
}
.event-location{
 @apply text-gray-800 text-xl my-3
}
.event-date{
 @apply text-gray-800 text-xl  my-3
}
.event-time{
 @apply text-gray-800 text-xl  my-3
}
.event-category{
   @apply text-gray-800 text-xl  my-3
}
.event-organizer{
    @apply  text-gray-800 text-xl  my-3 
}
.event-attendees{
  @apply  text-gray-800 text-xl  my-3 mb-10
}
</style>