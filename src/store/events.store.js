import db from '../assets/db.json';

export default {
	state: {
		events: db.events,
	},
	getters: {
		eventsList: (state) => state.events,
		currentEvent: (state) => (id) => state.events.find((event) => +event.id === +id),
	},
	actions: {
		addNewEvent(ctx, event) {
			const lastEventIndex = ctx.state.events.length - 1;
			const newId = ctx.state.events[lastEventIndex].id + 1;
			event.id = newId;
			ctx.commit('ADD_EVENT', event);
		},
		deleteEvent(ctx, id) {
			ctx.commit('DELETE_EVENT', id);
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
	},
	namespaced: true,
};
