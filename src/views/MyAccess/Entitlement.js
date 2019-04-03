import React, {Component} from 'react'
import {
  Col,
  Row,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Badge
} from "reactstrap";
import {Card, Checkbox} from "antd";
import {ApiService} from "../../Services/ApiService";
import './myAccess.scss'

class Entitlement extends Component {
  _dataContext = new ApiService();

  state = {
    entitlements: {},
    isEntitlementsLoading: true,
  }

  componentDidMount() {
    this.getEntitlements();
  }


  getEntitlements = async () => {
    this.setState({
      isEntitlementsLoading: true,
    })
    const entitlementRes = await this._dataContext.getEntitlements();
    const newState = {};
    if (!entitlementRes.error) {
      newState.entitlements = entitlementRes;
    }
    this.setState({
      ...newState,
      isEntitlementsLoading: false,
    });
  }

  renderEntitlements = () => {
    const { entitlements = {}, isEntitlementsLoading} = this.state
    return (
      <Row loading={isEntitlementsLoading}>
        {
          (entitlements.entitlements || []).map((entitlement, i) => {
            return (
              <Col md="4" sm="12" xs="12" key={`application-account-${i}`}>
                    <Checkbox/>
                    <span className="pull-right">
                        <span className="btn bg-blue-card mr-1 card-icon">
                          <i className="fa fa-calendar-plus-o"/>
                        </span>
                        <span className="btn btn-danger mr-1 card-icon">
                          <i className="fa fa-trash-o"/>
                        </span>
                      </span>
                    <h5 className="font-weight-bold mt-5"> {entitlement.name}</h5>
                    <p className="span-font">ADUser1</p>
                    <p className="span-font"><b>Account Name: </b>PTRIP</p>
                    <p className="span-font"><b>Account Type: </b>Primary</p>
                    <p className="span-font"><b>StartDate: </b>March 18,2019 04:16 PM</p>
                    <Badge className="badge blue small mb-5">Provisioned</Badge>
              </Col>
            );
          })
        }
      </Row>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="12" md="12" xs="12" sm="12">
            <Card className="card-border">
              <Row>
                <Col>
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
                </Col>
              </Row>
              <Row>
                <Col md="9" sm="12" xs="12">
                  <h5>ENTITLEMENTS</h5>
                  <span>My entitlements within the company</span>
                </Col>
                <Col md="3" sm="12" xs="12">
                  <div className="pull-right">
                    <Checkbox>Select All</Checkbox>
                    <span className="btn btn-danger card-icon">
                        <i className="fa fa-trash-o"/>
                      </span>
                  </div>
                </Col>
              </Row>
              <hr className="hr"/>
              {this.renderEntitlements()}
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Entitlement
