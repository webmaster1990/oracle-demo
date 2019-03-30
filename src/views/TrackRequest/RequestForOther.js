import React,{Component} from 'react'
import {Card, CardBody, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row} from "reactstrap";


class RequestForOther extends Component{
  render() {
    return(
      <div className="animated fadeIn">
        <Row>
          <Col lg="12" md="12" xs="12" sm="12">
            <Card className="card-border">
              <CardBody>
                <h4><b>Search For User</b></h4>
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
                    <p><b>Note: </b>Filter attributes only supports firstName, lastName, middleName, displayName, email and userLogin.</p>
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
export default RequestForOther
