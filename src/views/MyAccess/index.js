import React, {Component} from 'react';
import {
  CardBody,
  Col,
  Row,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Badge
} from "reactstrap";
import { Checkbox, Card } from 'antd';
import moment from 'moment';
import ContentCard from '../Common/ContentCard';
import './myAccess.scss'
import { ApiService } from '../../Services/ApiService';

class MyAccess extends Component {
  _dataContext = new ApiService();

  state = {
    applications: {},
    entitlements: {},
    roles: {},
    isRolesLoading: true,
    isEntitlementsLoading: true,
    isApplicationsLoading: true,
  }

  componentDidMount() {
    this.getRoles();
    this.getEntitlements();
    this.getApplications();
  }

  getRoles = async () => {
    this.setState({
      isRolesLoading: true,
    })
    const rolesRes = await this._dataContext.getRoles();
    const newState = {};
    if (!rolesRes.error) {
      newState.roles = rolesRes;
    }
    this.setState({
      ...newState,
      isRolesLoading: false,
    });
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
  
  getApplications = async () => {
    this.setState({
      isApplicationsLoading: true,
    })
    const applicationRes = await this._dataContext.getApplications();
    const newState = {};
    if (!applicationRes.error) {
      newState.applications = applicationRes;
    }
    this.setState({
      ...newState,
      isApplicationsLoading: false,
    });
  }

  renderApplications = () => {
    const { applications = {}, isApplicationsLoading} = this.state;
    return (
      <ContentCard className="header-gray" loading={isApplicationsLoading} title={
        <div>
          <h5 className="card-header-color">APPLICATIONS</h5>
          <span className="card-span-header">Application that I have access to</span>
        </div>
      }>
        <Row>
          <Col>
            <Checkbox className="text-left">Select All</Checkbox>
            <span className="pull-right">
                         <span className="btn btn-danger card-icon" href="#">
                           <i className="fa fa-trash-o"/>
                         </span>
                       </span>
          </Col>
        </Row>
        <hr className="hr" />
        {
          (applications.accounts || []).map((account, i) => {
            const accountDesscription = (account.fields || []).find(x => x.name === 'Account Description');
            const accountType = (account.fields || []).find(x => x.name === 'Account Type');
            const provisionedOnDate = (account.fields || []).find(x => x.name === 'Provisioned-On Date');
            const startDate = (account.fields || []).find(x => x.name === 'Valid From Date');
            const status = (account.fields || []).find(x => x.name === 'Status');
            return (
              <div key={`application-account-${i}`}>
                <Row>
                  <Col>
                    <Checkbox/>
                    <span className="pull-right" >
                        <span className="btn bg-blue-card mr-1 card-icon">
                          <i className="fa fa-calendar-plus-o"/>
                        </span>
                        <span className="btn bg-blue-card mr-1 card-icon">
                          <i className="fa fa-edit"/>
                        </span>
                        <span className="btn btn-danger mr-1 card-icon">
                          <i className="fa fa-trash-o"/>
                        </span>
                     </span>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" sm="12" >
                    <h5 className="font-weight-bold">{account.name}</h5>
                    <p className="span-font">{(accountDesscription && accountDesscription.value) || '--'}</p>
                    <p className="span-font"><b>Account Name: </b>{account.name}</p>
                    <p className="span-font"><b>Account Type: </b>{(accountType && accountType.value) || '--'}</p>
                    <p className="span-font"><b>Provisioned On Date: </b>{startDate && startDate.value ? moment(startDate.value).format('MMMM Do YYYY h:mm:ss a') : '--'}</p>
                    <p className="span-font"><b>StartDate: </b>{provisionedOnDate && provisionedOnDate.value ? moment(provisionedOnDate.value).format('MMMM Do YYYY h:mm:ss a') : '--'}</p>
                    { status && status.value && <Badge className="badge bg-blue-card small">{status.value}</Badge>}
                  </Col>
                </Row>
                <hr className="hr" />
              </div>
            );
          })
        }
      </ContentCard>
    );
  }

  renderEntitlements = () => {
    const { entitlements = {}, isEntitlementsLoading} = this.state
    return (
      <ContentCard className="header-blue" loading={isEntitlementsLoading} title={
        <div>
          <h5 className="card-header-color">ENTITLEMENTS</h5>
          <span className="card-span-header">My entitlements within the company </span>
        </div>
      }>
          <Row>
            <Col>
              <Checkbox className="text-left">Select All</Checkbox>
              <span className="pull-right">
                   <span className="btn btn-danger card-icon">
                     <i className="fa fa-trash-o"/>
                   </span>
              </span>
            </Col>
          </Row>
          <hr className="hr"/>
          {
            (entitlements.entitlements || []).map((entitlement, i) => {
              return (
                <div key={`entitlement-account-${i}`}>
                  <Row>
                    <Col>
                      <Checkbox/>
                      <span className="pull-right">
                        <span className="btn bg-blue-card mr-1 card-icon">
                          <i className="fa fa-calendar-plus-o"/>
                        </span>
                        <span className="btn btn-danger mr-1 card-icon">
                          <i className="fa fa-trash-o"/>
                        </span>
                      </span>
                    </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <h5 className="font-weight-bold"> {entitlement.name}</h5>
                        <p className="span-font">ADUser1</p>
                        <p className="span-font"><b>Account Name: </b>PTRIP</p>
                        <p className="span-font"><b>Account Type: </b>Primary</p>
                        <p className="span-font"><b>StartDate: </b>March 18,2019 04:16 PM</p>
                        <Badge className="badge blue small">Provisioned</Badge>
                      </Col>
                    </Row>
                    <hr className="hr" />
                </div>
              );
            })
          }
      </ContentCard>
    );
  }
  
  renderRoles = () => {
    const {roles = [], isRolesLoading} = this.state;
    return (
      <ContentCard className="header-green" loading={isRolesLoading} title={
        <div>
          <h5 className="card-header-color">ROLES</h5>
          <span className="card-span-header">These are my roles within the organization</span>
        </div>
      }>
        
        <Row>
          <Col>
            <Checkbox className="text-left">Select All</Checkbox>
            <span className="pull-right">
                           <span className="btn btn-danger card-icon">
                             <i className="fa fa-trash-o"/>
                           </span>
                         </span>
          </Col>
        </Row>
        <hr className="hr"/>
        {
          (roles.roles || []).map((role, i) => {
            const roleName = (role.fields || []).find(x => x.name === 'Role Name');
            const roleDescription = (role.fields || []).find(x => x.name === 'Role Description');
            const createdDate = (role.fields || []).find(x => x.name === 'ugp_create');
            return (
              <div key={`role-${i}`}>
                <Row>
                  <Col>
                    <Checkbox/>
                    <span className="pull-right">
                            <span className="btn btn-danger card-icon">
                              <i className="fa fa-trash-o"/>
                            </span>
                          </span>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <h5 className="font-weight-bold">{(roleName && roleName.value) || '--'}</h5>
                    <p className="span-font">{(roleDescription && roleDescription.value) || '--'}</p>
                    <p className="span-font"><b>Assigned On
                      Date: </b>{createdDate && createdDate.value ? moment(createdDate.value).format('MMMM Do YYYY h:mm:ss a') : '--'}
                    </p>
                    <Badge className="badge blue small">Provisioned</Badge>
                  </Col>
                </Row>
                <hr className="hr"/>
              </div>
            );
          })
        }
      </ContentCard>
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
                  <Col sm="12" md="4">
                    { this.renderApplications() }
                  </Col>
                  <Col sm="12" md="4">
                    { this.renderEntitlements() }
                  </Col>
                  <Col sm="12" md="4">
                    { this.renderRoles() }
                  </Col>
                </Row>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MyAccess;
