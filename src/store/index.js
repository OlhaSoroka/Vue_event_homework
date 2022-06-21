import { createStore } from 'vuex';
import eventStore from './events.store';
import userStore from './user.store';

export const store = createStore({
	modules: {
		events: eventStore,
		user: userStore,
	},
});
