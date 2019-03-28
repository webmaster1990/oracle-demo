import React from 'react';
import {
  Card,
  CardBody,
  Col,
  CardHeader,
} from 'reactstrap';
import './dashboard.scss'
const ContentCard = ({title, count, className, children}) => (
  <Col xs="12" sm="12" lg="4">
    <Card className={`content-card ${className}`}>
      <CardHeader>
        {title} <span className="pull-right count">{count}</span>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  </Col>
);

export default ContentCard;
