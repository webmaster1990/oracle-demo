import React,{Component} from 'react'
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Row,
  CardHeader,
} from "reactstrap";
import {Checkbox, Tabs, Icon} from "antd";
const TabPane = Tabs.TabPane;
class compareAccess extends Component{

  callback = (key) => {
  }

  render() {
    return(
      <div className="animated fadeIn">
        <Row>
          <Col md="5" sm="12" xs="12">
            <FormGroup>
              <Input type="text"/>
            </FormGroup>
          </Col>
          <Col md="5" sm="12" xs="12">
            <FormGroup>
            <Input type="text"/>
            </FormGroup>
          </Col>
          <Col md="2" sm="12" xs="12">
          <div className="pull-right">
            <Button type="button" color="primary" className="remove-btn-border-radius blue" size={"sm"}>Compare</Button>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12" sm="12">
            <Tabs onChange={this.callback} type="card">
              <TabPane tab="Entitlements" key="1">
                <Row>
                  <Col md="6" sm="12" xs="12">
                  <Card>
                    <CardHeader>
                      <Row>
                        <Col md="6" sm="12" xs="12">
                          <p className="mb-0">Wolf,Noel</p>
                        </Col>
                        <Col md="6" sm="12" xs="12">
                          <div className="pull-right">
                            <Checkbox >Delta Only</Checkbox>
                          </div>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <Row>
                          <Col md="1" sm="12" xs="12">
                            <Icon type="close"/>
                          </Col>
                          <Col md="10" sm="12" xs="12">
                            <p><b>Access Control Assistance Operators</b></p>

                          </Col>
                          <Col md="1" sm="12" xs="12">
                            <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6" sm="12" xs="12">
                            <span className="ant-badge-status-dot ant-badge-status-warning "/>
                            <span className="ant-badge-status-dot ant-badge-status-warning ml-1"/>
                            <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                          </Col>
                          <Col md="6" sm="12" xs="12">
                            <Button type="button" color="success" className="remove-btn-border-radius blue pull-right" size={"sm"}>Add
                              To Cart</Button>
                          </Col>
                        </Row>
                        <hr className="hr"/>
                      </div>
                      <div>
                        <Row>
                          <Col md="1" sm="12" xs="12">
                            <Icon type="close"/>
                          </Col>
                          <Col md="10" sm="12" xs="12">
                            <p><b>Access Control Assistance Operators</b></p>

                          </Col>
                          <Col md="1" sm="12" xs="12">
                            <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6" sm="12" xs="12">
                            <span className="ant-badge-status-dot ant-badge-status-warning "/>
                            <span className="ant-badge-status-dot ant-badge-status-warning ml-1"/>
                            <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                          </Col>
                          <Col md="6" sm="12" xs="12">
                            <Button type="button" color="success" className="remove-btn-border-radius blue pull-right" size={"sm"}>Add
                              To Cart</Button>
                          </Col>
                        </Row>
                        <hr className="hr"/>
                      </div>
                      <div>
                        <Row>
                          <Col md="1" sm="12" xs="12">
                            <Icon type="close"/>
                          </Col>
                          <Col md="10" sm="12" xs="12">
                            <p><b>Access Control Assistance Operators</b></p>

                          </Col>
                          <Col md="1" sm="12" xs="12">
                            <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6" sm="12" xs="12">
                            <span className="ant-badge-status-dot ant-badge-status-warning "/>
                            <span className="ant-badge-status-dot ant-badge-status-warning ml-1"/>
                            <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                          </Col>
                          <Col md="6" sm="12" xs="12">
                            <Button type="button" color="success" className="remove-btn-border-radius blue pull-right" size={"sm"}>Add
                              To Cart</Button>
                          </Col>
                        </Row>
                        <hr className="hr"/>
                      </div>
                      <div>
                        <Row>
                          <Col md="1" sm="12" xs="12">
                            <Icon type="close"/>
                          </Col>
                          <Col md="10" sm="12" xs="12">
                            <p><b>Access Control Assistance Operators</b></p>

                          </Col>
                          <Col md="1" sm="12" xs="12">
                            <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6" sm="12" xs="12">
                            <span className="ant-badge-status-dot ant-badge-status-warning "/>
                            <span className="ant-badge-status-dot ant-badge-status-warning ml-1"/>
                            <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                          </Col>
                          <Col md="6" sm="12" xs="12">
                            <Button type="button" color="success" className="remove-btn-border-radius blue pull-right" size={"sm"}>Add
                              To Cart</Button>
                          </Col>
                        </Row>
                        <hr className="hr"/>
                      </div>
                    </CardBody>
                  </Card>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <Card>
                      <CardHeader>
                        <p className="mb-0">System Administrator</p>
                      </CardHeader>
                      <CardBody>
                        <div>
                          <Row>
                            <Col md="11" sm="12" xs="12">
                              <p><b>Access Control Assistance Operators</b></p>
                            </Col>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" sm="12" xs="12">
                              <span className="ant-badge-status-dot ant-badge-status-warning "/>
                              <span className="ant-badge-status-dot ant-badge-status-warning ml-1"/>
                              <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                            </Col>
                          </Row>
                          <hr className="hr"/>
                        </div>
                        <div>
                          <Row>
                            <Col md="11" sm="12" xs="12">
                              <p><b>Access Control Assistance Operators</b></p>
                            </Col>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" sm="12" xs="12">
                              <span className="ant-badge-status-dot ant-badge-status-warning "/>
                              <span className="ant-badge-status-dot ant-badge-status-warning ml-1"/>
                              <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                            </Col>
                          </Row>
                          <hr className="hr"/>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Application" key="2">
                <Row>
                  <Col md="6" sm="12" xs="12">
                    <Card>
                      <CardHeader>
                        <Row>
                          <Col md="6" sm="12" xs="12">
                            <p className="mb-0">Wolf,Noel</p>
                          </Col>
                          <Col md="6" sm="12" xs="12">
                            <div className="pull-right">
                              <Checkbox >Delta Only</Checkbox>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <div>
                          <Row>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="close"/>
                            </Col>
                            <Col md="10" sm="12" xs="12">
                              <p><b>Access Control Assistance Operators</b></p>

                            </Col>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" sm="12" xs="12">
                              <span className="ant-badge-status-dot ant-badge-status-warning "/>
                              <span className="ant-badge-status-dot ant-badge-status-warning ml-1"/>
                              <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                            </Col>
                            <Col md="6" sm="12" xs="12">
                              <Button type="button" color="success" className="remove-btn-border-radius blue pull-right" size={"sm"}>Add
                                To Cart</Button>
                            </Col>
                          </Row>
                          <hr className="hr"/>
                        </div>
                        <div>
                          <Row>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="close"/>
                            </Col>
                            <Col md="10" sm="12" xs="12">
                              <p><b>Access Control Assistance Operators</b></p>

                            </Col>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" sm="12" xs="12">
                              <span className="ant-badge-status-dot ant-badge-status-warning "/>
                              <span className="ant-badge-status-dot ant-badge-status-warning ml-1"/>
                              <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                            </Col>
                            <Col md="6" sm="12" xs="12">
                              <Button type="button" color="success" className="remove-btn-border-radius blue pull-right" size={"sm"}>Add
                                To Cart</Button>
                            </Col>
                          </Row>
                          <hr className="hr"/>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <Card>
                      <CardHeader>
                        <p className="mb-0">System Administrator</p>
                      </CardHeader>
                      <CardBody>
                        <div>
                          <Row>
                            <Col md="11" sm="12" xs="12">
                              <p><b>Access Control Assistance Operators</b></p>
                            </Col>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" sm="12" xs="12">
                              <span className="ant-badge-status-dot ant-badge-status-success "/>
                              <span className="ant-badge-status-dot ant-badge-status-success ml-1"/>
                              <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                            </Col>
                          </Row>
                          <hr className="hr"/>
                        </div>
                        <div>
                          <Row>
                            <Col md="11" sm="12" xs="12">
                              <p><b>Access Control Assistance Operators</b></p>
                            </Col>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" sm="12" xs="12">
                              <span className="ant-badge-status-dot ant-badge-status-success "/>
                              <span className="ant-badge-status-dot ant-badge-status-success ml-1"/>
                              <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                            </Col>
                          </Row>
                          <hr className="hr"/>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Roles" key="3">
                <Row>
                  <Col md="6" sm="12" xs="12">
                    <Card>
                      <CardHeader>
                        <Row>
                          <Col md="6" sm="12" xs="12">
                            <p className="mb-0">Wolf,Noel</p>
                          </Col>
                          <Col md="6" sm="12" xs="12">
                            <div className="pull-right">
                              <Checkbox >Delta Only</Checkbox>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <div>
                          <Row>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="close"/>
                            </Col>
                            <Col md="10" sm="12" xs="12">
                              <p><b>Access Control Assistance Operators</b></p>

                            </Col>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" sm="12" xs="12">
                              <span className="ant-badge-status-dot ant-badge-status-warning "/>
                              <span className="ant-badge-status-dot ant-badge-status-warning ml-1"/>
                              <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                            </Col>
                            <Col md="6" sm="12" xs="12">
                              <Button type="button" color="success" className="remove-btn-border-radius blue pull-right" size={"sm"}>Add
                                To Cart</Button>
                            </Col>
                          </Row>
                          <hr className="hr"/>
                        </div>
                        <div>
                          <Row>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="close"/>
                            </Col>
                            <Col md="10" sm="12" xs="12">
                              <p><b>Access Control Assistance Operators</b></p>

                            </Col>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" sm="12" xs="12">
                              <span className="ant-badge-status-dot ant-badge-status-warning "/>
                              <span className="ant-badge-status-dot ant-badge-status-warning ml-1"/>
                              <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                            </Col>
                            <Col md="6" sm="12" xs="12">
                              <Button type="button" color="success" className="remove-btn-border-radius blue pull-right" size={"sm"}>Add
                                To Cart</Button>
                            </Col>
                          </Row>
                          <hr className="hr"/>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <Card>
                      <CardHeader>
                        <p className="mb-0">System Administrator</p>
                      </CardHeader>
                      <CardBody>
                        <div>
                          <Row>
                            <Col md="11" sm="12" xs="12">
                              <p><b>Access Control Assistance Operators</b></p>
                            </Col>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" sm="12" xs="12">
                              <span className="ant-badge-status-dot ant-badge-status-success "/>
                              <span className="ant-badge-status-dot ant-badge-status-success ml-1"/>
                              <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                            </Col>
                          </Row>
                          <hr className="hr"/>
                        </div>
                        <div>
                          <Row>
                            <Col md="11" sm="12" xs="12">
                              <p><b>Access Control Assistance Operators</b></p>
                            </Col>
                            <Col md="1" sm="12" xs="12">
                              <Icon type="info-circle" theme="twoTone" className="pull-right"/>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" sm="12" xs="12">
                              <span className="ant-badge-status-dot ant-badge-status-success "/>
                              <span className="ant-badge-status-dot ant-badge-status-success ml-1"/>
                              <span className="ant-badge-status-dot ant-badge-status-default ml-1"/>
                            </Col>
                          </Row>
                          <hr className="hr"/>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }

}
export default compareAccess
