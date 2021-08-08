import ServiceMenu from '../ServiceMenu/ServiceMenu';
import { CustomerOrder , CustomerCheckout } from '../../layouts/Customer/CustomerLayout';
import { AdminLogin , AdminDashboard , AdminRegistration} from '../../layouts/Admin/AdminLayout';
import { WorkerLogin , WorkerRegistration , WorkerDashboard } from '../../layouts/Worker/WorkerLayout';
// Dev Note: I'm pretty sure there's a much cleaner way than this
// ? Content Pages for Admin
import AdminInventory from '../Admin/AdminDashboard/components/DashboardContent/Content/Inventory';
import AdminTransactions from '../Admin/AdminDashboard/components/DashboardContent/Content/Transactions';
import AdminSettings from '../Admin/AdminDashboard/components/DashboardContent/Content/Settings';
// ? Content Pages for Worker
import WorkerInventory from '../Worker/WorkerDashboard/components/DashboardContent/Content/Inventory';
import WorkerTransactions from '../Worker/WorkerDashboard/components/DashboardContent/Content/Transactions';
import WorkerSettings from '../Worker/WorkerDashboard/components/DashboardContent/Content/Settings';

const MasterRoutes = [
    {
        path: '/',
        component: ServiceMenu,
        RouteType: 'public',
        AuthStatus: false,
        exact: true,
        strict: true,
    },
    {
        path: '/Customer/Order',
        component: CustomerOrder,
        RouteType: 'public',
        AuthStatus: false,
        strict: true,
        exact: true,
    },
    {
        path: '/Customer/Checkout',
        component: CustomerCheckout,
        RouteType: 'public',
        AuthStatus: false,
        strict: true,
        exact: true
    },
    {
        path: '/Admin/Login',
        component: AdminLogin,
        RouteType: 'authenticator',
        RedirectPath: '/Admin/Dashboard',
        strict: true,
        exact: true
    },
    {
        path: '/Admin/Registration',
        component: AdminRegistration,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login',
        strict: true,
        exact: true
    },
    {
        path: '/Admin/Dashboard',
        component: AdminDashboard,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login',
        strict: true,
        routes: [
            {
                path: '/Admin/Dashboard/Transactions',
                component: AdminTransactions,
                RouteType: 'protected',
                RedirectPath: '/Admin/Login',
                strict: true,
                exact: true
            },
            {
                path: '/Admin/Dashboard/Inventory',
                component: AdminInventory,
                RouteType: 'protected',
                RedirectPath: '/Admin/Login',
                strict: true,
                exact: true
            },
            {
                path: '/Admin/Dashboard/Settings',
                component: AdminSettings,
                RouteType: 'protected',
                RedirectPath: '/Admin/Login',
                strict: true,
                exact: true
            }
        ]
    },
    {
        path: '/Worker/Login',
        component: WorkerLogin,
        RouteType: 'authenticator',
        RedirectPath: '/Worker/Dashboard',
        strict: true,
        exact: true
    },
    {
        path: '/Worker/Registration',
        component: WorkerRegistration,
        RouteType: 'protected',
        RedirectPath: '/Worker/Login',
        strict: true,
        exact: true
    },
    {
        path: '/Worker/Dashboard',
        component: WorkerDashboard,
        RouteType: 'protected',
        RedirectPath: '/Worker/Login',
        strict: true,
        routes: [
            {
                path: '/Worker/Dashboard/Transactions',
                component: WorkerTransactions,
                RouteType: 'protected',
                RedirectPath: '/Worker/Login',
                strict: true,
                exact: true
            },
            {
                path: '/Worker/Dashboard/Inventory',
                component: WorkerInventory,
                RouteType: 'protected',
                RedirectPath: '/Worker/Login',
                strict: true,
                exact: true
            },
            {
                path: '/Worker/Dashboard/Settings',
                component: WorkerSettings,
                RouteType: 'protected',
                RedirectPath: '/Worker/Login',
                strict: true,
                exact: true
            }
        ]
    }
];

export default MasterRoutes;
