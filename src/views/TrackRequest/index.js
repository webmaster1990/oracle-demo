import React, {Component} from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  FormGroup,
  Input,
  Label,
  Button, Badge
} from "reactstrap";
import { Icon} from 'antd';
import {Link} from "react-router-dom";
import '../MyAccess/myAccess.scss'

class TrackRequest extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="12" md="12" xs="12" sm="12">
            <Card className="card-border">
              <CardBody>
                <p><b>Search Filters</b></p>
                <Row>
                  <Col md="4" xs="12" sm="12">
                    <FormGroup>
                      <Label>Request ID</Label>
                      <Input type="text"/>
                    </FormGroup>
                  </Col>
                  <Col md="4" xs="12" sm="12">
                    <FormGroup>
                      <Label>Creation Date</Label>
                      <Input type="text"/>
                    </FormGroup>
                  </Col>
                  <Col md="4" xs="12" sm="12">
                    <FormGroup>
                      <Label>Request Status</Label>
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
                    </FormGroup>
                  </Col>
                </Row>
                <Row md="12" sm="12" xl="12">
                  <Col md="4" xs="12" sm="12">
                    <FormGroup>
                      <Label>Last n Days</Label>
                      <Input type="text"/>
                    </FormGroup>
                  </Col>
                  <Col md="4" xs="12" sm="12">
                    <FormGroup>
                      <Label>Search For</Label>
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
                    </FormGroup>
                  </Col>
                  <Col md="4" xs="12" sm="12">
                    <div className="pull-right mt-4">
                      <Link to="/">Reset Filters</Link>
                      <Button color="primary" className="ml-2 remove-btn">Search</Button>
                    </div>
                  </Col>
                </Row>
                <hr className="hr mt-1"/>
                <Row>
                  <Col md="12" xs="12" sm="12" className="text-right">
                    <span>SortBy</span>
                    <Input type="select" className="w-25 mr-1 ml-1 inline-block" bsSize="sm">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                      <option value="4">Option #4</option>
                      <option value="5">Option #5</option>
                    </Input>
                    <span className="mr-1"><i className="fa fa-sort fa-15x"/></span>
                    <span className="btn mr-1 btn-dribbbl"><i className="fa fa-refresh"/></span>
                  </Col>
                </Row>
                <hr className="hr"/>
                <Row className="flex-align-item-center">
                  <Col md="1" xs="12" sm="12" className="pr-0 ">
                    <Icon type="clock-circle" theme="filled" style={{ fontSize: '28px', color: '#4dbd74' }} />
                  </Col>
                  <Col md="3" xs="12" sm="12" className="pl-0 pr-0">
                    <p><b>GWCIT</b></p>
                    <p className="mb-0"><b>Benficiaries:</b></p>
                    <p>Pankaj Tripathi</p>
                  </Col>
                  <Col md="4" xs="12" sm="12" className="pl-0 pr-0">
                    <p className="mb-0"><b>Request ID:</b>8010</p>
                    <p className="mb-0"><b>Request Type:</b>Provisional Entitlement</p>
                    <p className="mb-0"><b>Requested Date:</b>March 20,2019 10:20 PM</p>
                  </Col>
                  <Col md="4" xs="12" sm="12" className=" pl-0">
                    <Badge className="badge bg-red small">Request Approved Fulfillment Failed</Badge>
                  </Col>
                </Row>
                <hr className="hr"/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TrackRequest
