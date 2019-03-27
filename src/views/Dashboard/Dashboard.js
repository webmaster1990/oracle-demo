import React, { Component } from 'react';
import {
  Row, Col, Badge,
} from 'reactstrap';
import { Progress } from 'antd';
import ProgressCard from './ProgressCard';
import ContentCard from './ContentCard';
import { ApiService } from '../../Services/ApiService';
import './dashboard.scss';

class Dashboard extends Component {
  _dataContext = new ApiService();

  componentDidMount() {
    this.getPendingRequest();
  }

  getPendingRequest = async () => {
    const data = await this._dataContext.getPendingReqests();
    console.log(data);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <ProgressCard name="Pending Approvals" value={0} />
          <ProgressCard name="Pending Requests" value={5} />
          <ProgressCard name="Pending Certifications" value={10} />
        </Row>
        <Row>
          <ContentCard title="Pending Approvals" className="header-gray" count={0}>
             <p className="text-center">You have no pending approvals</p>
          </ContentCard>
          <ContentCard title="Pending Requests" className="header-blue" count={5} >
            <div>
              <p className="mb-0"><b>CN=Access Control Assistance Operators,CN=Builtin,DC=nimdex,DC=com</b></p>
              <Badge className="badge-red mt-2 mb-2" >Request Approved Fulfillment Failed</Badge>
              <p className="mb-1"><b>Baneficiaries:</b></p>
              <p className="mb-3">System Administrator</p>
              <p className="mb-1"><b>Request ID: </b>7003</p>
              <p className="mb-1"><b>Request Type: </b>Provision Entitlement</p>
              <p className="mb-1"><b>Requested Date: </b>March 15,2019 07:23 PM</p>
            </div>
          </ContentCard>
          <ContentCard title="Pending Certifications" className="header-green" count={10} >
            <div>
              <p><b>User_Certificate [System Administrator]</b></p>
              <Badge className="badge-green" >New</Badge>
              <p className="mt-2"><b>Certificate ID: </b>61</p>
              <p className="mb-1"><b>Type: </b>User</p>
              <p className="mb-1"><b>Date Created : </b>March 20,2019 11:23 PM</p>
              <b className="mb-1">Progress</b>
              <Progress percent={30} className="mb-2" />
            </div>
            <div className="certifications-content">
              <div className="mt-2 mb-2 pr-2 pl-2">
                <p className="pt-3"><b>User_Certificate [System Administrator]</b></p>
                <Badge className="badge-green">Complete</Badge>
                <p className="mb-1"><b>Certificate ID: </b>61</p>
                <p className="mb-1"><b>Type: </b>User</p>
                <p className="mb-1"><b>Date Created : </b>March 20,2019 11:23 PM</p>
                <b className="mb-1">Progress</b>
                <Progress percent={30} className="mb-2"/>
              </div>
            </div>
          </ContentCard>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
