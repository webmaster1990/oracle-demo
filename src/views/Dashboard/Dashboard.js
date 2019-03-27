import React, { Component } from 'react';
import {
  Row,
} from 'reactstrap';
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
          <ContentCard title="Pending Approvals" className="header-gray" count={0} />
          <ContentCard title="Pending Requests" className="header-blue" count={5} />
          <ContentCard title="Pending Certifications" className="header-green" count={10} />
        </Row>
      </div>
    );
  }
}

export default Dashboard;
