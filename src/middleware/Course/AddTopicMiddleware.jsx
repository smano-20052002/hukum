import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {CREATE_TOPICS_REQUEST,createTopicsSuccess,createTopicsFailure, createTopicsExists} from '../../action/Course/AddTopicAction'



const API_URL = 'http://localhost:5199/lxp/course/topic';

 const addTopic = ({ dispatch }) => (next) =>async (action) => {
  // console.log("topicMiddleware",action.payload);

  if (action.type === CREATE_TOPICS_REQUEST) {
    try {
      // console.log("post",action.payload)
      // Assuming 'action.payload' contains the data you want to senda
      const response = await axios.post(API_URL,action.payload);
      console.log('API Response1:', response.data); // Log the response data
      if(response.data.statusCode==412){
        dispatch(createTopicsExists());
      }
      else{
        dispatch(createTopicsSuccess(response.data.data)); // Dispatch success action with the response data
        console.log("successfullresponse",response.data.data)
      }
     
       
    } 
    catch (error) {
      console.error('API Error:', error.message);
      dispatch(createTopicsFailure(error.message));
    }
 }
  return next(action);
  
};

export default addTopic;

