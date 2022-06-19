import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EventsView from '../views/EventsView.vue';
import CreateEventView from '../views/CreateEventView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import EventDetailsView from '../views/EventDetailsView.vue';
import EditEventView from '../views/EditEventView.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/events',
			name: 'events',
			component: EventsView,
			children: [
				{
					path: ':id',
					name: 'event-details',
					component: EventDetailsView,
					props: true,
				},
			],
		},
		{
			path: '/create',
			name: 'create',
			component: CreateEventView,
		},
		{
			path: '/edit',
			name: 'edit',
			component: EditEventView,
		},
		{
			path: '/:catcAll(.*)',
			name: '404',
			component: NotFoundView,
		},
	],
});

export default router;
