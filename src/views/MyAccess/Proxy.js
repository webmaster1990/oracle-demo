import React, {Component} from 'react'
import {
  Col,
  Row,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Badge, Button,Label
} from "reactstrap";
import {Tabs, Table, Radio  } from "antd";
import './myAccess.scss'
import {ApiService} from "../../Services/ApiService";
import moment from "moment";
const TabPane = Tabs.TabPane;

const columns = [{
  title: 'Sr Number',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Proxy Name',
  dataIndex: 'userLogin',
  key: 'userLogin',
}, {
  title: 'Relationship',
  dataIndex: 'relationship',
  key: 'relationship',
},{
  title: 'Start Date',
  dataIndex: 'startDate',
  key: 'startDate',
  render: (startDate) => <div>{moment(startDate).format('MMMM Do YYYY h:mm:ss a')}</div>
},{
  title: 'End Date',
  dataIndex: 'endDate',
  key: 'endDate',
  render: (endDate) => <div>{moment(endDate).format('MMMM Do YYYY h:mm:ss a')}</div>
},{
  title: 'Last Update',
  dataIndex: 'lastUpdate',
  key: 'lastUpdate',
},{
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}];
class Proxy extends Component {
  _dataContext = new ApiService();

  state = {
    addProxy: false,
    id:45,
    proxy:[]
  }

  componentDidMount() {
    this.getProxy()
  }

  callback = (key) => {
    console.log(key);
  }

  getProxy = async () => {
    const {id} = this.state
    this.setState({
      isEntitlementsLoading: true,
    })
    const proxy = await this._dataContext.getProxy(id);
    this.setState({
      proxy:proxy.user
    });
  }
  addProxy = () =>{
    const {addProxy} = this.state
    if(!addProxy){
      this.setState({
        addProxy:true
      })
    }else {
      this.setState({
        addProxy:false
      })
    }
  }
  render() {
    const {addProxy} = this.state
    return (
      <div className="animated fadeIn">
        <Row>
          <Col  md="4" xs="12" sm="12">
            <Button color="primary" onClick={this.addProxy} className=" remove-btn">Add Proxy</Button>
            <Button color="primary" className=" remove-btn ml-2">Refresh</Button>
          </Col>
        </Row>
        <hr className="hr"/>
        {!addProxy ?
          <Row>
            <Col  md="12" xs="12" sm="12">
              <Tabs onChange={this.callback} type="card" activeKey={"2"}>
                <TabPane tab="Proxies Assigned by Me" key="1">
                </TabPane>
                <TabPane  tab="Proxies I have been Assigned" key="2">
                  <Table dataSource={this.state.proxy} columns={columns} dataIndex/>
                </TabPane>
              </Tabs>
            </Col>
          </Row> :
          <div>
          <Row>
            <Col md="12" sm="12" xs="12">
              <div className="pull-left">
              <p>Whorn do you wish to make you proxy while you are away ? </p>
              </div>
              <div className="pull-right">
              <i className="fa fa-close "/>
              </div>
            </Col>
          </Row>
            <Row>
              <Col md="12" sm="12" xs="12">
                <Radio>My Manager</Radio>
                <Radio checked={true}>I have someone else in mind</Radio>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md="4" sm="12" xs="12">
                <FormGroup>
                  <Label htmlFor="appendedInput">* Proxy Name</Label>
                  <div className="controls">
                  <InputGroup>
                    <Input type="text" placeholder="Enter Name to Search..." style={{borderRight: "none"}}/>
                    <InputGroupAddon addonType="append">
                      <InputGroupText style={{backgroundColor: "#f6f9f9"}}>
                        <i className="fa fa-search"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  </div>
                </FormGroup>
              </Col>
              <Col md="4" sm="12" xs="12">
                <FormGroup>
                  <Label>* Select Start Date</Label>
                  <Input type="date"/>
                </FormGroup>
              </Col>
              <Col md="4" sm="12" xs="12">
                <FormGroup>
                  <Label>* Select End Date</Label>
                  <Input type="date"/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col  md="4" xs="12" sm="12">
                <Button color="primary" className=" remove-btn">Submit</Button>
                <Button color="primary" className=" remove-btn ml-2">Cancel</Button>
              </Col>
            </Row>
          </div>
        }

      </div>
    )
  }
}

export default Proxy
