import ExampleComponent from '../components/ExampleComponent';
import Dashboard from '../view/Dashboard';
import Home from '../view/Home';
import Users from '../view/users/Users';
import UserDetails from '../components/users/UserDetailsComponent';
import Error from '../view/Error';
import Tickets from '../view/tickets/Tickets';
import TicketDetails from '../components/tickets/TicketDetailsComponent';
import Brands from '../view/brands/Brands';
import BrandDetails from '../components/brands/BrandDetailsComponent'
import Sponsors from '../components/SponsorsComponent';
import Maintenance from '../components/MaintenanceComponent';

export default [
    {
        path: '/',
        name: 'HomeView',
        redirect: {name: 'Login'},
        component: Home,
        meta: {
            guard: "guest"
        },

    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'DashboardView',
        redirect: { name: 'ExampleComponent' },
        children: [
            {
              path: '/example',
              component: ExampleComponent,
              name: 'ExampleComponent'
            },
            {
                path: '/users',
                component: Users,
                name: 'UsersView',
            },
            {
                path: '/user/:id/details',
                component: UserDetails,
                name: 'UserDetails',
            },
            {
                path: '/tickets',
                component: Tickets,
                name: 'TicketsView',
            },
            {
                path: '/ticket/:id/details',
                component: TicketDetails,
                name: 'TicketDetails',
            },
            {
                path: '/brands',
                component: Brands,
                name: 'BrandsComponent',
            },
            {
                path: '/brand/:id/details',
                component: BrandDetails,
                name: 'BrandDetails',
            },
            {
                path: '/sponsors',
                component: Sponsors,
                name: 'SponsorsComponent',
            },
            {
                path: '/maintenance',
                component: Maintenance,
                name: 'MaintenanceComponent',
            }
        ]
    },
    {
        path: "/forbidden",
        name: "PageForbidden",
        component: Error,
        props: { code: 403 },
    },
    {
        path: "*",
        name: "PageNotFound",
        component: Error,
    },
    {
        path: "/internal-error",
        component: Error,
        props: { code: 500 },
    }
]
