import React, {Component} from 'react'
import {
  Col,
  Row,
  FormGroup,
  Input,
  Label, Button, Badge,
} from "reactstrap";
import './certifications.scss'
import {Link} from "react-router-dom";
import {Table, Progress} from 'antd';

const columns = [{
  title: 'TITLE',
  dataIndex: 'title',
  sorter: true,
  key: 'title',
}, {
  title: 'Type',
  dataIndex: 'type',
  key: 'type',
  render: () => <Badge className={"badge mt-2 mb-2 small orange"}>User</Badge>
}, {
  title: 'PROGRESS',
  dataIndex: 'progress',
  key: 'progress',
  render: () => <Progress percent={30} size="small"/>
}, {
  title: 'CREATION DATE',
  dataIndex: 'creationDate',
  sorter: true,
  key: 'creationDate',
}, {
  title: 'EXPIRES ON',
  dataIndex: 'expiresOn',
  sorter: true,
  key: 'expiresOn',
}, {
  title: 'ACTION',
  dataIndex: 'action',
  key: 'action',
  render: () => <span className="btn btn-primary card-icon"><i className="fa fa-user-o"/></span>
},

]
const data = [{
  key: '1',
  title: 'John Brown fdsfdsf',
  creationDate: 'March 20,2019 10:20 PM',
}, {
  key: '2',
  name: 'Jim Green',
  creationDate: 'March 20,2019 10:20 PM',
  expiresOn: '',

}, {
  key: '3',
  title: 'John Brown fdsfdsf',
  creationDate: 'March 20,2019 10:20 PM',
}, {
  key: '4',
  name: 'Jim Green',
  creationDate: 'March 20,2019 10:20 PM',
  expiresOn: '',

}, {
  key: '5',
  title: 'John Brown fdsfdsf',
  creationDate: 'March 20,2019 10:20 PM',
}, {
  key: '6',
  name: 'Jim Green',
  creationDate: 'March 20,2019 10:20 PM',
  expiresOn: '',

}]

class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: false,
    };
  }

  onFilterOpen = () => {
    if (!this.state.activeFilter) {
      this.setState({activeFilter: true})
    } else {
      this.setState({activeFilter: false})
    }

  }

  render() {
    const {activeFilter} = this.state
    return (
      <div className="animated fadeIn certification">
        <Row>
          {
            activeFilter ?
              <Col md="12" sm="12" xs="12" lg="3" className="border-right left-filter ">
                <p>Filters</p>
                <FormGroup>
                  <Label className="mt-2">Title</Label>
                  <Input type="text"/>
                  <Label className="mt-2">Task Group</Label>
                  <Input type="select">
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
                  <Label className="mt-2">Creation Date</Label>
                  <Input type="text"/>
                  <Label className="mt-2">Expiration Date</Label>
                  <Input type="text"/>
                </FormGroup>
                <div className="pull-right mb-3">
                  <Link to="/">Reset Filters</Link>
                  <Button color="primary" className="ml-2 remove-btn-border-radius remove-btn">Search</Button>
                </div>
              </Col> : null
          }
          <Col md="12" sm="12" xs="12" lg={activeFilter ? 9 : 12}>
            <div className="text-right mb-1">
              <Button type="button" color="primary" className="remove-btn remove-btn-border-radius blue "
                      onClick={this.onFilterOpen}>Search <i className="fa fa-filter blue"/></Button>
              <span className="btn ml-2 btn-dribbbl remove-btn-border-radius"><i className="fa fa-refresh"/></span>
            </div>
            <Table className="table-with-scroll" columns={columns} dataSource={data}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Certifications
