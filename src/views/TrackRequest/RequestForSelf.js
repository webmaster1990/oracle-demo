import React, {Component} from 'react'
import {
  Badge, Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label, Modal, ModalBody, ModalHeader,
  Row, Table
} from "reactstrap";
import {Checkbox, Icon, Tabs} from 'antd';
import moment from "../PendingApprovals";

const TabPane = Tabs.TabPane;

class RequestForSelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      info: false,
    };
  }
  toggleInfo = () => {
    this.setState({
      info: !this.state.info,
    });
  }
  detailModal =()=>{
    return(
      <div>
        <Modal isOpen={this.state.info} toggle={this.toggleInfo}
               className='modal-info modal-dialog-centered' >
          <ModalHeader toggle={this.toggleInfo} className="modal-title">Details</ModalHeader>
          <ModalBody>
            <Row>
              <Col md="6" sm="12" xs="12">
                <Table responsive>
                  <tbody>
                  <tr>
                    <td><p className="mb-0"><b>Entity Key :</b></p></td>
                    <td><p className="mb-0">4</p></td>
                  </tr>
                  <tr>
                    <td><p className="mb-0"><b>Display Name :</b></p></td>
                    <td><p className="mb-0">ADUser1</p></td>
                  </tr>
                  <tr>
                    <td><p className="mb-0"><b>Name :</b></p></td>
                    <td><p className="mb-0">ADUser1</p></td>
                  </tr>
                  <tr>
                    <td><p className="mb-0"><b>Type :</b></p></td>
                    <td><p className="mb-0">Application</p></td>
                  </tr>
                  <tr>
                    <td><p className="mb-0"><b>Category :</b></p></td>
                    <td><p className="mb-0">Application</p></td>
                  </tr>
                  <tr>
                    <td><p className="mb-0"><b>Description :</b></p></td>
                    <td><p className="mb-0">ADUser1</p></td>
                  </tr>
                  <tr>
                    <td><p className="mb-0"><b>Risk Level :</b></p></td>
                    <td><p className="mb-0">High Risk</p></td>
                  </tr>
                  <tr>
                    <td><p className="mb-0"><b>Certifiable :</b></p></td>
                    <td><p className="mb-0"><Checkbox/></p></td>
                  </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    )
  }
  callback = (key) => {
    console.log(key);
  }

  render() {
    return (
      <div className="animated fadeIn certification">
        {this.detailModal()}
        <Row>
          <Col md="12" sm="12" xs="12" lg="3" className="border-right left-filter ">
            <p>Filters</p>
            <FormGroup>
              <Label className="mt-2">All</Label>
              <Input type="select">
                <option>2017</option>
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
              <hr className="hr"/>
              <Label><b>Tags</b></Label>
              <Input type="text"/>
            </FormGroup>
          </Col>
          <Col md="12" sm="12" xs="12" lg="9">
            <Card className="card-border">
              <CardBody>
                <Row>
                  <Col md="12" xs="12" sm="12">
                    <FormGroup className="mb-0">
                      <InputGroup>
                        <Input type="text" placeholder="Search..." style={{borderRight: "none"}}/>
                        <InputGroupAddon addonType="append">
                          <InputGroupText style={{backgroundColor: "#f6f9f9"}}>
                            <i className="fa fa-search"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" xs="12" sm="12">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                      <TabPane tab="Catalog" key="1">
                        <Row className="flex-align-item-center">
                          <Col md="1" sm="12" xs="12">
                            <Icon type="smile" style={{ fontSize: '30px'}} theme="twoTone" />
                          </Col>
                          <Col md="9" sm="12" xs="12">
                            <p className="mb-0"><b>ADUser1 </b>
                              <Icon type="info-circle" twoToneColor="#64a6ea" theme="twoTone" onClick={this.toggleInfo}/>
                            </p>
                            <p className="mb-0">
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#ea4b51"/>
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#ea4b51"/>
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#ea4b51"/>
                            </p>
                            <p className="mb-0">ADUser1</p>
                            <Badge className="badge bg-blue small">1 out of 1 (100%) of your peers have access to this</Badge>
                          </Col>
                          <Col md="2" sm="12" xs="12">
                            <Button block color="success" className=" pr-0 pl-0 btn-sm ">Add To Cart</Button>
                          </Col>
                        </Row>
                        <hr className="hr"/>
                        <Row className="flex-align-item-center">
                          <Col md="1" sm="12" xs="12">
                            <Icon type="smile" style={{ fontSize: '30px'}} theme="twoTone" />
                          </Col>
                          <Col md="9" sm="12" xs="12">
                            <p className="mb-0"><b>Access Control Assistance Operators </b>
                              <Icon type="info-circle" twoToneColor="#64a6ea" theme="twoTone" onClick={this.toggleInfo}/>
                            </p>
                            <p className="mb-0">
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                            </p>
                          </Col>
                          <Col md="2" sm="12" xs="12">
                            <Button block color="success" className=" pr-0 pl-0 btn-sm ">Add To Cart</Button>
                          </Col>
                        </Row>
                        <hr className="hr"/>
                        <Row className="flex-align-item-center">
                          <Col md="1" sm="12" xs="12">
                            <Icon type="smile" style={{ fontSize: '30px'}} theme="twoTone" />
                          </Col>
                          <Col md="9" sm="12" xs="12">
                            <p className="mb-0"><b>Access Control Assistance Operators </b>
                              <Icon type="info-circle" twoToneColor="#64a6ea" theme="twoTone" onClick={this.toggleInfo}/>
                            </p>
                            <p className="mb-0">
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                            </p>
                          </Col>
                          <Col md="2" sm="12" xs="12">
                            <Button block color="success"  className=" pr-0 pl-0 btn-sm ">Add To Cart</Button>
                          </Col>
                        </Row>
                        <hr className="hr"/>
                        <Row className="flex-align-item-center">
                          <Col md="1" sm="12" xs="12">
                            <Icon type="smile" style={{ fontSize: '30px'}} theme="twoTone" />
                          </Col>
                          <Col md="9" sm="12" xs="12">
                            <p className="mb-0"><b>Access Control Assistance Operators </b>
                              <Icon type="info-circle" twoToneColor="#64a6ea" theme="twoTone" onClick={this.toggleInfo}/>
                            </p>
                            <p className="mb-0">
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                              <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                            </p>
                          </Col>
                          <Col md="2" sm="12" xs="12">
                            <Button block color="success" className=" pr-0 pl-0 btn-sm ">Add To Cart</Button>
                          </Col>
                        </Row>
                        <hr className="hr"/>
                      </TabPane>
                    </Tabs>
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

export default RequestForSelf
