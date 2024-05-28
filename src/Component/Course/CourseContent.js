import React, { useState, useEffect } from "react";
//import './Relevantz.png'
// import { FaBars, FaBookOpenReader, FaDeleteLeft } from "react-icons/fa6";
// import { FaSearch, FaUserGraduate, FaHome, FaChartBar } from "react-icons/fa";
// import Draggable from "react-draggable";
// import { FaPlus, FaBell, FaUser, FaChevronUp } from "react-icons/fa";
import {
  FaPlay,
  FaVideo,
  FaMusic,
  FaFilePdf,
  FaFilePowerpoint,
  FaFileAlt,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
// import { useMediaQuery } from "react-responsive";
// import Modal from "react-modal";
// import { connect } from "react-redux";
import '../../style/CourseContent.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoryRequest, fetchLevelRequest } from "../../action/Course/AddCourseAction";
import { fetchCourseTopic } from "../../action/Course/AddTopicAction";
import { Modal } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Row, Col, Container } from "react-bootstrap";
import { fetchCourseRequest } from "../../action/Course/FetchCouseDetailsAction";
import { LogoDev } from "@mui/icons-material";

// import CourseCreationForm from "./Content_Page";
const Content = () => {
  //const [content,setContent]=useState([]);
  const dispatch = useDispatch();
  const courseid = useSelector((state) => state.course.course_id);
  const course = useSelector((state) => state.fetchCourse.courses)
  console.log("Course", course);
  console.log("content", courseid);
  useEffect(() => {
   
    dispatch(fetchCourseRequest(courseid));

  }
    , [courseid]);




  //   const [showPopup, setShowPopup] = useState(false);


  //   const [showModal, setShowModal] = useState(false);



  //id=courseid;
  const navigate = useNavigate();
  const iscourse = useSelector((state) => state.fetchCourse.isNavigate)
  const handleAddTopic = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (iscourse) {
      navigate(`/addtopic/${courseid}`)
    }


  }


  // console.log("course_topic",courseDetail);
  //   useEffect(()=>{
  //       if(iscourse){

  //            navigate('/addtopic')
  //       }
  //   },[iscourse,navigate])


  // const handleViewClick = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  // const [isActive, setIsActive] = useState(true); // Initial state: active

  // const handleToggle = () => {
  //   setIsActive(!isActive); // Toggle the state
  // };
  const divStyle = {
    boxShadow: '0px 4px 8px #23275c', // Replace #yourShadowColor with your color
  };
  return (
    <>
      <Container style={divStyle}>
        <Row className="mt-1">
          <Col md={3} xs={3}></Col>
          <Col md={6} xs={6}>
            <Card sx={{ maxWidth: 800 }}>
              <CardActionArea>
                <CardMedia
                  style={{ objectFit: 'fill' }}
                  component="img"
                  height="300"
                  image={course.thumbnail}
                  alt="Course-Thumbnail"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="caption" display="block">
                    Category : {course.catagory}
                  </Typography>
                  <Typography variant="caption" display="block">
                    Level : {course.level}
                  </Typography>
                  <Typography variant="caption" display="block">
                    Duration : {course.duration} hrs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={handleAddTopic}>
                  Add Topic
                </Button>
              </CardActions>
            </Card>
          </Col>
          <Col md={3} xs={3}></Col>
        </Row>
      </Container>

    </>
    // <div className="dashboard">
    //   <div
    //     className="course-creation-page"
    //     style={{ display: "grid", width: "100%", height: "100vh" }}
    //   >
    //     <div
    //       className="container"
    //       style={{ width: "1054px", height: "640px" }}
    //     >
    //       {/* Rest of your code */}{" "}
    //       <div
    //         className="form-container"
    //         style={{ width: "1010px", height: "600px" }}
    //       >
    //         <div className="course-creation-form" style={{ width: "900px" }}>
    //           <div className="content" style={{ width: "1010px" }}>
    //             <main className="main-content" style={{ paddingRight: "80px" }}>
    //               <h1 style={{ paddingRight: "410px" }}>
    //                {course.title}
    //               </h1>
    //               <hr />
    //               <div className="course-details">
    //                 <div
    //                   className="course-header"
    //                   style={{ marginLeft: "760px" }}
    //                 >
    //                   <FaEdit
    //                     className="edit-icon"
    //                     style={{
    //                       fontSize: "20px",
    //                       color: "blue",
    //                       marginRight: "20px",
    //                     }}
    //                   />
    //                   <RiDeleteBin5Line
    //                     className="edit-icon"
    //                     style={{ fontSize: "20px", color: "red" }}
    //                   />
    //                 </div>
    //                 <div className="course-info">
    //                   <p style={{ paddingRight: "280px" }}>
    //                     Course Category{" "}
    //                     <span
    //                       className="info-value"
    //                       style={{ paddingLeft: "150px" }}
    //                     >
    //                       : {course.catagory}
    //                     </span>
    //                   </p>
    //                   <p style={{ paddingRight: "280px" }}>
    //                     Course Level{" "}
    //                     <span
    //                       className="info-value"
    //                       style={{ paddingLeft: "179px" }}
    //                     >
    //                       : {course.level}
    //                     </span>
    //                   </p>
    //                   <p style={{ paddingRight: "290px" }}>
    //                     Course Duration{" "}
    //                     <span
    //                       className="info-value"
    //                       style={{ paddingLeft: "160px" }}
    //                     >
    //                       : {course.duration} Hrs
    //                     </span>
    //                   </p>
    //                 </div>
    //                 <div className="course-description">
    //                   <p style={{ paddingRight: "290px" }}>
    //                     Course Description

    //                     <span style={{ paddingLeft: "139px" }}>
    //                       : {course.description}{" "}
    //                       {/* <span style={{ paddingLeft: "258px" }}>
    //                         hard or did not have time or money?{" "}
    //                       </span> */}
    //                     </span>
    //                     <button
    //                       className="btn"
    //                       style={{
    //                         width: "119px",
    //                         height: "33px",
    //                         color: "blue",
    //                         backgroundColor: "#D9D9D9",
    //                         marginLeft: "10px",
    //                         width: "121px",
    //                         height: "32px",
    //                         gap: "0px",
    //                         borderradius: "4px 0px 0px 0px",
    //                         opacity: " 1",
    //                       }}
    //                       onClick={() => setShowPopup(true)}
    //                     >
    //                       Show More
    //                     </button>
    //                     {showPopup && (
    //                       <div
    //                         style={{
    //                           position: "fixed",
    //                           top: "50%",
    //                           left: "50%",
    //                           transform: "translate(-50%, -50%)",
    //                           backgroundColor: "white",
    //                           padding: "20px",
    //                           zIndex: 1000,
    //                           width: "705px",
    //                         }}
    //                       >
    //                         <h1>Course Description</h1>
    //                         <hr />
    //                         <p>
    //                           {course.description}
    //                         </p>
    //                         <br />
    //                         <br />

    //                         <button
    //                           onClick={() => setShowPopup(false)}
    //                           style={{
    //                             backgroundColor: "red",
    //                             width: "121px",
    //                             height: "32px",
    //                             gap: "0px",
    //                             borderradius: "4px 0px 0px 0px",
    //                             opacity: " 1",
    //                             marginLeft: "530px",
    //                           }}
    //                         >
    //                           Close
    //                         </button>
    //                       </div>
    //                     )}
    //                     {showPopup && (
    //                       <div
    //                         style={{
    //                           position: "fixed",
    //                           top: 0,
    //                           bottom: 0,
    //                           left: 0,
    //                           right: 0,
    //                           backgroundColor: "rgba(0,0,0,0.3)",
    //                           zIndex: 999,
    //                         }}
    //                         onClick={() => setShowPopup(false)}
    //                       />
    //                     )}
    //                   </p>
    //                 </div>

    //                 <div
    //                   className="course-thumbnail"
    //                   style={{ paddingRight: "210px" }}
    //                 >
    //                   Course Thumbail
    //                   <button
    //                     className="btn"
    //                     onClick={handleViewClick}
    //                     style={{
    //                       marginLeft: "160px",
    //                       backgroundColor: "#D9D9D9",
    //                       color: "blue",
    //                       width: "121px",
    //                       height: "32px",
    //                       gap: "0px",
    //                       borderradius: "4px 0px 0px 0px",
    //                       opacity: " 1",
    //                     }}
    //                   >
    //                     View
    //                   </button>
    //                   {showModal && (
    //                     <Modal show={showModal} onHide={handleCloseModal}  centered>
    //                     <Modal.Header closeButton></Modal.Header>


    //                     <Modal.Body>
    //                     <img src={course.thumbnail} alt="Course Thumbnail"></img>
    //                         {/* <button
    //                           className="close-btn"
    //                           onClick={handleCloseModal}
    //                         >
    //                           X
    //                         </button> */}
    //                     </Modal.Body>

    //                   </Modal>
    //                     /* <div className="modal">
    //                       <div className="modal-content">
    //                         <img src={course.thumbnail} alt="Course Thumbnail"></img>
    //                         <button
    //                           className="close-btn"
    //                           onClick={handleCloseModal}
    //                         >
    //                           X
    //                         </button>
    //                       </div>
    //                     </div> */
    //                   )}
    //                 </div>
    //                 <br />
    //                 <br />
    //                 <div className="course-actions">
    //                   {/* <a
    //                     href="/addtopic"
    //                     style={{ textDecoration: "none", color: "white" }}
    //                   > */}
    //                     <button
    //                       className={`content-btn ${
    //                         isActive ? "active" : "inactive"
    //                       }`}
    //                       style={{
    //                         backgroundColor: "blue",
    //                         marginLeft: "585px",
    //                       }}
    //                     onClick={handleAddTopic}
    //                     >
    //                       Content
    //                     </button>
    //                   {/* </a> */}
    //                   <button
    //                     className={`inactive-btn ${
    //                       isActive ? "inactive" : "active"
    //                     }`}
    //                     onClick={handleToggle}
    //                     style={{ width: "123px" }}
    //                   >
    //                     {isActive ? "Make Inactive" : "Make Active"}
    //                   </button>
    //                 </div>
    //               </div>
    //             </main>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
};
export default Content;
