import React, { useState, useEffect } from "react";
import "../../style/AddCourse.css";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Modal,
  
  Image,
  CloseButton,
  CardHeader,
} from "react-bootstrap";
import { useDispatch, connect, useSelector } from "react-redux";
import {
  createCoursesRequest,
  createCoursesSuccess,
} from "../../action/Course/AddCourseAction"; // Assuming this is your action creator
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../utils/AddCourseValidation";
import { createCategoryrequest } from "../../action/Course/AddCategoryAction";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Dialog,TextField,DialogContent,DialogTitle,DialogActions,Button,Alert, Stack } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import {  validateCategory } from "../../utils/AddCourseValidation";
const AddCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [coursecategory, setCategory] = useState([]);
  const [courselevel, setLevel] = useState([]);
  const [categoryErrors, setCategoryErrors] = useState({});
  const [category, setAddCategory] = useState({
    category: "",
    createdBy: "Asha",
  });
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    title: "",
    level: "",
    catagory: "",
    description: "",
    createdby: "Asha",
    duration: "",
    thumbnailimage: null,
  });
 //If course is created then navigate to course creation  page
 const isSubmit = useSelector((state) => state.course.isSubmitted);
 useEffect(() => {
   if (isSubmit) {
     navigate("/coursecontent"); // Navigate to the next page on success
   }
 }, [isSubmit, navigate]);
  //success message for adding category
  const addCategorySuccessState=useSelector((state)=>state.addCategory.isSuccess);
  const addCategoryFailureState=useSelector((state)=>state.addCategory.isFailure);
