import React, {Component} from 'react';
import {
  Badge, Button,
  Card,
  CardBody, CardHeader,
  Col, FormGroup, Input, Label,
  Row,
} from 'reactstrap';
import './provisionEntitlement.scss'
import {Link} from "react-router-dom";
class ProvisionEntitlement extends Component {
  render() {
    return (
      <div className="animated fadeIn provision-drawer">
        <Row>
          <Col md="12" xs="12" sm="12" className="p-0">
            <Card className="provision-card">
              <CardHeader>
                <span>Provision Entitlement - BR_Fileshare</span>
              </CardHeader>
              <CardBody className="content-card-body">
                <Row>
                  <Col md="6" sm="12" xs="12">
                    <p><b>Requestor:</b></p>
                    <p ><img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" /> Wolfe, Noel</p>
                    <p className="mb-0"><b>Beneficiaries: </b>Wolfe, Noel</p>
                    <p className="mb-0"><b>Request ID: </b>8034</p>
                    <Badge className="badge orange small mr-1 mb-1">Awaiting Approval</Badge>
                    <p className="mb-0"><b>Request Type: </b>Provision Entitlement</p>
                    <p className="mb-0"><b>Request Date: </b>March 20,2019 10:25: PM</p>
                    <hr className="hr mt-1" />
                    <p className="mb-0"><b>ENTITY NAME: </b> <Link to="/">BR_Fileshare</Link></p>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                   <p className="mb-0">Requester manager approval for Request ID 8034</p>
                    <p className="mb-0"><b>Assigned Date: </b>March 20,2019 01:26 PM</p>
                    <Badge className="badge light-blue small mr-1 mb-1">Awaiting Approval</Badge>
                    <p className="mb-0"><b>Last Update: </b>March 20,2019 01:26 PM</p>
                    <p className="mb-0">Pankaj Tripathi</p>
                    <Badge className="badge green small mr-1 mb-1">Assigned</Badge>
                    <p className="mb-0"><b>Approvers: </b>Pankaj Tripathi</p>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" xs="12" sm="12">
                    <FormGroup>
                      <p><b>Comments:</b></p>
                      <Input type="textarea" />
                    </FormGroup>
                  </Col>
                  <Col md="12" xs="12" sm="12">
                    <Button block color="success" className="mr-3 inline-block">Approve</Button>
                    <Button block color="danger" className="mr-3 inline-block mt-0">Decline</Button>
                    <Button block color="secondary" className="mr-3 mt-0 inline-block small-width-btn " >
                      <i className="fa fa-caret-down"></i>
                    </Button>
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



export default ProvisionEntitlement;
