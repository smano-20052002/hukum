import axios from 'axios';
import { UPDATE_CONTENT_REQUEST,updateContentSuccess,updateContentFailure } from '../../action/Course/UpdateContentAction';



const API_URL = 'http://localhost:5199/lxp/course/material';

 const updateContentApi = ({ dispatch }) => (next) => async (action) => {
  

  if (action.type === UPDATE_CONTENT_REQUEST) {
    try {
      console.log("update api",action.payload)
      // Assuming 'action.payload' contains the data you want to senda
      const response = await axios.put(API_URL,action.payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('API Response:', response.data); // Log the response data
      dispatch(updateContentSuccess(response.data));
      
      
    } catch (error) {

      console.error('API Error:', error.message);
      dispatch(updateContentFailure(error.message));
      
    }
  }
  return next(action);
  
};

export default updateContentApi;
