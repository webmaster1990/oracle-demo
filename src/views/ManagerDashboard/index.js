import React,{Component} from 'react'
import {
  Row,
  Col,
  CardBody,
  Card,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Input,
  FormGroup,
  Button, Label
} from 'reactstrap'
import './managerdashboard.scss'
import { Table,Icon  } from 'antd';

class ManagerDashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
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

  toggle = (tabPane, tab) => {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane = () => {
    return (
      <>
        <TabPane tabId="1">
          {this.All()}
        </TabPane>
        <TabPane tabId="2">
          {this.All()}
        </TabPane>
        <TabPane tabId="3">
          {this.All()}
        </TabPane>
        <TabPane tabId="4">
          {this.All()}
        </TabPane>
      </>
    );
  }
  render() {
    return(
      <div className="animated fadeIn manager-dashboard">
      <Row>
        <Col md="12" sm="12" xs="12">
          <Nav tabs>
            <NavItem>
              <NavLink
                active={this.state.activeTab[0] === '1'}
                onClick={() => {
                  this.toggle(0, '1');
                }}
              >
                Expiring Contractor
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={this.state.activeTab[0] === '2'}
                onClick={() => {
                  this.toggle(0, '2');
                }}
              >
                All
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={this.state.activeTab[0] === '3'}
                onClick={() => {
                  this.toggle(0, '3');
                }}
              >
                Associates
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={this.state.activeTab[0] === '4'}
                onClick={() => {
                  this.toggle(0, '4');
                }}
              >
                Contractors
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-5" activeTab={this.state.activeTab[0]}>
            {this.tabPane()}
          </TabContent>
        </Col>
      </Row>
      </div>
    )
  }

}
export default ManagerDashboard
