import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Profile = React.lazy(() => import('./views/UserProfile'));
const MyAccess = React.lazy(() => import('./views/MyAccess'));
const PendingApprovals = React.lazy(() => import('./views/PendingApprovals'));
const ManagerDashboard = React.lazy(() => import('./views/ManagerDashboard'));
const Certifications = React.lazy(() => import('./views/Certifications'));
const UserCertification = React.lazy(() => import('./views/Certifications/UserCertification'));
const TrackRequest = React.lazy(() => import('./views/TrackRequest'));
const RequestForOther = React.lazy(() => import('./views/TrackRequest/RequestForOther'));
const RequestForSelf = React.lazy(() => import('./views/TrackRequest/RequestForSelf'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/myaccess', name: 'My Access', component: MyAccess },
  { path: '/pending-approvals', name: 'Pending Approvals', component: PendingApprovals },
  { path: '/manager-dashboard', name: 'Manager Dashboard', component: ManagerDashboard },
  { path: '/certifications', name: 'Certifications', component: Certifications },
  { path: '/userCertification', name: 'User Certification', component: UserCertification },
  { path: '/trackRequest', name: 'Track Request', component: TrackRequest },
  { path: '/requestForOther', name: 'Request For Other', component: RequestForOther },
  { path: '/requestForSelf', name: 'Request For Self', component: RequestForSelf },
];

export default routes;
