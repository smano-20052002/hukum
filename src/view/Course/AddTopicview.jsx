import React from 'react'
import { Sidenavbar } from '../../Component/SideNavbar';
import { Header } from '../../Component/Header';
import Content from '../../Component/Course/CourseContent';
import { Row,Col } from 'react-bootstrap';
import AddTopic from '../../Component/Course/AddTopic_existed';

export const AddTopicview = () => {
  return (
    <>
    <Row>
      <Col md={12}><Header/></Col>
      <Col md={12}><Sidenavbar/>
      <AddTopic/>
      
      </Col>
    </Row>
    </>
  )
}