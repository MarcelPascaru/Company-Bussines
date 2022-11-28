import Dashboard from '../view/Dashboard';
import StatisticsView from '../view/statistics/Statistics';
import Users from '../view/users/Users';
import UserDetails from '../components/users/UserDetailsComponent';
import Error from '../view/Error';
import Tickets from '../view/tickets/Tickets';
import TicketDetails from '../components/tickets/TicketDetailsComponent';
import Brands from '../view/brands/Brands';
import BrandDetails from '../components/brands/BrandDetailsComponent'
import Sponsors from '../view/sponsors/Sponsors';
import SponsorDetails from "@/components/sponsors/SponsorDetailsComponent";
import Services from '../view/services/Services';
import ServiceDetails from '../components/services/ServicesDetailsComponent';

export default [
    {
        path: '/',
        component: Dashboard,
        name: 'DashboardView',
        redirect: { name: 'StatisticsView' },
        children: [
            {
              path: '/statistics',
              component: StatisticsView,
              name: 'StatisticsView'
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
                path: '/sponsor/:id/details',
                component: SponsorDetails,
                name: 'SponsorDetails',
            },
            {
                path: '/services',
                component: Services,
                name: 'ServicesComponent',
            },
            {
                path: '/service/:id/details',
                component: ServiceDetails,
                name: 'ServiceDetails',
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
