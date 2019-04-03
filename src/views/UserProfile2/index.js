import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Button,
  Badge,
  Label,
  Input, FormGroup
} from "reactstrap";
import '../MyAccess/myAccess.scss'
import ContentCard from "../MyAccess";
class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeTab: new Array(4).fill('1'),
      showProfile:false,
    };
  }

  showProfile = () =>{
    const {showProfile} = this.state
   if(!showProfile){
     this.setState({showProfile: true})
   }else {
     this.setState({showProfile: false})
   }
  }

  profile = () => {
    const {updateProfile} = this.state
    return (
      <div>
      {
        !updateProfile ?
          <Col md="12" sm="12" xs="12" >
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
                  <Input type="text" value="system"/>
                </FormGroup>
              </Col>
              <Col md="6" sm="12" xs="12">
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input type="text" value="systemadmin"/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6" sm="12" xs="12">
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="text" value="system@gmail.com"/>
                </FormGroup>
              </Col>
              <Col md="6" sm="12" xs="12">
                <FormGroup>
                  <Label>Display Name</Label>
                  <Input type="text" value="system"/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col Col md="1" sm="12" xs="12">
                <Button color="primary" className=" remove-btn">Submit</Button>
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
                <Input type="file"/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="3" sm="12" xs="12">
                <Button color="primary" className=" remove-btn">Upload Image</Button>
              </Col>
            </Row>
            <hr className="hr"/>
            <Row>
              <Col md="12" sm="12" xs="12">
                <h5>Change Password</h5>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="12" xs="12">
                <FormGroup>
                  <Label>Old password</Label>
                  <Input type="password" value="system@gmail.com"/>
                </FormGroup>
              </Col>
              <Col md="4" sm="12" xs="12">
                <FormGroup>
                  <Label>New password</Label>
                  <Input type="password" value="system"/>
                </FormGroup>
              </Col>
              <Col md="4" sm="12" xs="12">
                <FormGroup>
                  <Label>Confirm password</Label>
                  <Input type="password" value="system"/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="3" sm="12" xs="12">
                <Button color="primary" className=" remove-btn">Change Password</Button>
              </Col>
            </Row>
          </div>
      }
      </div>
    )
  }

  challengeQuestions = () =>{
    return(
      <div>
        <Row>
          <Col md="12" sm="12" xs="12">
            <FormGroup>
              <Input type="select">
                <option>Who was your fifth grade teacher?</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </Input>
              <Input type="text" value="Who" className="mt-1"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12" sm="12" xs="12">
            <FormGroup>
              <Input type="select">
                <option>Where were you New years 2000?</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </Input>
              <Input type="text" value="Where" className="mt-1"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12" sm="12" xs="12">
            <FormGroup>
              <Input type="select">
                <option>What is the name of a city where you got lost?</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </Input>
              <Input type="text" value="What" className="mt-1"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="12" xs="12" >
            <Button color="primary" className=" remove-btn">Submit</Button>
            <Button color="primary" className=" remove-btn ml-2">Reset</Button>
          </Col>
          <Col md="2" sm="12" xs="12" >
          </Col>
        </Row>
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
          {this.challengeQuestions()}
        </TabPane>
        <TabPane tabId="3">
          {this.challengeQuestions()}
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
                  <a onClick={this.showProfile} style={{fontSize:"20px", color:"blue"}}>Update Profile</a>
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
