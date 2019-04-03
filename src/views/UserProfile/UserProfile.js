import React, {Component} from 'react';
import {Card} from 'antd';
import moment from 'moment';
import {
  Col,
  Row,
  Button,
  Label,
  Input, FormGroup
} from "reactstrap";
import '../MyAccess/myAccess.scss'
import {ApiService} from '../../Services/ApiService';

class UserProfile extends Component {
  _dataContext = new ApiService();

  state = {
    user: {},
    isUserLoading: true,
    firstName: "",
    lastName: "",
    email: "",
    displayName: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
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

  onChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }

  updateProfile = async () => {
    const {firstName, lastName, email, displayName} = this.state
    const data =
      {
        requestId: "41",
        fields :[
          {
            "name": "First Name",
            "value": firstName
          },
          {
            "name": "Last Name",
            "value": lastName,
          },
          {
            "name" : "Email",
            "value": email
          },
          {
            "name" : "Display Name",
            "value": displayName
          }]
    }
    const updateProfile = await this._dataContext.updateProfile(data);
  }

  profile = () => {
    const {user} = this.state;
    const {showProfile} = this.props
    const {fields = []} = user;
    const getValue = (fieldName) => {
      return (fields.find(x => x.name === fieldName) || {}).value || '';
    }
    const firstName = getValue('First Name'), lastName = getValue('Last Name'), title = getValue('Title'),
      role = getValue('Role'), createdDate = getValue('usr_create'),
      organizationName = getValue('Organization Name'), displayName = getValue('Display Name'),
      userLogin = getValue('User Login');

    return (
      <div>
        {
          !showProfile ?
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
            </Col> :
            <div>
              <Row>
                <Col md="12" sm="12" xs="12">
                  <h5>Update Profile</h5>
                </Col>
              </Row>
              <Row>
                <Col md="6" sm="12" xs="12">
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange}/>
                  </FormGroup>
                </Col>
                <Col md="6" sm="12" xs="12">
                  <FormGroup>
                    <Label>Last Name</Label>
                    <Input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6" sm="12" xs="12">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="text" name="email" value={this.state.email} onChange={this.onChange}/>
                  </FormGroup>
                </Col>
                <Col md="6" sm="12" xs="12">
                  <FormGroup>
                    <Label>Display Name</Label>
                    <Input type="text" name="displayName" value={this.state.displayName}  onChange={this.onChange}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col Col md="1" sm="12" xs="12">
                  <Button type="button" color="primary" className="remove-btn" onClick={this.updateProfile}>Submit</Button>
                </Col>
              </Row>
              <hr className="hr"/>
              <Row>
                <Col md="12" sm="12" xs="12">
                  <h5>Update Profile Image</h5>
                </Col>
              </Row>
              <Row>
                <Col md="6" sm="12" xs="12">
                  <FormGroup>
                    <Input type="file" onChange={this.onChange}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="12" xs="12">
                  <Button color="primary" className=" remove-btn">Upload Image</Button>
                </Col>
              </Row>
              {/*<Row>
                <Col md="12" sm="12" xs="12">
                  <h5>Change Password</h5>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="12" xs="12">
                  <FormGroup>
                    <Label>Old password</Label>
                    <Input type="password" name="oldPassword" value="system@gmail.com" onChange={this.onChange}/>
                  </FormGroup>
                </Col>
                <Col md="4" sm="12" xs="12">
                  <FormGroup>
                    <Label>New password</Label>
                    <Input type="password" name="newPassword" value="system" onChange={this.onChange}/>
                  </FormGroup>
                </Col>
                <Col md="4" sm="12" xs="12">
                  <FormGroup>
                    <Label>Confirm password</Label>
                    <Input type="password" name="confirmPassword" value="system" onChange={this.onChange}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="12" xs="12">
                  <Button color="primary" className=" remove-btn">Change Password</Button>
                </Col>
              </Row>*/}
            </div>
        }
      </div>
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
