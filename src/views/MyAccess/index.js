import React, {Component} from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CardHeader,
  Label,
  Breadcrumb,
  Badge
} from "reactstrap";
import { Checkbox } from 'antd';
import './myAccess.scss'
class MyAccess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="12" md="12" xs="12" sm="12">
            <Card className="card-border">
              <CardBody>
                <Row>
                  <Col>
                    <Form action="" method="post" className="form-horizontal">
                      <FormGroup row>
                        <Col md="12">
                          <InputGroup>
                            <Input type="text" placeholder="Search..." style={{borderRight: "none"}}/>
                            <InputGroupAddon addonType="append">
                              <InputGroupText style={{backgroundColor: "#f6f9f9"}}>
                                <i className="fa fa-search"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </Col>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="4">
                    <Card className="card-border">
                      <CardHeader className="bg-black">
                          <h5 className="card-header-color">APPLICATIONS</h5>
                          <span className="card-span-header">Application that I have access to</span>
                      </CardHeader>
                      <CardBody>
                       <Row>
                         <Col>
                         <Checkbox className="text-left">Select All</Checkbox>
                         <span className="pull-right">
                           <a className="btn btn-danger card-icon" href="#">
                             <i className="fa fa-trash-o"/>
                           </a>
                         </span>
                       </Col>
                       </Row>
                       <hr className="hr" />
                        <Row>
                          <Col>
                            <Checkbox/>
                          <span className="pull-right" >
                            <a className="btn bg-blue-card mr-1 card-icon" href="#">
                              <i className="fa fa-calendar-plus-o"/>
                            </a>
                            <a className="btn bg-blue-card mr-1 card-icon" href="#">
                              <i className="fa fa-edit"/>
                            </a>
                            <a className="btn btn-danger mr-1 card-icon" href="#">
                              <i className="fa fa-trash-o"/>
                            </a>
                          </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12" sm="12" >
                            <h5> ADUser1</h5>
                            <p className="span-font">ADUser1</p>
                            <p className="span-font"><b>Account Name: </b>PTRIP</p>
                            <p className="span-font"><b>Account Type: </b>Primary</p>
                            <p className="span-font"><b>Provisioned On Date: </b>March 18,2019 04:16 PM</p>
                            <p className="span-font"><b>StartDate: </b>March 18,2019 04:16 PM</p>
                            <Badge className="badge bg-blue-card small">Provisioned</Badge>
                          </Col>
                        </Row>
                        <hr className="hr" />
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" sm="4">
                    <Card className="card-border">
                      <CardHeader className="bg-blue-card">
                          <h5 className="card-header-color">ENTITLEMENTS</h5>
                          <span className="card-span-header">My entitlements within the company </span>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col>
                            <Checkbox className="text-left">Select All</Checkbox>
                            <span className="pull-right">
                           <a className="btn btn-danger card-icon" href="#">
                             <i className="fa fa-trash-o"/>
                           </a>
                         </span>
                          </Col>
                        </Row>
                        <hr className="hr" />
                        <Row>
                          <Col>
                            <Checkbox/>
                            <span className="pull-right" >
                            <a className="btn bg-blue-card mr-1 card-icon" href="#">
                              <i className="fa fa-calendar-plus-o"/>
                            </a>
                            <a className="btn btn-danger mr-1 card-icon" href="#">
                              <i className="fa fa-trash-o"/>
                            </a>
                          </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12" sm="12" >
                            <h5> ADUser1</h5>
                            <p className="span-font">ADUser1</p>
                            <p className="span-font"><b>Account Name: </b>PTRIP</p>
                            <p className="span-font"><b>Account Type: </b>Primary</p>
                            <p className="span-font"><b>StartDate: </b>March 18,2019 04:16 PM</p>
                            <Badge className="badge blue small">Provisioned</Badge>
                          </Col>
                        </Row>
                        <hr className="hr" />
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" sm="4">
                    <Card className="card-border">
                      <CardHeader className="bg-green">
                          <h5 className="card-header-color">ROLES</h5>
                          <span className="card-span-header">These are my roles within the organization</span>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col>
                            <Checkbox className="text-left">Select All</Checkbox>
                            <span className="pull-right">
                           <a className="btn btn-danger card-icon" href="#">
                             <i className="fa fa-trash-o"/>
                           </a>
                         </span>
                          </Col>
                        </Row>
                        <hr className="hr" />
                        <Row>
                          <Col>
                            <Checkbox/>
                            <span className="pull-right" >
                            <a className="btn btn-danger card-icon" href="#">
                              <i className="fa fa-trash-o"/>
                            </a>
                          </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12" sm="12" >
                            <h5>All Users</h5>
                            <p className="span-font">Default rol for all users</p>
                            <p className="span-font"><b>Assigned On Date: </b>March 18,2019 4:10 PM</p>
                            <Badge className="badge blue small">Provisioned</Badge>
                          </Col>

                        </Row>
                        <hr className="hr" />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MyAccess
