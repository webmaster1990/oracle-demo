import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Profile = React.lazy(() => import('./views/UserProfile'));
const MyAccess = React.lazy(() => import('./views/MyAccess'));
const PendingApprovals = React.lazy(() => import('./views/PendingApprovals'));
const ManagerDashboard = React.lazy(() => import('./views/ManagerDashboard'));
const Certifications = React.lazy(() => import('./views/Certifications'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/myaccess', name: 'My Access', component: MyAccess },
  { path: '/pending-approvals', name: 'Pending Approvals', component: PendingApprovals },
  { path: '/manager-dashboard', name: 'Manager Dashboard', component: ManagerDashboard },
  { path: '/certifications', name: 'Certifications', component: Certifications },
];

export default routes;
