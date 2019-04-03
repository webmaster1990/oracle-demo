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
import moment from 'moment';
import './myAccess.scss'

class Application extends Component {
  _dataContext = new ApiService();

  state = {
    applications: {},
    isApplicationsLoading: true,
  }

  componentDidMount() {
    this.getApplications();
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
        <Row loading={isApplicationsLoading}>
        {
          (applications.accounts || []).map((account, i) => {
            const accountDesscription = (account.fields || []).find(x => x.name === 'Account Description');
            const accountType = (account.fields || []).find(x => x.name === 'Account Type');
            const provisionedOnDate = (account.fields || []).find(x => x.name === 'Provisioned-On Date');
            const startDate = (account.fields || []).find(x => x.name === 'Valid From Date');
            const status = (account.fields || []).find(x => x.name === 'Status');
            return (
              <Col md="4" sm="12" xs="12" key={`application-account-${i}`}>
                <Checkbox/>
                <span className="pull-right">
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
                <h5 className="font-weight-bold mt-5">{account.name}</h5>
                <p className="span-font">{(accountDesscription && accountDesscription.value) || '--'}</p>
                <p className="span-font"><b>Account Name: </b>{account.name}</p>
                <p className="span-font"><b>Account Type: </b>{(accountType && accountType.value) || '--'}</p>
                <p className="span-font"><b>Provisioned On
                  Date: </b>{startDate && startDate.value ? moment(startDate.value).format('MMMM Do YYYY h:mm:ss a') : '--'}
                </p>
                <p className="span-font">
                  <b>StartDate: </b>{provisionedOnDate && provisionedOnDate.value ? moment(provisionedOnDate.value).format('MMMM Do YYYY h:mm:ss a') : '--'}
                </p>
                {status && status.value && <Badge className="badge bg-blue-card small mb-2">{status.value}</Badge>}
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
                  <h5>APPLICATIONS</h5>
                  <span>Application that I have access to</span>
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
              {this.renderApplications()}
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Application
