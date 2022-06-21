import axios from './axios';

export default {
	state: {
		events: [],
		total: 0,
		isEventsLoading: false,
		isDetailsLoading: false,
		eventDetails: null,
	},
	getters: {
		eventsList: (state) => state.events,
		eventDetails: (state) => state.eventDetails,
		isEventsLoading: (state) => state.isEventsLoading,
		isDetailsLoading: (state) => state.isDetailsLoading,
		totalEvents: (state) => +state.total,
	},
	actions: {
		async addNewEvent(store, event) {
			await axios.post('events', event);
			store.dispatch('fetchEventsList', { perPage: 3, page: 1 });
		},
		async deleteEvent(store, id) {
			await axios.delete(`events/${id}`);
			store.dispatch('fetchEventsList', { perPage: 3, page: 1 });
		},
		async fetchEventsList(store, pagination) {
			store.commit('TOGGLE_EVENTS_LOADING', true);
			const response = await axios.get(`events?_limit=${pagination.perPage}&_page=${pagination.page}`);
			store.commit('SET_TOTAL', response.headers['x-total-count']);
			store.commit('SET_EVENTS_LIST', response.data);
			store.commit('TOGGLE_EVENTS_LOADING', false);
		},
		async fetchEventDetails(store, id) {
			store.commit('TOGGLE_DETAILS_LOADING', true);
			const response = await axios.get(`events/${id}`);
			store.commit('SET_EVENT_DETAILS', response.data);
			store.commit('TOGGLE_DETAILS_LOADING', false);
		},
		async updateEventDetails(store, event) {
			await axios.put(`events/${event.id}`, event);
			store.dispatch('fetchEventDetails', event.id);
		},
	},
	mutations: {
		SET_EVENTS_LIST(state, events) {
			state.events = events;
		},
		TOGGLE_EVENTS_LOADING(state, loading) {
			state.isEventsLoading = loading;
		},
		TOGGLE_DETAILS_LOADING(state, loading) {
			state.isDetailsLoading = loading;
		},
		SET_TOTAL(state, total) {
			state.total = total;
		},
		SET_EVENT_DETAILS(state, eventDetails) {
			state.eventDetails = eventDetails;
		},
	},
	namespaced: true,
};
