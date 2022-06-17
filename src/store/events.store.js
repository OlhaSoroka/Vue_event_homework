export default {
	state: {
		events: [],
	},
	getters: {
		eventsList: (state) => state.events,
		currentEvent: (state) => (id) => state.events.find((event) => +event.id === +id),
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
		fetchEventsList(store) {
			fetch('http://localhost:3004/events')
				.then((json) => json.json())
				.then((events) => store.commit('SET_EVENTS_LIST', events));
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
	},
	namespaced: true,
};
