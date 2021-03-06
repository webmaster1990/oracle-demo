import React, {Component} from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  FormGroup,
  Input,
  Label,
  Button, Badge
} from "reactstrap";
import {Checkbox, Icon} from 'antd';
import {Link} from "react-router-dom";
import moment from 'moment';
import {ApiService} from '../../Services/ApiService';
import Loader from '../Common/Loader';
import '../MyAccess/myAccess.scss'

class PendingApprovals extends Component {
  _dataContext = new ApiService();

  state = {
    activeTab: 'all',
    isLoading: false,
    approvals: {},
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({
      isLoading: true,
    });
    const promises = [this._dataContext.getPendingApprovals()];
    const [allRes] = await Promise.all(promises);
    const newState = {};
    if (!allRes.error) {
      newState.approvals = allRes;
    }
    console.log(newState)
    this.setState({
      ...newState,
      isLoading: false,
    });

  }

  getPendingApprovals = () => {
    const {approvals = {}} = this.state;
    return (approvals.requests || []).concat((approvals.requests || [])).map((approval, index) => {
      return (
        <div>
          <Row className="flex-align-item-center">
            <Col md="2" xs="12" sm="12" className="pr-0 ">
              <Checkbox/>
              <img src={require('../../assets/avatars/6.jpg')} className="img-avatar ml-5"
                   alt="admin@bootstrapmaster.com"/>
            </Col>
            <Col md="3" xs="12" sm="12" className="pl-0 pr-0">
              <p className="mb-0"><b>Requester manager approval for Request ID {approval.id} </b>
                <Icon type="info-circle" twoToneColor="#64a6ea" theme="twoTone"/>
              </p>
              <p>
                <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                <Icon type="check-circle" theme="twoTone" twoToneColor="#fbb01b"/>
                <Icon type="check-circle" theme="twoTone" twoToneColor="#dcdcdc"/>
              </p>
              <p>{approval.creator}</p>
              <p><b>Beneficiaries: </b>Wolfe, Noel</p>
            </Col>
            <Col md="3" xs="12" sm="12" className="pl-0 pr-0">
              <p className="mb-0"><b>Request ID: </b>{approval.id}</p>
              <p className="mb-0"><b>Request Type: </b>Provision Entitlement</p>
              <p className="mb-0"><b>Requested Date: </b>{moment(approval.created).format('MMMM Do YYYY h:mm:ss a')}</p>
              <p className="mb-0"><b>Requestor: </b>Wolfe, Noel</p>
            </Col>
            <Col md="2" xs="12" sm="12" className=" pl-0">
              <Badge className="badge bg-blue-orange small mr-1">{approval.status}</Badge>
            </Col>
            <Col md="2" xs="12" sm="12" className="pl-0 pr-0">
              <Button block color="success" className="w-25 pr-0 pl-0 btn-sm  custom-button">Approve</Button>
              <Button block color="danger" className="w-25 pr-0 pl-0 btn-sm custom-button  mt-0">Decline</Button>
              <Button block color="secondary" className="w-25 pr-0 pl-0 btn-sm  mt-0 custom-button-small">
                <i className="fa fa-caret-down"></i>
              </Button>
            </Col>
          </Row>
          <hr className="hr"/>
        </div>
      )
    })
  }

  render() {
    const {isLoading, approvals} = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="12" md="12" xs="12" sm="12">
            <Card className="card-border">
              <CardBody>
                <p><b>Search Filters</b></p>
                <Row>
                  <Col md="4" xs="12" sm="12">
                    <FormGroup>
                      <Label>Request ID</Label>
                      <Input type="text"/>
                    </FormGroup>
                  </Col>
                  <Col md="4" xs="12" sm="12">
                    <FormGroup>
                      <Label>Creation Date</Label>
                      <Input type="text"/>
                    </FormGroup>
                  </Col>
                  <Col md="4" xs="12" sm="12">
                    <FormGroup>
                      <Label>Expiration Date</Label>
                      <Input type="text"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row md="12" sm="12" xl="12">
                  <Col md="4" xs="12" sm="12">
                    <FormGroup>
                      <Label>Task Priority</Label>
                      <Input type="select" placeholder="--ANY--">
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="4" xs="12" sm="12"/>
                  <Col md="4" xs="12" sm="12">
                    <div className="pull-right mt-4">
                      <Link to="/">Reset Filters</Link>
                      <Button color="primary" className="ml-2 remove-btn">Search</Button>
                    </div>
                  </Col>
                </Row>
                <hr className="hr mt-1"/>
                <Row>
                  <Col md="4" xs="12" sm="12">
                    <Checkbox className="text-left mt-2">Select All For Bulk Approve/Decline</Checkbox>
                  </Col>
                  <Col md="8" xs="12" sm="12" className="text-right">
                    <span>SortBy</span>
                    <Input type="select" className="w-25 mr-1 ml-1 inline-block" bsSize="sm">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                      <option value="4">Option #4</option>
                      <option value="5">Option #5</option>
                    </Input>
                    <span className="mr-1"><i className="fa fa-sort fa-15x"/></span>
                    <span className="btn mr-1 btn-dribbbl"><i className="fa fa-refresh"/></span>
                  </Col>
                </Row>
                <hr className="hr"/>
                {
                  this.getPendingApprovals()
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PendingApprovals
