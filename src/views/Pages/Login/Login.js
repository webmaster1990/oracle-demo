import React, { Component } from 'react';
import { message } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ApiService } from '../../../Services/ApiService';

class Login extends Component {
  _dataContext = new ApiService();
  
  state = {
    username: '',
    password: ''
  }
  
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  onLogin = async () => {
    const {username, password} = this.state;
    if (username && password) {
      const response = await this._dataContext.login({username, password});
      if (response && response.accessToken) {
        localStorage.setItem('access_token', response.accessToken );
        localStorage.setItem('token_expire', response.expiresIn);
        this.props.history.push('/dashboard');
      } else {
        message.error('Please enter valid username and password (xelsysadm | MonDay2019##)!');
      }
    } else {
      message.error('Please enter username and password!');
    }
  }
  
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" onChange={this.onChange} name="username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" onChange={this.onChange} name="password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.onLogin}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
