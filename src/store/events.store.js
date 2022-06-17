import axios from './axios';

export default {
	state: {
		events: [],
		total:0,
		isLoading: false,
	},
	getters: {
		eventsList: (state) => state.events,
		currentEvent: (state) => (id) => state.events.find((event) => +event.id === +id),
		isLoading: (state) => state.isLoading,
		totalEvents:(state) => +state.total,
	},
	actions: {
		addNewEvent(store, event) {
			const lastEventIndex = store.state.events.length - 1;
			const newId = store.state.events[lastEventIndex].id + 1;
			event.id = newId;
			store.commit('ADD_EVENT', event);
		},
		deleteEvent(store, id) {
			store.commit('DELETE_EVENT', id);
		},
		async fetchEventsList(store,pagination) {
			store.commit('TOGGLE_LOADING', true);
			const response = await axios.get(`events?_limit=${pagination.perPage}&_page=${pagination.page}`);
			store.commit('SET_TOTAL',response.headers['x-total-count'])
			store.commit('SET_EVENTS_LIST', response.data);
			store.commit('TOGGLE_LOADING', false);
			
		},
	},
	mutations: {
		ADD_EVENT(state, event) {
			state.events.push(event);
		},
		DELETE_EVENT(state, id) {
			const eventIndex = state.events.findIndex((elem) => elem.id === id);
			state.events.splice(eventIndex, 1);
		},
		SET_EVENTS_LIST(state, events) {
			state.events = events;
		},
		TOGGLE_LOADING(state, loading) {
			state.isLoading = loading;
		},
		SET_TOTAL(state,total){
			state.total=total
		},
	},
	namespaced: true,
};
