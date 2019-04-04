import React,{Component} from 'react'
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Input,
  FormGroup,
  Button
} from 'reactstrap'
import Loader from '../Common/Loader';
import { Table  } from 'antd';
import { ApiService } from '../../Services/ApiService';
import './managerdashboard.scss'

class ManagerDashboard extends Component {
  _dataContext = new ApiService();

  state = {
    activeTab: 'all',
    isLoading: false,
    all: {},
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({
      isLoading: true,
    })
    const promises = [this._dataContext.getAllManageDashboard()];
    const [allRes] = await Promise.all(promises);
    const newState = {};
    if (!allRes.error) {
      newState.all = allRes;
    }
    console.log(newState);
    this.setState({
      ...newState,
      isLoading: false,
    });

  }
  associates = () =>{
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => <div><img src={require('../../assets/avatars/6.jpg')} className="img-avatar"/> John Brown</div>,
    },{
      title: 'Action ',
      dataIndex: 'action',
      render: () => <div><span className="btn btn-primary card-icon bg-white"><i className="fa fa-user-o blue" /></span> <span
        className="btn btn-success card-icon bg-white"><i className="fa fa-file-o green"/></span> <span
        className="btn btn-danger card-icon bg-white"><i className="fa fa-lock red"/></span></div>
    }];
    const data = [{
      key: '1',
      name: 'John Brown',
    }, {
      key: '2',
      name: 'John Brown',
    }, {
      key: '3',
      name: 'John Brown',
    }, {
      key: '4',
      name: 'John Brown',
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Row>
        <Col md="12" sm="12" xs="12">
          <p>All Associates</p>
          <Row>
            <Col md="1" sm="12" xs="12" className="pr-0">
              <FormGroup>
                <Input type="select">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="8" sm="12" xs="12" >
              <Button block outline className="pull-left  mr-1 mb-1" color="danger"><i className="fa fa-lock"/>  SUSPEND</Button>
              <Button block outline className="pull-left mr-1 mb-1 mt-0" color="success"><i className="fa fa-unlock-alt"/>  RE-ENABLE</Button>
            </Col>
            <Col md="3" sm="12" xs="12">
              <FormGroup>
                <Input type="text" className="pull-right" placeholder="Search display name"/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table className="table-with-scroll" rowSelection={rowSelection}  pagination={false} columns={columns} dataSource={data} />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
  All = () => {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => <div><img src={require('../../assets/avatars/6.jpg')} className="img-avatar"/> John Brown</div>,
    },{
      title: 'Start Date',
      sorter: true,
      dataIndex: 'startDate',
    }, {
      title: 'Expiration Date',
      sorter: true,
      dataIndex: 'expirationDate',
    }, {
      title: 'Days Left ',
      sorter: true,
      dataIndex: 'daysLeft',
    },{
      title: 'Action ',
      dataIndex: 'action',
      render: () => <div><span className="btn btn-primary card-icon bg-white"><i className="fa fa-user-o blue" /></span> <span
        className="btn btn-success card-icon bg-white"><i className="fa fa-file-o green"/></span> <span
        className="btn btn-danger card-icon bg-white"><i className="fa fa-lock red"/></span></div>
    }];
    const data = [{
      key: '1',
      name: 'John Brown',
      startDate: "",
      expirationDate:'',
      daysLeft:'',
     }, {
      key: '2',
      name: 'John Brown',
      startDate: '',
      expirationDate: '',
      daysLeft: '',
    }, {
      key: '3',
      name: 'John Brown',
      startDate: '',
      expirationDate: '',
      daysLeft: '',
    }, {
      key: '4',
      name: 'John Brown',
      startDate: '',
      expirationDate: '',
      daysLeft: '',
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Row>
        <Col md="12" sm="12" xs="12">
          <p>All Employees and Contractors</p>
          <Row>
            <Col md="1" sm="12" xs="12" className="pr-0">
              <FormGroup>
                <Input type="select">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="8" sm="12" xs="12" >
              <Button block outline className="pull-left  mr-1 mb-1" color="danger"><i className="fa fa-lock"/>  SUSPEND</Button>
              <Button block outline className="pull-left mr-1 mb-1 mt-0" color="success"><i className="fa fa-unlock-alt"/>  RE-ENABLE</Button>
              <Button block outline className="pull-left mr-1 mb-1 mt-0" color="danger"><i className="fa fa-trash"/>  TERMINATE</Button>
              <Button block outline className="pull-left mr-1 mb-1 mt-0" color="success">RENEW</Button>
            </Col>
            <Col md="3" sm="12" xs="12">
              <FormGroup>
                <Input type="text" className="pull-right" placeholder="Search display name"/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table className="table-with-scroll" rowSelection={rowSelection}  pagination={false} columns={columns} dataSource={data} />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

  toggle = (tab) => {
    this.setState({
      activeTab: tab,
    });
  }

  tabPane = () => {
    return (
      <TabContent className="mb-5" activeTab={this.state.activeTab}>
        <TabPane tabId="expiring-contractor">
        </TabPane>
        <TabPane tabId="all">
          {this.All()}
        </TabPane>
        <TabPane tabId="associates">
          {this.associates()}
        </TabPane>
        <TabPane tabId="contractor">
        </TabPane>
      </TabContent>
    );
  }
  render() {
    const { activeTab, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return(
      <div className="animated fadeIn manager-dashboard">
      <Row>
        <Col md="12" sm="12" xs="12">
          <Nav tabs>
            <NavItem>
              <NavLink
                active={activeTab === 'expiring-contractor'}
                onClick={() => {
                  this.toggle('expiring-contractor');
                }}
              >
                Expiring Contractor
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={activeTab === 'all'}
                onClick={() => {
                  this.toggle('all');
                }}
              >
                All
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={activeTab === 'associates'}
                onClick={() => {
                  this.toggle('associates');
                }}
              >
                Associates
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={activeTab === 'contractor'}
                onClick={() => {
                  this.toggle('contractor');
                }}
              >
                Contractors
              </NavLink>
            </NavItem>
          </Nav>
          {this.tabPane()}
        </Col>
      </Row>
      </div>
    )
  }

}
export default ManagerDashboard
