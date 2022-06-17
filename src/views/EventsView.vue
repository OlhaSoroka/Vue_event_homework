<template>
	<template v-if="isLoading"><div class="font-bold text-black">Events is loading...</div></template>
	<template v-else>
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
			<div>
				<h1 class="font-bold text-4xl text-green-900 mt-10 px-20 py-10 text-center">Best events in your location</h1>
				<div class="event-wrapper">
					<EventCardComponentVue
						v-for="(event, index) in eventsList"
						:key="index"
						:event="event"
						@openEventDetails="onEventSelect($event)"
					></EventCardComponentVue>
				</div>
				<div class="flex justify-center m-4">
					<button
						:disabled="isPrevPageDisabled"
						@click="prevPage"
						class="disabled:opacity-50 py-2 px-6 m-2 text-white text-xl font-bold border-2 border-white rounded-xl bg-emerald-600 transition-colors hover:bg-emerald-800"
					>
						Prev
					</button>
					<button
						:disabled="isNextPageDisabled"
						@click="nextPage"
						class="disabled:opacity-50 py-2 px-6 m-2 text-white text-xl font-bold border-2 border-white rounded-xl bg-emerald-600 transition-colors hover:bg-emerald-800"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	</template>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import EventCardComponentVue from '../components/EventCardComponent.vue';
export default {
	mounted() {
		const defaultPagination = {
			perPage: this.perPage,
			page: this.page,
		};
		this.fetchEventsList(defaultPagination);
	},
	data() {
		return {
			perPage: 3,
			page: 1,
		};
	},
	components: {
		EventCardComponentVue,
	},
	methods: {
		...mapActions('events', ['fetchEventsList']),
		onEventSelect(id) {
			this.$router.push({ name: 'event-details', params: { id } });
			this.isEventSelected = true;
		},
		back() {
			this.$router.back();
		},
		nextPage() {
			this.page += 1;
			this.fetchEventsList({
				perPage: this.perPage,
				page: this.page,
			});
		},
		prevPage() {
			this.page -= 1;
			this.fetchEventsList({
				perPage: this.perPage,
				page: this.page,
			});
		},
	},
	computed: {
		...mapGetters('events', ['eventsList', 'isLoading', 'totalEvents']),
		isPrevPageDisabled() {
			return this.page === 1;
		},
		isNextPageDisabled() {
			return this.page === this.lastPage;
		},
		lastPage() {
			Math.ceil(this.totalEvents / this.perPage);
		},
	},
};
</script>

<style>
.event-wrapper {
	@apply flex flex-wrap justify-center;
}
</style>
