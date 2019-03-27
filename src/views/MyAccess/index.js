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
  Label
} from "reactstrap";

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
            <Card>
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
                    <Card>
                      <CardHeader style={{backgroundColor:"#526069"}}>
                          <h5 style={{color:"#fff"}}>APPLICATIONS</h5>
                          <span style={{color:"#fff" ,fontSize: "13px"}}>Application that I have access to</span>
                      </CardHeader>
                      <CardBody>
                       <Row>
                         <Col>
                           <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                           <Label check className="form-check-label" htmlFor="checkbox1">Select All</Label>
                         </Col>
                         <Col>aa</Col>
                       </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" sm="4">
                    <Card>
                      <CardHeader style={{backgroundColor:"#64a6ea"}}>
                          <h5 style={{color:"#fff"}}>ENTITLEMENTS</h5>
                          <span style={{color:"#fff" ,fontSize: "13px"}}>My entitlements within the company </span>
                      </CardHeader>
                      <CardBody>
                        vcbvcbcvbvcb
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" sm="4">
                    <Card>
                      <CardHeader style={{backgroundColor:"#4dc18a"}}>
                          <h5 style={{color:"#fff"}}>ROLES</h5>
                          <span style={{color:"#fff" ,fontSize: "13px"}}>These are my roles within the organization</span>
                      </CardHeader>
                      <CardBody>
                        vbcvbvcbvcbvcb
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
