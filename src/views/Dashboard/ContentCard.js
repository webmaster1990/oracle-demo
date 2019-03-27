import React from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  CardHeader,
} from 'reactstrap';

const ContentCard = ({title, count, className}) => (
  <Col xs="12" sm="12" lg="4">
    <Card className={`content-card ${className}`}>
      <CardHeader>
        {title} <span className="pull-right count">{count}</span>
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm="12"><b>Beneficiaries: </b> System Administrator</Col>
          <Col sm="12"><b>Beneficiaries: </b> System Administrator</Col>
          <Col sm="12"><b>Beneficiaries: </b> System Administrator</Col>
          <Col sm="12"><b>Beneficiaries: </b> System Administrator</Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default ContentCard;
