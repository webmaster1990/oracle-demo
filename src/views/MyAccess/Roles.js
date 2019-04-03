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
import './myAccess.scss';
import moment from 'moment';

class Roles extends Component {
  _dataContext = new ApiService();

  state = {
    roles: {},
    isRolesLoading: true,
  }

  componentDidMount() {
    this.getRoles();
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

  renderRoles = () => {
    const {roles = [], isRolesLoading} = this.state;
    return (
      <Row loading={isRolesLoading}>
        {
          (roles.roles || []).map((role, i) => {
            const roleName = (role.fields || []).find(x => x.name === 'Role Name');
            const roleDescription = (role.fields || []).find(x => x.name === 'Role Description');
            const createdDate = (role.fields || []).find(x => x.name === 'ugp_create');
            return (
              <Col md="4" sm="12" xs="12" key={`role-${i}`}>
                    <Checkbox/>
                    <span className="pull-right">
                      <span className="btn btn-danger card-icon">
                        <i className="fa fa-trash-o"/>
                      </span>
                    </span>
                    <h5 className="font-weight-bold mt-5">{(roleName && roleName.value) || '--'}</h5>
                    <p className="span-font">{(roleDescription && roleDescription.value) || '--'}</p>
                    <p className="span-font"><b>Assigned On
                      Date: </b>{createdDate && createdDate.value ? moment(createdDate.value).format('MMMM Do YYYY h:mm:ss a') : '--'}
                    </p>
                    <Badge className="badge blue small mb-5">Provisioned</Badge>
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
                  <h5>ROLES</h5>
                  <span>These are my roles within the organization</span>
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
              {this.renderRoles()}
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Roles