//   const categorySuccessMsg=useSelector((state)=>state.addCategory.message)
  const [successMsg,setSuccessMsg]=useState('')
  useEffect(()=>{
    if(addCategorySuccessState){
       handleClose();
       setSuccessMsg('Category added successfully');
       fetchData();
       const timer = setTimeout(() => {
        setSuccessMsg('');
      }, 7000);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(timer);
      
       
       
    }
  },[addCategorySuccessState])
  const[failurMsg,setFailureMsg]=useState('');
  useEffect(()=>{
    if(addCategoryFailureState){
       handleClose();
       setFailureMsg('Category already exists');
       
    }
  },[addCategoryFailureState])

  const[servererror,setserverrError]=useState('');
  const InternalError=useSelector((state)=>state.addCategory.isError);
  useEffect(()=>{
    if(InternalError){
        handleClose();
        setserverrError('Internal Server error occured');
      
    }
  },[InternalError])
  
  //If course is already exists
  const isExist=useSelector((state)=>state.course.isExists);
  const [existMsg,setExistMsg]=useState('');
  useEffect(()=>{
    if(isExist){
        setExistMsg('Course already exists');
        
    }
  },[isExist])
   
  //if internal message occurs for creating course
  const[failure,setFailure]=useState('');
  const isFailure=useSelector((state)=>state.course.isError);
  useEffect(()=>{
    if(isFailure){
        setFailure('Internal Server error occured');
       
    }
  },[isFailure])
   


  const fetchData = async () => {
    try {
      const categoryResponse = await axios.get(
        "http://localhost:5199/lxp/course/category"
      );
      setCategory(categoryResponse.data.data);
      const levelResponse = await axios.get(
        "http://localhost:5199/lxp/course/courselevel/ash"
      );
      setLevel(levelResponse.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  const handleClickOpen = async() => {
    setOpen(true);
 
  };
 
  const handleClose = () => {
    setOpen(false);
    setAddCategory('');
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isFormValid = validateForm(course, setErrors);

    if (isFormValid) {
      try {
        console.log("form", course);
        dispatch(createCoursesRequest(course));
      } catch (error) {
        console.error("Error creating course:", error);
      }
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
    //  setCourse({ ...course, [e.target.name]: e.target.value });
    if (name === "catagory" && value === "Add category") {
      // Show modal for adding a new category
      handleClickOpen();
    }
  };
  const handleInputCategory = (e) => {
    setAddCategory({ ...category, [e.target.name]: e.target.value });
  };
  // const handleCategory = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log("category add", category);
  //     dispatch(createCategoryrequest(category));

  //   } catch (error) {
  //     window.alert("Error occured in adding category", error);
  //   }
  // };
  const handleCategory = async (e) => {
    e.preventDefault();
    const isCategoryValid = validateCategory(category, setCategoryErrors);

    if (isCategoryValid) {
      try {
        console.log("category add", category);
        dispatch(createCategoryrequest(category));
      } catch (error) {
        window.alert("Error occurred in adding category", error);
      }
    }
  };

  const handleThumbnailChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCourse((prevCourse) => ({
        ...prevCourse,
        thumbnailimage: event.target.files[0],
      }));
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const removeThumbnail = () => {
   
    setSelectedImage(null);
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // Handle the files
    const file = acceptedFiles[0];
    // Create a URL for the file
    const fileUrl = URL.createObjectURL(file);
    setSelectedImage(fileUrl);
    handleThumbnailChange({ target: { files: [file] } });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  return (
    <>
      <Container fluid>
        <Row>
            <Col></Col>
            <Col>
            {!open && successMsg && (
        <Alert  severity="success" className="mt-3">
          {successMsg}
        </Alert>
      )}

{!open && failurMsg && (
        <Alert severity="error" className="mt-3">
          {failurMsg}
        </Alert>
      )}

{!open && servererror && (
        <Alert severity="error" className="mt-3">
          {servererror}
        </Alert>
      )}

{!open && failure && (
        <Alert severity="error" className="mt-3">
          {failure}
        </Alert>
      )}

{!open && existMsg && (
        <Alert severity="warning" className="mt-3">
          {existMsg}
        </Alert>
      )}
      
      </Col>
            <Col></Col>
        </Row>
     
        <Row>
          <Col md={4} xs={3}></Col>
          <Col md={4} xs={6}>
            <Card className="mt-5 custom-card">
              <Card.Header style={{backgroundColor:'#23275C',color:'white'}} className="Course-header">
                Create Course
              </Card.Header>
              <Card.Body className="scrollable-body">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Course Title</Form.Label>
                    <Form.Control
                    
                      type="text"
                      name="title"
                      placeholder="Course title"
                      value={course.title}
                      onChange={handleInputChange}
                    />
                    {errors.title && <p className="error">{errors.title}</p>}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Course Category</Form.Label>

                    <Form.Select name="catagory" onChange={handleInputChange}>
                      <option>Select Category</option>
                      {coursecategory.map((category) => (
                        <option
                          key={category.catagoryId}
                          value={category.catagoryId}
                        >
                          {category.category}
                        </option>
                      ))}
                      <option value="Add category" style={{color:"blue"}}>+ Add Category</option>
                    </Form.Select>
                    {errors.catagory && (
                      <p className="error">{errors.catagory}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Course Level</Form.Label>
                    <Form.Select name="level" onChange={handleInputChange}>
                      <option>Select Level</option>
                      {courselevel.map((level) => (
                        <option key={level.levelId} value={level.levelId}>
                          {level.level}
                        </option>
                      ))}
                    </Form.Select>
                    {errors.level && <p className="error">{errors.level}</p>}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Course Duration (in hrs)</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      placeholder="Enter no. of hours"
                      name="duration"
                      value={course.duration}
                      onChange={handleInputChange}
                    />
                    {errors.duration && (
                      <p className="error">{errors.duration}</p>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Course Description</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      rows={3}
                      placeholder="Enter your description"
                      name="description"
                      value={course.description}
                      onChange={handleInputChange}
                    />
                    {errors.description && (
                      <p className="error">{errors.description}</p>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Course Thumbnail</Form.Label>
                  
                    <Card {...getRootProps()} className="dropzone  img-card  ">
                      <Card.Body className="text-center">
                        <input {...getInputProps()} type="file"/>
                        {selectedImage ? (
                            
                          <Card>
                            {/* <Card.Header> */}
                              <CloseButton
                               className="position-absolute top-0 end-0"
                               style={{color:'red'}}
                                onClick={removeThumbnail}
                                aria-label="Remove image"
                              />
                            {/* </Card.Header> */}

                            <img
                              className="thumbnail-image"
                              src={selectedImage}
                              alt="Course thumbnail"
                            />
                          </Card>
                        ) : (
                          <p>
                            {isDragActive
                              ? "Drag the course thumbnai here ..."
                              : " click to select thumbnail image"}
                          </p>
                        )}
                      </Card.Body>
                    </Card>
                    {errors.thumbnailimage && (
                      <p className="error">{errors.thumbnailimage}</p>
                    )}
                  </Form.Group>

                  {/* {selectedImage && (
          <Row>
            <Col></Col>
            <Col xs={4} md={4}>
              <Image src={selectedImage} thumbnail />
            </Col>
            <Col></Col>
          </Row>
        )} */}
                  <Row className="mt-3">
                    <Col md={4} ></Col>
                    <Col md={8}>
                    <Button type="submit" value="CREATE COURSE" style={{backgroundColor:'#23275C',color:'white'}} className="align-items-center justify-content-center">
                      CREATE COURSE
                    </Button></Col>
                    <Col md={2}></Col>
                    
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={3}></Col>
        </Row>
      </Container>
      {/* <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleCategory,
          sx: {
            width: '100%', // Full width
            maxWidth: '500px', // Custom max-width
          }
        //   style: { maxWidth: 'none' } 
      }}
    
      >
        <DialogTitle className='dialog-clr'>Add Category</DialogTitle>
        <DialogContent className='dialog-content'>
 
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="category"
            label="Enter new category"
            type="longtext"
            value={category.category}
            onChange={handleInputCategory}
                         
            fullWidth
            
            variant="standard"
            // style={{margin:'10px'}}
          />
         
 
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
      </React.Fragment> */}

<React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: handleCategory,
            sx: {
              width: '100%', // Full width
              maxWidth: '500px', // Custom max-width
            }
          }}
        >
          <DialogTitle className='dialog-clr'>Add Category</DialogTitle>
          <DialogContent className='dialog-content'>
            <TextField
              autoFocus
            
              margin="dense"
              id="name"
              name="category"
              label="Enter new category"
              type="longtext"
              value={category.category}
              onChange={handleInputCategory}
              fullWidth
              variant="standard"
            />
            {categoryErrors.category && <p className="error">{categoryErrors.category}</p>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
   </>
  );
};

export default AddCourse;