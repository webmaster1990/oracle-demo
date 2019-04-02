import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import UserProfile from './UserProfile';
import ChallengeQuestions from './ChallengeQuestions';
import { Card } from 'antd';

import '../MyAccess/myAccess.scss'
class Profile extends Component{
  
  state = {
      activeTab: 'profile',
  }
  
  toggle = (activeTab) => () =>{
    this.setState({
      activeTab,
    });
  }

  tabPane = () => {
    return (
      <>
        <TabPane tabId="profile">
          <UserProfile />
        </TabPane>
        <TabPane tabId="subordinates">
          <UserProfile />
        </TabPane>
        <TabPane tabId="questions">
          <ChallengeQuestions />
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
                <img src={require('../../assets/avatars/default-avatar.png')} className="img-avatar" alt="admin@bootstrapmaster.com" />
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
            <Card className="no-border no-padding">
              <CardBody>
                  <Nav tabs className="card-border">
                    <NavItem>
                      <NavLink
                        active={this.state.activeTab === 'profile'}
                        onClick={this.toggle('profile')}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        active={this.state.activeTab === 'subordinates'}
                        onClick={this.toggle('subordinates')}
                      >
                        Subordinates
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        active={this.state.activeTab === 'questions'}
                        onClick={this.toggle('questions')}
                      >
                        Challenge Questions
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="card-border" activeTab={this.state.activeTab}>
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
