  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
  import {Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button} from "reactstrap";

  class Profile extends Component{
    constructor(props) {
      super(props);
      this.state = {
        activeTab: new Array(4).fill('1'),
      };
    }

    profile = () => {
      return (
        <div className="bd-example">
        <dl className="row">
          <dt className="col-sm-3"> <h5>Pankaj Tripathi</h5></dt>
          <dd className="col-sm-9"></dd>
          <dt className="col-sm-3">First Name:</dt>
          <dd className="col-sm-9">Pankaj</dd>
          <dt className="col-sm-3">Last Name:</dt>
          <dd className="col-sm-9">Tripathi</dd>
          <dt className="col-sm-3">Display Name:</dt>
          <dd className="col-sm-9">Pankaj Tripathi</dd>
          <dt className="col-sm-3">User Login:</dt>
          <dd className="col-sm-9">PTRIP</dd>
          <dt className="col-sm-3">Email:</dt>
          <dd className="col-sm-9"></dd>
          <dt className="col-sm-3">Organization Name:</dt>
          <dd className="col-sm-9">Xellerate Users</dd>
          <dt className="col-sm-3">Role:</dt>
          <dd className="col-sm-9">EMP</dd>
          <dt className="col-sm-3">Date Created:</dt>
          <dd className="col-sm-9">March 18,2019 04:13 PM</dd>
          <dt className="col-sm-3">Manager:</dt>
          <dd className="col-sm-9">System Administrator</dd>
        </dl>
        </div>
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
              <Card>
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
                    {/*<Button className="m-0 p-0" color="link">
                      Toggle item
                    </Button>*/}
                    <Link to="/" style={{fontSize:"20px"}}>Update Profile</Link>
                  </Col>
                </CardBody>
              </Card>
            </Col>
            <Col lg="9" md="9" xs="12" sm="12">
              <Card>
                <CardBody>
                    <Nav tabs>
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
                    <TabContent activeTab={this.state.activeTab[0]}>
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
