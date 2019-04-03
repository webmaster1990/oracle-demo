import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Button, Card, CardBody, Col, DropdownToggle, Row} from "reactstrap";
import {Table} from "antd";

const dataSource = [{
  key: 'displayName',
  displayName: 'John Brown',
},
];

const columns = [{
  title: 'User Login',
  dataIndex: 'userLogin',
  key: 'userLogin',
  render: () => <div><img src={require('../../assets/avatars/6.jpg')} className="img-avatar" alt="admin@bootstrapmaster.com" />  <Link to="/searchUserProfile">NOEL</Link> </div> ,
}, {
  title: 'Display Name',
  dataIndex: 'displayName',
  key: 'displayName',
}];

class userList extends Component{
  render() {
    return(
      <div className="animated fadeIn">
        <Row>
          <Col lg="12" md="12" xs="12" sm="12">
            <Card className="card-border">
              <CardBody>
                <Table dataSource={dataSource} columns={columns} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )

  }
}
export default userList;
