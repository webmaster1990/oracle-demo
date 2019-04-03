import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd';
import {
  AppSidebar,
} from '@coreui/react';
import './custom-sidebar.scss';
import changePassword from "../../views/MyAccess/changePassword";

const SubMenu = Menu.SubMenu;

class SiderMenu extends React.Component {

  render() {
    const { sideBarCollapsed, location: { pathname } } = this.props;
    return (
      <AppSidebar fixed display="lg" style={{overflowY:"auto"}}>
        <div className="custom-sidebar">
          <Menu
            defaultSelectedKeys={[pathname.substr(1)]}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={sideBarCollapsed}
          >
            <Menu.Item key="dashboard">
              <Link to='/dashboard'>
                <Icon type='home'/>
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="myAccess">
              <Link to='/myAccess'>
                <Icon type='info-circle'/>
                <span>My Access</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="profile">
              <Link to='/profile'>
                <Icon type='profile'/>
                <span>Profile</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="pending-approvals">
              <Link to='/pending-approvals'>
                <Icon type='check-circle'/>
                <span>Pending Approvals</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="manager-dashboard">
              <Link to='/manager-dashboard'>
                <Icon type='check-circle'/>
                <span>Manager Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="certifications">
              <Link to='/certifications'>
                <Icon type='check-circle'/>
                <span>Certifications</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="trackRequest">
              <Link to='/trackRequest'>
                <Icon type='check-circle'/>
                <span>Track Request</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="requestForOther">
              <Link to='/requestForOther'>
                <Icon type='check-circle'/>
                <span>Request For Other</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="requestForSelf">
              <Link to='/requestForSelf'>
                <Icon type='check-circle'/>
                <span>Request For Self</span>
              </Link>
            </Menu.Item>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>My Access</span></span>}>
              <Menu.Item key="application">
                <Link to='/myaccess/application'>
                  <span>Application</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="entitlement">
                <Link to='/myaccess/entitlement'>
                  <span>Entitlements</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="roles">
                <Link to='/myaccess/roles'>
                  <span>Roles</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="13">
                <Link to='/'>
                  <span>My Information</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="changePassword">
              <Link to='/changePassword'>
                <span>Change Password</span>
              </Link>
            </Menu.Item>
              <Menu.Item key="proxy">
                <Link to='/myaccess/proxy'>
                  <span>Proxies</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </AppSidebar>
    );
  }
}

const mapStateToProps = (state) => ({
  sideBarCollapsed: state.settings.sideBarCollapsed,
});

export default connect(mapStateToProps)(withRouter(SiderMenu))
