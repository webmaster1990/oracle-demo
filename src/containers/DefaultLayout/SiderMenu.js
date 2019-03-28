import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd';
import {
  AppSidebar,
} from '@coreui/react';
import './customSidebar.scss';

class SiderMenu extends React.Component {

  render() {
    const { sideBarCollapsed } = this.props;
    return (
      <AppSidebar fixed display="lg">
        <div className="custom-sidebar">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={sideBarCollapsed}
          >
            <Menu.Item key="1">
              <Link to='/dashboard'>
                <Icon type='home'/>
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/myaccess'>
                <Icon type='info-circle'/>
                <span>My Access</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/profile'>
                <Icon type='profile'/>
                <span>Profile</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='/pendingApprovals'>
                <Icon type='check-circle'/>
                <span>Pending Approvals</span>
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

export default connect(mapStateToProps)(SiderMenu)
