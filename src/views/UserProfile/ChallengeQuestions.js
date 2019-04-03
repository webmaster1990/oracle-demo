import React, { Component } from 'react';
import { Card } from 'antd';
import {ApiService} from '../../Services/ApiService';
import {Button, Col, FormGroup, Input, Row} from "reactstrap";

class ChallangeQuestions extends Component{
  _dataContext = new ApiService();

  state = {
    questions: {},
    isQuestionLoading: true,
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({
      isQuestionLoading: true,
    });
    const userRes = await this._dataContext.getChallangeQuestionsById(20);
    const newState = {};
    if (!userRes.error) {
      newState.questions = userRes;
    }
    this.setState({
      ...newState,
      isQuestionLoading: false,
    });
  }

  render() {
    return(
      <Card className="no-padding no-border" loading={this.state.isQuestionLoading}>
        {!this.state.isQuestionLoading &&
        <div>
          <Row>
            <Col md="12" sm="12" xs="12">
              <FormGroup>
                <Input type="select">
                  <option>Who was your fifth grade teacher?</option>
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
                <Input type="text" value="Who" className="mt-1"/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12" sm="12" xs="12">
              <FormGroup>
                <Input type="select">
                  <option>Where were you New years 2000?</option>
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
                <Input type="text" value="Where" className="mt-1"/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12" sm="12" xs="12">
              <FormGroup>
                <Input type="select">
                  <option>What is the name of a city where you got lost?</option>
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
                <Input type="text" value="What" className="mt-1"/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4" sm="12" xs="12" >
              <Button color="primary" className=" remove-btn">Submit</Button>
              <Button color="primary" className=" remove-btn ml-2">Reset</Button>
            </Col>
            <Col md="2" sm="12" xs="12" >
            </Col>
          </Row>
        </div>
        }
      </Card>
    )
  }
}
export default ChallangeQuestions
