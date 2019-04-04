import React,{Component} from 'react'
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import {Checkbox, Tabs} from 'antd';
import {Link} from "react-router-dom";

const TabPane = Tabs.TabPane;

class TargetAccount extends Component{

  callback = (key) => {
    console.log(key);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
           <Row>
             <Col md="12" sm="12" xs="12">
               <Tabs onChange={this.callback} type="card">
                 <TabPane tab="By User" key="1">
                  <Row>
                    <Col md="12" sm="12" xs="12">
                      <h5>Users</h5>
                    </Col>
                  </Row>
                   <Row>
                     <Col md="5"  sm="12" xs="12">
                       <Button type="button" color="primary" className=" remove-btn-border-radius blue mr-2">Collapse All</Button>
                       <Button type="button" color="primary" className=" remove-btn-border-radius blue ">Expand All</Button>
                     </Col>
                   </Row>
                   <Row className="mt-2">
                     <Col md="12"  sm="12" xs="12">
                     <p className="mb-0"><b>Name</b></p>
                     </Col>
                   </Row>
                   <hr className="hr"/>
                   <Row className="flex-align-item-center">
                     <Col md="6"  sm="12" xs="12">
                       <Link to={"/"}>SYSTEM ADMINISTRATOR</Link>
                     <p className="mb-0"><b>REQUEST</b></p>
                      <p className="mb-0">BBRM_Fileshare</p>
                     </Col>
                     <Col md="6"  sm="12" xs="12">
                      <p className="mb-0"><b>TARGET ACCOUNT</b></p>
                     </Col>
                   </Row>
                   <hr className="hr"/>
                   <Row>
                     <Col md="7"  sm="12" xs="12"></Col>
                     <Col md="5"  sm="12" xs="12">
                       <div className="pull-right">
                       <Button type="button" color="secondary" className=" remove-btn-border-radius mr-2">Continue Browsing</Button>
                       <Button type="button" color="primary" className=" remove-btn-border-radius blue ">Product To Checkout</Button>
                       </div>
                     </Col>
                   </Row>
                 </TabPane>
                 <TabPane tab="By Catalog" key="2">
                   <Row>
                     <Col md="12" sm="12" xs="12">
                       <h5>Catlog</h5>
                     </Col>
                   </Row>
                   <Row>
                     <Col md="5"  sm="12" xs="12">
                       <Button type="button" color="primary" className=" remove-btn-border-radius blue mr-2">Collapse All</Button>
                       <Button type="button" color="primary" className=" remove-btn-border-radius blue ">Expand All</Button>
                     </Col>
                   </Row>
                   <Row className="mt-2">
                     <Col md="12"  sm="12" xs="12">
                       <p className="mb-0"><b>Entitlement</b></p>
                     </Col>
                   </Row>
                   <hr className="hr"/>
                   <Row className="flex-align-item-center">
                     <Col md="6"  sm="12" xs="12">
                       <Link to={"/"}>BBRS_FILESHARE</Link>
                       <p className="mb-0"><b>TARGET USERS</b></p>
                       <p className="mb-0">System Administrator</p>
                     </Col>
                     <Col md="6"  sm="12" xs="12">
                       <p className="mb-0"><b>TARGET ACCOUNT</b></p>
                     </Col>
                   </Row>
                   <hr className="hr"/>
                   <Row>
                     <Col md="7"  sm="12" xs="12"></Col>
                     <Col md="5"  sm="12" xs="12">
                       <div className="pull-right">
                         <Button type="button" color="secondary" className=" remove-btn-border-radius mr-2">Continue Browsing</Button>
                         <Button type="button" color="primary" className=" remove-btn-border-radius blue ">Product To Checkout</Button>
                       </div>
                     </Col>
                   </Row>
                 </TabPane>
               </Tabs>
             </Col>
           </Row>
          </CardBody>
        </Card>
      </div>
    );
  }

}
export default TargetAccount
