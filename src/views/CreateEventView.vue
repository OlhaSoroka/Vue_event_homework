<template>
	<div class="form-wrapper">
		<h1 class="header">Create your event</h1>
		<form class="flex flex-col w-full p-6">
			<div v-for="(input, index) in formInputs" :key="index" class="input-item-wrapper">
				<h2 class="w-1/5 font-bold text-green-900">{{ input.label }}:</h2>
				<input v-model="eventForm[input.model]" type="text" class="border-2 border-green-900 grow p-2 rounded-md" />
			</div>
		</form>
		<div class="flex justify-center align-middle">
			<button
				@click="createEvent"
				class="py-2 px-6 m-2 w-52 text-white text-xl font-bold border-2 border-white rounded-xl bg-emerald-600 transition-colors hover:bg-emerald-800"
			>
				Create event
			</button>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
	data() {
		return {
			formInputs: [
				{ label: 'Event title', model: 'title' },
				{ label: 'Event date', model: 'date' },
				{ label: 'Event time', model: 'time' },
				{ label: 'Event location', model: 'location' },
				{ label: 'Event description', model: 'description' },
				{ label: 'Event organizer', model: 'organizer' },
				{ label: 'Event category', model: 'category' },
			],
			eventForm: {
				title: '',
				date: '',
				time: '',
				location: '',
				description: '',
				organizer: '',
				category: '',
				attendees: [],
			},
		};
	},
	methods: {
		...mapActions('events',['addNewEvent']),
		createEvent() {
			this.addNewEvent(this.eventForm);
			this.$router.push({ name: 'events' });
		},
	},
};
</script>

<style scoped>
.form-wrapper {
	@apply border-2 border-teal-600 h-auto w-3/5 rounded-lg shadow-2xl  p-6 mx-auto  mt-16;
}
.header {
	@apply flex justify-center font-bold text-4xl text-green-900 m-8;
}
.input-item-wrapper {
	@apply flex items-center mb-2 h-12;
}
</style>
