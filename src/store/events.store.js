import db from '../assets/db.json';

export default{
	state: {
		events: db.events,
	},
	getters: {
		getEventsList: (state) => state.events,
		getCurrentEvent: (state) => (id) => state.events.find((event) => +event.id === +id),
	},
}

