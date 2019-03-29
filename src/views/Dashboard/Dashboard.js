import React, { Component } from 'react';
import {
  Row, Badge, Button, Col,
} from 'reactstrap';
import { Progress, Drawer } from 'antd';
import ProgressCard from './ProgressCard';
import ContentCard from '../Common/ContentCard';
import moment from 'moment';
import { ApiService } from '../../Services/ApiService';
import ProvisionEntitlement from "./ProvisionEntitlement";
import CardItem from '../Common/CardItem';
import './dashboard.scss';
import './drawer.scss'

class Dashboard extends Component {
  _dataContext = new ApiService();

  state = {
    pendingApprovals: {},
    certifications: {},
    pendingRequests: {},
    isDrawerOpen: false,
    isApprovalsLoading: true,
    isCertificationsLoading: true,
    isRequestLoading: true,
  }

  componentDidMount() {
    this.getApprovals();
    this.getRequests();
    this.getCertifications();
  }

  getApprovals = async () => {
    this.setState({
      isApprovalsLoading: true,
    })
    const pendingApprovalsRes = await this._dataContext.getPendingApprovals();
    const newState = {};
    if (!pendingApprovalsRes.error) {
      newState.pendingApprovals = pendingApprovalsRes;
    }
    this.setState({
      ...newState,
      isApprovalsLoading: false,
    });
  }
  
  getRequests = async () => {
    this.setState({
      isRequestLoading: true,
    })
    const pendingRes = await this._dataContext.getPendingRequests();
    const newState = {};
    if (!pendingRes.error) {
      newState.pendingRequests = pendingRes;
    }
    this.setState({
      ...newState,
      isRequestLoading: false,
    });
  }
  
  getCertifications = async () => {
    this.setState({
      isCertificationsLoading: true,
    })
    const certRes = await this._dataContext.getPendingCertifications();
    const newState = {};
    if (!certRes.error) {
      newState.certifications = certRes;
    }
    this.setState({
      ...newState,
      isCertificationsLoading: false,
    });
  }
  
  onApprove = () => {
    this.setState({
      isDrawerOpen: true,
    });
  }
  
  onCloseDrawer = () => {
    this.setState({
      isDrawerOpen: false,
    });
  }

  render() {
    const { pendingApprovals = {}, certifications = {}, pendingRequests = {}, isDrawerOpen, isCertificationsLoading, isRequestLoading, isApprovalsLoading } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <ProgressCard name="Pending Approvals" value={pendingApprovals.count || 0} />
          <ProgressCard name="Pending Requests" value={pendingRequests.count || 0} />
          <ProgressCard name="Pending Certifications" value={certifications.count || 0} />
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="4">
          <ContentCard title={<div>Pending Approvals<span className="pull-right count">{pendingApprovals.count || 0}</span></div>}
                       className="header-gray" count={pendingApprovals.count || 0} loading={isApprovalsLoading}>
              {
                pendingApprovals.count === 0 && <p className="text-center pt-2">You have no pending approvals.</p>
              }
              {
                (pendingApprovals.requests || []).map((request, i) => {
                  return (
                    <CardItem className="p-2" keyValue={`pending-request-item-${i}`}>
                      <Row className="m-0">
                        <Col md="2" sm="12" xs="12" className="pl-2 pr-0 pt-2 pb-3">
                          <img src={require('../../assets/avatars/6.jpg')} className="img-avatar"/>
                        </Col>
                        <Col md="10" sm="12" xs="12" className="pl-0 pr-2 pt-2 pb-3">
                          <p className="mb-0"><b>BR_Fileshare</b></p>
                          {request.status && <Badge className={"badge mt-2 mb-2 small orange"}>{request.status}</Badge>}
                          <p className="mb-0"><b>Baneficiaries:</b></p>
                          <p className="mb-3">System Administrator</p>
                          <p className="mb-1"><b>Request ID: </b>{request.id}</p>
                          <p className="mb-1"><b>Request Type: </b>Provision Entitlement</p>
                          <p className="mb-1"><b>Requested Date: </b>{moment(request.created).format('MMMM Do YYYY h:mm:ss a')}</p>
                          <Button block color="success" className="w-25 pr-0 pl-0 btn-sm  custom-button" onClick={this.onApprove}>Approve</Button>
                          <Button block color="danger" className="w-25 pr-0 pl-0 btn-sm custom-button  mt-0">Decline</Button>
                          <Button block color="secondary" className="w-25 pr-0 pl-0 btn-sm  mt-0 custom-button-small">
                            <i className="fa fa-caret-down"/>
                          </Button>
                        </Col>
                      </Row>
                    </CardItem>
                  )
                })
              }
          </ContentCard>
          </Col>
          <Col xs="12" sm="12" lg="4">
          <ContentCard title={<div>Pending Requests<span className="pull-right count">{pendingRequests.count || 0}</span></div>}
                       className="header-blue" loading={isRequestLoading}>
            {
              pendingRequests.count === 0 && <p className="text-center pt-2">You have no pending request.</p>
            }
            {
              (pendingRequests.requests || []).map((request, i) => {
                return (
                   <CardItem keyValue={`request-item-${i}`}>
                    <p className="mb-0"><b>CN=Access Control Assistance Operators,CN=Builtin,DC=nimdex,DC=com</b></p>
                    <Badge className={`badge mt-2 mb-2 small ${request.reqStatus === 'Request Completed' ?  'green' : 'red'}`}>{request.reqStatus}</Badge>
                    <p className="mb-1"><b>Baneficiaries:</b></p>
                    <p className="mb-3">System Administrator</p>
                    <p className="mb-1"><b>Request ID: </b>{request.id}</p>
                    <p className="mb-1"><b>Request Type: </b>{request.reqType}</p>
                    <p className="mb-1"><b>Requested Date: </b>{moment(request.reqCreatedOn).format('MMMM Do YYYY h:mm:ss a')}</p>
                  </CardItem>
                )
              })
            }
          </ContentCard>
          </Col>
          <Col xs="12" sm="12" lg="4">
  
          <ContentCard title={<div>Pending Certifications<span className="pull-right count">{certifications.count || 0}</span></div>}
            className="header-green" loading={isCertificationsLoading}>
            { certifications.count === 0 && <p className="text-center pt-2">You have no pending certification.</p> }
            {
              (certifications.certifications || []).map((certificate, i) => {
                return (
                  <CardItem keyValue={`cert-item-${i}`}>
                    <p><b>{certificate.name}</b></p>
                    <Badge className="badge green small">New</Badge>
                    <p className="mt-2"><b>Certificate ID: </b>{certificate.id}</p>
                    <p className="mb-1"><b>Type: </b>{certificate.type}</p>
                    <p className="mb-1"><b>Date Created : </b>{moment(certificate.createdDate).format('MMMM Do YYYY h:mm:ss a')}</p>
                    <b className="mb-1">Progress</b>
                    <Progress percent={30} className="mb-2"/>
                  </CardItem>
                )
              })
            }
          </ContentCard>
          </Col>
        </Row>
        <Drawer className="drawer"
          title="Basic Drawer"
          placement="right"
          closable={false}
          maskClosable
          mask
          visible={isDrawerOpen}
        >
          <ProvisionEntitlement onCloseDrawer={this.onCloseDrawer}/>
        </Drawer>
      </div>
    );
  }
}

export default Dashboard;
