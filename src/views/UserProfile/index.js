import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button, Badge} from "reactstrap";
import '../MyAccess/myAccess.scss'
class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  profile = () => {
    return (
        <Col md="12" sm="12" >
          <h5> ADUser1</h5>
          <p>Pankaj Tripathi</p>
          <p><b>First Name: </b>Pankaj</p>
          <p><b>Last Name: </b>Tripathi</p>
          <p><b>Display Name: </b>Pankaj Tripathi</p>
          <p><b>User Login: </b>PTRIP</p>
          <p><b>Email: </b></p>
          <p><b>Organization Name: </b>Xellerate Users</p>
          <p><b>Role: </b>EMP</p>
          <p><b>Date Created: </b>March 18,2019 04:13 PM</p>
          <p><b>Manager: </b>System Administrator</p>
        </Col>
    )
  }

  toggle = (tabPane, tab) => {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane = () => {
    return (
      <>
        <TabPane tabId="1">
          {this.profile()}
        </TabPane>
        <TabPane tabId="2">
          {this.profile()}
        </TabPane>
        <TabPane tabId="3">
          {this.profile()}
        </TabPane>
      </>
    );
  }

  render() {
    return(
      <div className="animated fadeIn">
        <Row>
          <Col lg="3" md="3" xs="12" sm="12">
            <Card className="card-border">
              <CardBody>
                <Col className="text-center">
                <img src={'../../assets/img/avatars/default-avatar.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </Col>
                <br/>
                <Col className="text-center">
                  <h5>Pankaj Tripathi</h5>
                </Col>
                <Col className="text-center">
                  <h5 style={{color:"#999"}}>EMP</h5>
                </Col>
                <Col className="text-center">
                  <Link to="/" style={{fontSize:"20px"}}>Update Profile</Link>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col lg="9" md="9" xs="12" sm="12">
            <Card className="card-border">
              <CardBody>
                  <Nav tabs className="card-border">
                    <NavItem>
                      <NavLink
                        active={this.state.activeTab[0] === '1'}
                        onClick={() => { this.toggle(0, '1'); }}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        active={this.state.activeTab[0] === '2'}
                        onClick={() => { this.toggle(0, '2'); }}
                      >
                        Subordinates
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        active={this.state.activeTab[0] === '3'}
                        onClick={() => { this.toggle(0, '3'); }}
                      >
                        Challenge Questions
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="card-border" activeTab={this.state.activeTab[0]}>
                    {this.tabPane()}
                  </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Profile
