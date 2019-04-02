import React, { Component } from 'react';
import { Card } from 'antd';
import {ApiService} from '../../Services/ApiService';

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
            Challenge Questions
          </div>
        }
      </Card>
    )
  }
}
export default ChallangeQuestions
