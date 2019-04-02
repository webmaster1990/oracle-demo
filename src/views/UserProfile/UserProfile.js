import React, {Component} from 'react';
import {Col,} from "reactstrap";
import {Card} from 'antd';
import moment from 'moment';
import {ApiService} from '../../Services/ApiService';

class UserProfile extends Component {
  _dataContext = new ApiService();
  
  state = {
    user: {},
    isUserLoading: true,
  }
  
  componentDidMount() {
    this.getData();
  }
  
  getData = async () => {
    this.setState({
      isUserLoading: true,
    });
    const userRes = await this._dataContext.getUserById(20);
    const newState = {};
    if (!userRes.error) {
      newState.user = userRes;
    }
    this.setState({
      ...newState,
      isUserLoading: false,
    });
  }
  
  profile = () => {
    const {user} = this.state;
    const {fields = []} = user;
    const getValue = (fieldName) => {
      return (fields.find(x => x.name === fieldName) || {}).value || '';
    }
    const firstName = getValue('First Name'), lastName = getValue('Last Name'), title = getValue('Title'),
      role = getValue('Role'), createdDate = getValue('usr_create'),
      organizationName = getValue('Organization Name'), displayName = getValue('Display Name'),
      userLogin = getValue('User Login');
    
    return (
      <Col md="12" sm="12">
        <h5> {title}</h5>
        <p>{firstName} {lastName}</p>
        <p><b>First Name: </b>{firstName}</p>
        <p><b>Last Name: </b>{lastName}</p>
        <p><b>Display Name: </b>{(displayName && displayName.base) || ''}</p>
        <p><b>User Login: </b>{userLogin}</p>
        <p><b>Email: </b></p>
        <p><b>Organization Name: </b>{organizationName}</p>
        <p><b>Role: </b>{role}</p>
        <p><b>Date Created: </b>{createdDate && moment(createdDate).format('MMMM Do YYYY h:mm:ss a')}</p>
        <p><b>Manager: </b>System Administrator</p>
      </Col>
    )
  }
  
  render() {
    return (
      <Card className="no-padding no-border" loading={this.state.isUserLoading}>
        {!this.state.isUserLoading && this.profile()}
      </Card>
    )
  }
}
export default UserProfile;
