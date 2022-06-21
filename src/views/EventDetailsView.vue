<template>
	<h1 class="header">Selected event</h1>
	<template v-if="isDetailsLoading">
		<div class="w-3/5 h-full mx-auto flex justify-center items-center"><SpinnerComponent></SpinnerComponent></div>
	</template>
	<template v-else>
		<div v-if="eventDetails" class="event-detail-wrapper">
			<div class="event-id">{{ '#' + eventDetails.id }}</div>
			<div class="event-title">{{ eventDetails.title }}</div>
			<div class="event-description"><span class="subheader">What we will do:</span> {{ eventDetails.description || ' -- ' }}</div>
			<div class="event-location"><span class="subheader">Where: </span> {{ eventDetails.location || ' -- ' }}</div>
			<div class="event-date"><span class="subheader">When: </span> {{ eventDetails.date || ' -- ' }}</div>
			<div class="event-time"><span class="subheader">Time:</span> {{ eventDetails.time || ' -- ' }}</div>
			<div class="event-organizer"><span class="subheader">Who organized this event:</span> {{ organizer || ' -- ' }}</div>
			<div class="event-category"><span class="subheader">What category:</span> {{ eventDetails.category || ' -- ' }}</div>
			<div class="event-attendees"><span class="subheader">Who will come:</span> {{ attendees || ' -- ' }}</div>
			<div class="flex justify-center">
				<button
					class="py-2 px-6 m-2 text-white text-xl font-bold border-2 border-white rounded-xl bg-yellow-500 transition-colors hover:bg-yellow-600"
					@click="editEvent"
				>
					Edit
				</button>
			</div>
		</div>
	</template>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SpinnerComponent from '../components/SpinnerComponent.vue';
export default {
	props: {
		id: String,
	},
	mounted() {
		this.fetchEventDetails(this.id);
	},
	computed: {
		...mapGetters('events', ['eventDetails', 'isDetailsLoading']),
		attendees() {
			return this.eventDetails && this.eventDetails.attendees.map((member) => member.name).join(', ');
		},
		organizer() {
			if (typeof this.eventDetails.organizer === 'string') {
				return this.eventDetails.organizer;
			} else {
				return this.eventDetails.organizer.user.name;
			}
		},
	},
	methods: {
		...mapActions('events', ['fetchEventDetails']),
		editEvent() {
			this.$router.push({ name: 'edit' });
		},
	},
	components: { SpinnerComponent },
};
</script>

<style scoped>
.header {
	@apply flex justify-center font-bold text-4xl text-green-900 m-8;
}
.subheader {
	@apply text-green-700 text-xl font-bold;
}
.event-id {
	@apply flex justify-end align-middle font-bold text-green-900;
}
.event-detail-wrapper {
	@apply border-2 border-teal-600 h-auto w-3/5 rounded-lg shadow-2xl m-2 p-6 mx-auto;
}
.event-title {
	@apply flex justify-center align-middle text-green-900  font-bold text-2xl pb-3;
}
.event-description {
	@apply text-gray-800 text-xl  my-3;
}
.event-location {
	@apply text-gray-800 text-xl my-3;
}
.event-date {
	@apply text-gray-800 text-xl  my-3;
}
.event-time {
	@apply text-gray-800 text-xl  my-3;
}
.event-category {
	@apply text-gray-800 text-xl  my-3;
}
.event-organizer {
	@apply text-gray-800 text-xl  my-3;
}
.event-attendees {
	@apply text-gray-800 text-xl  my-3 mb-10;
}
</style>
