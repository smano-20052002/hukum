import React from 'react';
import { Sidenavbar } from '../../Component/SideNavbar';
import { Header } from '../../Component/Header';
import { Row,Col } from 'react-bootstrap';
// import Topic from '../../Component/Course/AddTopic';

import {Container} from 'react-bootstrap';
import SavedTopics from '../../Component/Course/SavedTopics';
import AddTopic from '../../Component/Course/AddTopic';

function Topics() {
  return (
    <>
    <Container fluid>
    <Row>
      <Col md={12}><Header/></Col>
      {/* <Col md={12} ><Sidenavbar/> */}
      {/* </Col> */}
    </Row>

    <Row>
    <Col xs={4} md={2}>
    <Sidenavbar/>
    </Col>
    <Col xs={8} md={6} className='mt-5'>
    <AddTopic/>
    <SavedTopics/>
  

    </Col>

    </Row>

    </Container>
    </>
  )
}

export default Topics;
