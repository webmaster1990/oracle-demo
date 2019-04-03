import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Row,

} from "reactstrap";
import '../MyAccess/myAccess.scss'
import {Checkbox, Tabs} from 'antd';

const TabPane = Tabs.TabPane;
class searchUserProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  callback = (key) => {
    console.log(key);
  }

  onClick = () =>{
    this.props.history.push("/compareAccess");
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
                  <Button type="button" color="primary" className=" remove-btn-border-radius blue " style={{width: "63px"}} size={"sm"}>Request Access</Button>
                  <Button type="button" color="primary" className=" remove-btn-border-radius ml-1 blue" style={{width: "68px"}} size={"sm"} onClick={this.onClick}>Compare Access</Button>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col lg="9" md="9" xs="12" sm="12">
            <Card className="card-border">
              <CardBody>
                <Tabs onChange={this.callback} type="card">
                  <TabPane tab="Profile" key="1">
                    <Col md="12" sm="12" xs="12">
                      <p className="mb-0"><b>First Name: </b>Pankaj</p>
                      <p className="mb-0"><b>Last Name: </b>Tripathi</p>
                      <p className="mb-0"><b>Display Name: </b>Pankaj Tripathi</p>
                      <p className="mb-0"><b>User Login: </b>PTRIP</p>
                      <p className="mb-0"><b>Email: </b></p>
                      <p className="mb-0"><b>Organization Name: </b>Xellerate Users</p>
                      <p className="mb-0"><b>Role: </b>EMP</p>
                      <p className="mb-0"><b>Manager: </b>System Administrator</p>
                    </Col>
                  </TabPane>
                  <TabPane tab="Entitlements" key="2">
                    <Row>
                      <Col md="12" sm="12" xs="12">
                        <div>
                          <Checkbox>Select All </Checkbox>
                          <span>
                        <span className="btn btn-danger mr-1 card-icon">
                          <i className="fa fa-trash-o"/>
                        </span>
                      </span>
                        </div>
                      </Col>
                    </Row>
                    <hr className="hr"/>
                    <Row>
                      <Col md="6" sm="12" xs="12">
                        <Checkbox/>
                        <span className="pull-right">
                          <span className="btn btn-danger mr-1 card-icon">
                            <i className="fa fa-trash-o"/>
                          </span>
                        </span>
                        <p className="span-font mt-3"><b>Access Control Assistance Operators</b></p>
                        <p className="span-font"><b>Account Name: </b>PTRIP</p>
                        <p className="span-font"><b>Account Type: </b>Primary</p>
                        <p className="span-font"><b>Provisioned On Date: </b>March 18,2019 04:16 PM</p>
                        <Badge className="badge blue small">Provisioned</Badge>
                        <hr className="hr"/>
                      </Col>
                      <Col md="6" sm="12" xs="12">
                        <Checkbox/>
                        <span className="pull-right">
                          <span className="btn btn-danger mr-1 card-icon">
                            <i className="fa fa-trash-o"/>
                          </span>
                        </span>
                        <p className="span-font mt-3"><b>Access Control Assistance Operators</b></p>
                        <p className="span-font"><b>Account Name: </b>PTRIP</p>
                        <p className="span-font"><b>Account Type: </b>Primary</p>
                        <p className="span-font"><b>Provisioned On Date: </b>March 18,2019 04:16 PM</p>
                        <Badge className="badge blue small">Provisioned</Badge>
                        <hr className="hr"/>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tab="Application" key="3">
                    <Row>
                      <Col md="12" sm="12" xs="12">
                        <Checkbox>Select All </Checkbox>
                        <span>
                        <span className="btn btn-danger mr-1 card-icon">
                          <i className="fa fa-trash-o"/>
                        </span>
                            <span className="btn btn-danger mr-1 card-icon">
                          <i className="fa fa-lock"/>
                        </span>
                            <span className="btn btn-success mr-1 card-icon">
                          <i className="fa fa-lock"/>
                        </span>
                      </span>
                      </Col>
                    </Row>
                    <hr className="hr"/>
                    <Row>
                      <Col md="6" sm="12" xs="12">
                        <Checkbox/>
                        <span className="pull-right">
                           <span className="btn btn-primary mr-1 card-icon">
                             <i className="fa fa-edit"/>
                           </span>
                          <span className="btn btn-danger mr-1 card-icon">
                             <i className="fa fa-trash-o"/>
                          </span>
                          <span className="btn btn-danger mr-1 card-icon">
                            <i className="fa fa-lock"/>
                          </span>
                        </span>
                        <p className="span-font mt-3"><b>ADUser1</b></p>
                        <p className="span-font">ADUser1</p>
                        <p className="span-font"><b>Account Type: </b>Primary</p>
                        <p className="span-font"><b>Provisioned On Date: </b>March 18,2019 04:16 PM</p>
                        <p className="span-font"><b>Account Name: </b>PTRIP</p>
                        <Badge className="badge blue small">Provisioned</Badge>
                        <hr className="hr"/>
                      </Col>
                      <Col md="6" sm="12" xs="12">
                        <Checkbox/>
                        <span className="pull-right">
                           <span className="btn btn-primary mr-1 card-icon">
                             <i className="fa fa-edit"/>
                           </span>
                          <span className="btn btn-danger mr-1 card-icon">
                             <i className="fa fa-trash-o"/>
                          </span>
                          <span className="btn btn-danger mr-1 card-icon">
                            <i className="fa fa-lock"/>
                          </span>
                        </span>
                        <p className="span-font mt-3"><b>ADUser1</b></p>
                        <p className="span-font">ADUser1</p>
                        <p className="span-font"><b>Account Type: </b>Primary</p>
                        <p className="span-font"><b>Provisioned On Date: </b>March 18,2019 04:16 PM</p>
                        <p className="span-font"><b>Account Name: </b>PTRIP</p>
                        <Badge className="badge blue small">Provisioned</Badge>
                        <hr className="hr"/>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tab="Roles" key="4">
                    <Row>
                      <Col md="12" sm="12" xs="12">
                        <div>
                          <Checkbox>Select All </Checkbox>
                          <span>
                        <span className="btn btn-danger mr-1 card-icon">
                          <i className="fa fa-trash-o"/>
                        </span>
                      </span>
                        </div>
                      </Col>
                    </Row>
                    <hr className="hr"/>
                    <Row>
                      <Col md="6" sm="12" xs="12">
                        <Checkbox/>
                        <span className="pull-right">
                          <span className="btn btn-danger mr-1 card-icon">
                            <i className="fa fa-trash-o"/>
                          </span>
                        </span>
                        <p className="span-font mt-3"><b>All User</b></p>
                        <p className="span-font"><b>Assigned On: </b>March 18,2019 04:16 PM</p>
                        <p className="span-font"><b>Membership Type: </b>Direct</p>
                        <p className="span-font"><b>Category: </b>OMI Roles</p>
                        <hr className="hr"/>
                      </Col>
                      <Col md="6" sm="12" xs="12">
                        <Checkbox/>
                        <span className="pull-right">
                          <span className="btn btn-danger mr-1 card-icon">
                            <i className="fa fa-trash-o"/>
                          </span>
                        </span>
                        <p className="span-font mt-3"><b>All User</b></p>
                        <p className="span-font"><b>Assigned On: </b>March 18,2019 04:16 PM</p>
                        <p className="span-font"><b>Membership Type: </b>Direct</p>
                        <p className="span-font"><b>Category: </b>OMI Roles</p>
                        <hr className="hr"/>
                      </Col><Col md="6" sm="12" xs="12">
                      <Checkbox/>
                      <span className="pull-right">
                          <span className="btn btn-danger mr-1 card-icon">
                            <i className="fa fa-trash-o"/>
                          </span>
                        </span>
                      <p className="span-font mt-3"><b>All User</b></p>
                      <p className="span-font"><b>Assigned On: </b>March 18,2019 04:16 PM</p>
                      <p className="span-font"><b>Membership Type: </b>Direct</p>
                      <p className="span-font"><b>Category: </b>OMI Roles</p>
                      <hr className="hr"/>
                    </Col>
                    </Row>
                  </TabPane>
                </Tabs>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default searchUserProfile
