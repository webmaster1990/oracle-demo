import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Profile = React.lazy(() => import('./views/UserProfile'));
const MyAccess = React.lazy(() => import('./views/MyAccess'));
const PendingApprovals = React.lazy(() => import('./views/PendingApprovals'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/myaccess', name: 'My Access', component: MyAccess },
  { path: '/pendingApprovals', name: 'Pending Approvals', component: PendingApprovals },
];

export default routes;
