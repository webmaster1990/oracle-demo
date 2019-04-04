import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Profile = React.lazy(() => import('./views/UserProfile'));
//const MyAccess = React.lazy(() => import('./views/MyAccess'));
const PendingApprovals = React.lazy(() => import('./views/PendingApprovals'));
const ManagerDashboard = React.lazy(() => import('./views/ManagerDashboard'));
const Certifications = React.lazy(() => import('./views/Certifications'));
const UserCertification = React.lazy(() => import('./views/Certifications/UserCertification'));
const TrackRequest = React.lazy(() => import('./views/TrackRequest'));
const RequestForOther = React.lazy(() => import('./views/TrackRequest/RequestForOther'));
const RequestForSelf = React.lazy(() => import('./views/TrackRequest/RequestForSelf'));
const Application = React.lazy(() => import('./views/MyAccess/Application'));
const Entitlement = React.lazy(() => import('./views/MyAccess/Entitlement'));
const changePassword = React.lazy(() => import('./views/MyAccess/changePassword'));
const Roles = React.lazy(() => import('./views/MyAccess/Roles'));
const Proxy = React.lazy(() => import('./views/MyAccess/Proxy'));
const searchUserProfile = React.lazy(() => import('./views/UserProfile/searchUserProfile'));
const userList = React.lazy(() => import('./views/UserProfile/userList'));
const compareAccess = React.lazy(() => import('./views/Access/compareAccess'));
const TargetAccount = React.lazy(() => import('./views/TargetAccount'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  //{ path: '/myAccess', name: 'My Access', component: MyAccess },
  { path: '/pending-approvals', name: 'Pending Approvals', component: PendingApprovals },
  { path: '/manager-dashboard', name: 'Manager Dashboard', component: ManagerDashboard },
  { path: '/certifications', name: 'Certifications', component: Certifications },
  { path: '/userCertification', name: 'User Certification', component: UserCertification },
  { path: '/trackRequest', name: 'Track Request', component: TrackRequest },
  { path: '/requestForOther', name: 'Request For Other', component: RequestForOther },
  { path: '/requestForSelf', name: 'Request For Self', component: RequestForSelf },
  { path: '/myaccess/application', name: 'Application', component: Application },
  { path: '/myaccess/entitlement', name: 'Application', component: Entitlement },
  { path: '/myaccess/roles', name: 'Roles', component: Roles },
  { path: '/myaccess/proxy', name: 'Proxy', component: Proxy },
  { path: '/search-user-profile', name: 'Searched User Profile', component: searchUserProfile },
  { path: '/user-list', name: 'User List', component: userList },
  { path: '/compare-access', name: 'Compare Access', component: compareAccess },
  { path: '/change-password', name: 'Change Password', component: changePassword },
  { path: '/target-account', name: 'Target Account', component: TargetAccount },
];

export default routes;
