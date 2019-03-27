import React from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
} from 'reactstrap';
import { Progress } from 'antd';

const ProgressCard = ({name, value}) => (
  <Col xs="12" sm="12" lg="4">
    <Card className="progress-card">
      <CardBody>
        <Row>
          <Col className="title">
            <span className="name">{name}</span>
            <span className="count">{value}</span>
          </Col>
          <Col className="text-right">
            <Progress type="circle" percent={value} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default ProgressCard;
