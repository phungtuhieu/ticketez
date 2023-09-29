import UserHome from '~/pages/User/Home';
import UserContact from '~/pages/User/Contact';
import { AdminIndex, AdminMovie, AdminCinemaComplex } from '~/pages/Admin';
import { AdminLayout, DefaultLayout } from '~/layouts';

const publicRoutes = [
    //Admin
    { path: '/admin/index', component: AdminIndex, layout: AdminLayout },
    { path: '/admin/movie', component: AdminMovie, layout: AdminLayout },
    { path: '/admin/cinema-complex', component: AdminCinemaComplex, layout: AdminLayout },

    // User
    { path: '/', component: UserHome, layout: DefaultLayout },
    { path: '/contact', component: UserContact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
