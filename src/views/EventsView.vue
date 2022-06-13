<template>
	<div v-if="$route.name === 'event-details'">
		<router-view></router-view>
		<div class="flex justify-center">
			<button
				class="py-2 px-6 m-2 text-white text-xl font-bold border-2 border-white rounded-xl bg-emerald-600 transition-colors hover:bg-emerald-800"
				@click="back"
			>
				Back
			</button>
		</div>
	</div>
	<div v-else>
   <div >
     <h1 class="font-bold text-4xl text-green-900 mt-10 px-20 py-10 text-center">Best events in your location</h1>
<div class="event-wrapper">
  		<EventCardComponentVue
			v-for="(event, index) in $store.getters.getEventsList"
			:key="index"
			:event="event"
			@openEventDetails="onEventSelect($event)"
		></EventCardComponentVue>
</div>
   </div>
	</div>
</template>

<script>
import EventCardComponentVue from '../components/EventCardComponent.vue';
export default {
	components: {
		EventCardComponentVue,
	},
	methods: {
		onEventSelect(id) {
			this.$router.push({ name: 'event-details', params: { id } });
			this.isEventSelected = true;
		},
		back() {
			this.$router.back();
		},
	},
};
</script>

<style>
.event-wrapper {
	@apply flex flex-wrap justify-center;
}
</style>
