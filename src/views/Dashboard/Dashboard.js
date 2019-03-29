import React, { Component } from 'react';
import {
  Row, Badge, Button, Col,
} from 'reactstrap';
import { PropagateLoader } from 'react-spinners';
import { Progress, Drawer } from 'antd';
import ProgressCard from './ProgressCard';
import ContentCard from './ContentCard';
import moment from 'moment';
import { ApiService } from '../../Services/ApiService';
import ProvisionEntitlement from "./ProvisionEntitlement";
import './dashboard.scss';
import './drawer.scss'

class Dashboard extends Component {
  _dataContext = new ApiService();

  state = {
    pendingApprovals: {},
    certifications: {},
    pendingRequests: {},
    isDrawerOpen: false,
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({
      isLoading: true,
    })
    const promises = [this._dataContext.getPendingApprovals(), this._dataContext.getPendingCertifications(), this._dataContext.getPendingRequests()];
    const [pendingApprovalsRes, certRes, pendingRes] = await Promise.all(promises);
    const newState = {};
    if (!pendingApprovalsRes.error) {
      newState.pendingApprovals = pendingApprovalsRes;
    }
    if (!certRes.error) {
      newState.certifications = certRes;
    }
    if (!pendingRes.error) {
      newState.pendingRequests = pendingRes;
    }
    this.setState({
      ...newState,
      isLoading: false,
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
    const { isLoading, pendingApprovals = {}, certifications = {}, pendingRequests = {}, isDrawerOpen } = this.state;
    const loader = (<div className="loading">{' '}<PropagateLoader color={'#165d93'} /></div>);
    if (isLoading) {
      return loader;
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <ProgressCard name="Pending Approvals" value={pendingApprovals.count || 0} />
          <ProgressCard name="Pending Requests" value={pendingRequests.count || 0} />
          <ProgressCard name="Pending Certifications" value={certifications.count || 0} />
        </Row>
        <Row>
          <ContentCard title="Pending Approvals" className="header-gray" count={pendingApprovals.count || 0}>
            {
              pendingApprovals.count === 0 && <p className="text-center pt-2">You have no pending approvals.</p>
            }
            {
              (pendingApprovals.requests || []).map((request, i) => {
                return (
                  <Row className="p-2" key={`pending-request-item-${i}`}>
                    <Col md="2" sm="12" xs="12" className="pl-2 pr-0 pt-2 pb-3" style={{backgroundColor:"#e5f2ff"}}>
                      <img src={require('../../assets/avatars/6.jpg')} className="img-avatar"/>
                    </Col>
                    <Col md="10" sm="12" xs="12" className="pl-0 pr-2 pt-2 pb-3" style={{backgroundColor:"#e5f2ff"}}>
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
                )
              })
            }

          </ContentCard>
          <ContentCard title="Pending Requests" className="header-blue" count={pendingRequests.count || 0} >
            {
              pendingRequests.count === 0 && <p className="text-center pt-2">You have no pending request.</p>
            }
            {
              (pendingRequests.requests || []).map((request, i) => {
                return (
                  <div className="request-item" key={`request-item-${i}`}>
                    <p className="mb-0"><b>CN=Access Control Assistance Operators,CN=Builtin,DC=nimdex,DC=com</b></p>
                    <Badge className={`badge mt-2 mb-2 small ${request.reqStatus === 'Request Completed' ?  'green' : 'red'}`}>{request.reqStatus}</Badge>
                    <p className="mb-1"><b>Baneficiaries:</b></p>
                    <p className="mb-3">System Administrator</p>
                    <p className="mb-1"><b>Request ID: </b>{request.id}</p>
                    <p className="mb-1"><b>Request Type: </b>{request.reqType}</p>
                    <p className="mb-1"><b>Requested Date: </b>{moment(request.reqCreatedOn).format('MMMM Do YYYY h:mm:ss a')}</p>
                  </div>
                )
              })
            }
          </ContentCard>
          <ContentCard title="Pending Certifications" className="header-green" count={certifications.count || 0} >
            {
              certifications.count === 0 && <p className="text-center pt-2">You have no pending certification.</p>
            }
            {
              (certifications.certifications || []).map((certificate, i) => {
                return (
                  <div className="request-item" key={`cert-item-${i}`}>
                    <p><b>{certificate.name}</b></p>
                    <Badge className="badge green small">New</Badge>
                    <p className="mt-2"><b>Certificate ID: </b>{certificate.id}</p>
                    <p className="mb-1"><b>Type: </b>{certificate.type}</p>
                    <p className="mb-1"><b>Date Created : </b>{moment(certificate.createdDate).format('MMMM Do YYYY h:mm:ss a')}</p>
                    <b className="mb-1">Progress</b>
                    <Progress percent={30} className="mb-2"/>
                  </div>
                )
              })
            }
            {/*<div className="certifications-content">*/}
              {/*<div className="mt-2 mb-2 pr-2 pl-2">*/}
              {/*<p className="pt-3"><b>User_Certificate [System Administrator]</b></p>*/}
              {/*<Badge className="badge green small">Complete</Badge>*/}
              {/*<p className="mb-1"><b>Certificate ID: </b>61</p>*/}
              {/*<p className="mb-1"><b>Type: </b>User</p>*/}
              {/*<p className="mb-1"><b>Date Created : </b>March 20,2019 11:23 PM</p>*/}
              {/*<b className="mb-1">Progress</b>*/}
              {/*<Progress percent={30} className="mb-2"/>*/}
            {/*</div>*/}
            {/*</div>*/}
          </ContentCard>
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
