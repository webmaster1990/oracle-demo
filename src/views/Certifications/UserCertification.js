import React, {Component} from 'react'
import {
  Col,
  Row,
  Card, Button, CardBody,
} from "reactstrap";
import './certifications.scss'
import {Table, Progress, Icon,} from 'antd';

function NestedTable() {
  const expandedRowRender = () => {
    const nestedColumns = [
      {
        title: 'Account Name',
        dataIndex: 'accountName',
      }, {
        title: 'Application Name',
        dataIndex: 'applicationName',
      }, {
        title: 'Display Name',
        dataIndex: 'displayName',
      }, {
        title: 'Entitlement Name',
        dataIndex: 'entitlementName',
      }, {
        title: 'Risk',
        dataIndex: 'risk',
      }, {
        title: 'Last Action',
        dataIndex: 'lastAction',
        render: () => <div><Icon type="clock-circle" theme="twoTone"/> Certified</div>,
      }, {
        title: 'Comments',
        dataIndex: 'comments',
      }, , {
        title: 'Action',
        dataIndex: 'action',
        render: () => <div>
          <Button type="button" color="success" className=" remove-btn-border-radius small-height-btn mr-2">Certify</Button>
          <Button type="button" color="success" className=" remove-btn-border-radius small-height-btn bg-white mr-2"
                  style={{color: "#4dbd74"}}>Certify Conditionally</Button>
          <Button type="button" color="danger" className=" remove-btn-border-radius small-height-btn mr-2">Revoke</Button>
        </div>,
      },]
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    const nestedData = [
      {
      key: '1',
      accountName: 'John Brown',
      applicationName: "ADUser1",
      displayName: 'New York No. 1 Lake Park',
      entitlementName: 'New York No. 1 Lake Park',
      risk: '',
      comments: '',
    }, {
      key: '2',
      accountName: 'Jim Green',
      applicationName: "ADUser1",
      displayName: 'London No. 1 Lake Park',
      entitlementName: 'London No. 1 Lake Park',
      risk: '',
      comments: '',
    }, {
      key: '3',
      accountName: 'Joe Black',
      applicationName: "ADUser1",
      displayName: 'Sidney No. 1 Lake Park',
      entitlementName: 'Sidney No. 1 Lake Park',
      risk: '',
      comments: '',
    }, {
      key: '4',
      accountName: 'Disabled User',
      applicationName: "ADUser1",
      displayName: 'Sidney No. 1 Lake Park',
      entitlementName: 'Sidney No. 1 Lake Park',
      risk: '',
      comments: '',
    }];
    return (
      <Table
        columns={nestedColumns}
        dataSource={nestedData}
        pagination={false}
        rowSelection={rowSelection}
        size="middle"
        scroll={{ x: '130%' }}

      />
    );
  };
  const columns = [
    {
      title: 'USER LOGIN',
      dataIndex: 'userLogin',
      key: 'userLogin',
      render: text => <a href="/javascript">{text}</a>,
    }, {
      title: 'PROGRESS',
      dataIndex: 'progress',
      key: 'progress',
      render: () => <Progress percent={30} size="small"/>
    }, {
      title: 'ACCOUNT',
      dataIndex: 'account',
      key: 'account'
    },
    {
      title: 'ENTITLEMENT',
      dataIndex: 'entitlement',
      key: 'entitlement'
    }, {
      title: 'ROLE',
      dataIndex: 'role',
      key: 'role'
    }, {
      title: 'FIRST',
      dataIndex: 'first',
      key: 'first'
    },
  ];
  const data = [
    {
      key: 1,
      userLogin: 'John Brown',
      account: 32,
      entitlement: '',
      role: '',
      first: '',
    },
    {
      key: 2,
      userLogin: 'Jim Green',
      account: 42,
      entitlement: '',
      role: '',
      first: '',
    },
    {
      key: 3,
      userLogin: 'Joe Black',
      account: 32,
      entitlement: '',
      role: '',
      first: '',
    },
  ];
  return (
    <Table
      className="components-table-demo-nested "
      columns={columns}
      expandedRowRender={expandedRowRender}
      dataSource={data}
    />
  );
}

class UserCertification extends Component {
  render() {
    return (
      <div className="animated fadeIn certification">
        <Row>
          <Col md="12" sm="12" xs="12">
            <h4><b>User_Certificate [Pankaj Tripathi] (Certification Type:User)</b></h4>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12" sm="12">
            <Card className="card-border">
              <CardBody>
                <Row>
                  <Col md="10" xs="12" sm="12">
                    <p className="mb-0">0/11 Decision Remaining before you can Sign off </p>
                  </Col>
                  <Col md="2" xs="12" sm="12" className="pull-right">
                    <Button type="button" color="primary" className=" remove-btn-border-radius small-height-btn blue ">Sign
                      off </Button>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" md="12" xs="12" sm="12">
                    <p className="mb-0"><b>Progress</b></p>
                    <Progress percent={90} size="large"/>
                  </Col>
                </Row>
                <Row>
                  <Col md="8" xs="12" sm="12">
                    <Button type="button" color="success" className=" remove-btn-border-radius mr-2">Certify</Button>
                    <Button type="button" color="danger" className=" remove-btn-border-radius  mr-2  ">Revoke </Button>
                    <span className="mr-2">Delegate</span>
                    <span className="mr-2">Undelegate</span>
                    <span className="mr-2">Reassign</span>
                  </Col>
                  <Col md="4" xs="12" sm="12">
                    <div className="pull-right">
                      <Button type="button" color="primary" className=" remove-btn-border-radius mr-2 blue ">Expand
                        All</Button>
                      <Button type="button" color="primary" className=" remove-btn-border-radius mr-2 blue ">Collapse
                        All </Button>
                      <Button type="button" color="primary" className=" remove-btn-border-radius  blue ">Back</Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" xs="12" sm="12">
                    <NestedTable/>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UserCertification
