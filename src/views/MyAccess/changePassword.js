import React,{Component} from 'react'
import {
  Col,
  Row,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Badge, Button,Label,Card
} from "reactstrap";
import {ApiService} from "../../Services/ApiService";
import CardBody from "reactstrap/es/CardBody";

class changePassword extends Component{
  _dataContext = new ApiService();

  state = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    error: ""
  }

  onChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }

  changePassword = async () =>{
    const {oldPassword, newPassword, confirmPassword} = this.state
    const data ={
      "oldPassword": oldPassword,
      "newPassword": newPassword,
      "confirmPassword": confirmPassword
    }
    if( newPassword === confirmPassword){
      const changePassword = await this._dataContext.changePassword(data);
    }else {
      this.setState({error:"New password and confirm password is not match" })
    }

  }

  render() {
    const {oldPassword, newPassword, confirmPassword, error } = this.state
    return(
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <Row>
              <Col md="12" sm="12" xs="12">
                <FormGroup>
                  <Label>Old password</Label>
                  <Input type="password" name="oldPassword" value={oldPassword} onChange={this.onChange}/>
                </FormGroup>
              </Col>
              <Col md="12" sm="12" xs="12">
                <FormGroup>
                  <Label>New password</Label>
                  <Input type="password" name="newPassword" value={newPassword} onChange={this.onChange}/>
                </FormGroup>
              </Col>
              <Col md="12" sm="12" xs="12">
                <FormGroup>
                  <Label>Confirm password</Label>
                  <Input type="password" name="confirmPassword" value={confirmPassword} onChange={this.onChange}/>
                </FormGroup>
                <span className="text-danger">{error}</span>
              </Col>
            </Row>
            <Row>
              <Col md="3" sm="12" xs="12">
                <Button color="primary" className="remove-btn" onClick={this.changePassword}>Change Password</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }

}
export default changePassword
