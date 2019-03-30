import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd';
import {
  AppSidebar,
} from '@coreui/react';
import './custom-sidebar.scss';

const SubMenu = Menu.SubMenu;

class SiderMenu extends React.Component {

  render() {
    const { sideBarCollapsed, location: { pathname } } = this.props;
    return (
      <AppSidebar fixed display="lg">
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
            <Menu.Item key="myaccess">
              <Link to='/myaccess'>
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
            <Menu.Item key="6">
              <Link to='/certifications'>
                <Icon type='check-circle'/>
                <span>Certifications</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to='/trackRequest'>
                <Icon type='check-circle'/>
                <span>Track Request</span>
              </Link>
            </Menu.Item>
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
