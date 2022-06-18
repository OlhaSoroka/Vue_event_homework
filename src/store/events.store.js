import axios from './axios';

export default {
	state: {
		events: [],
		total: 0,
		isLoading: false,
	},
	getters: {
		eventsList: (state) => state.events,
		currentEvent: (state) => (id) => state.events.find((event) => +event.id === +id),
		isLoading: (state) => state.isLoading,
		totalEvents: (state) => +state.total,
	},
	actions: {
		async addNewEvent(store, event) {
			await axios.post('events',event);
			store.dispatch('fetchEventsList', { perPage: 3, page: 1 });
		},
		async deleteEvent(store, id) {
			await axios.delete(`events/${id}`);
			store.dispatch('fetchEventsList', { perPage: 3, page: 1 });
		},
		async fetchEventsList(store, pagination) {
			store.commit('TOGGLE_LOADING', true);
			const response = await axios.get(`events?_limit=${pagination.perPage}&_page=${pagination.page}`);
			store.commit('SET_TOTAL', response.headers['x-total-count']);
			store.commit('SET_EVENTS_LIST', response.data);
			store.commit('TOGGLE_LOADING', false);
		},
	},
	mutations: {
		SET_EVENTS_LIST(state, events) {
			state.events = events;
		},
		TOGGLE_LOADING(state, loading) {
			state.isLoading = loading;
		},
		SET_TOTAL(state, total) {
			state.total = total;
		},
	},
	namespaced: true,
};
