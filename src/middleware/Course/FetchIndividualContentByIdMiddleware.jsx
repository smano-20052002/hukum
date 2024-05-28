import axios from "axios";
import { FETCH_INDIVIDUAL_CONTENT_REQUEST,fetchIndividualContentSuccess,fetchIndividualContentFailure } from "../../action/Course/FetchIndividualContentByIdAction";

 
const fetchIndividualContentApi = ({ dispatch }) => (next) => async (action) => {
  if (action.type === FETCH_INDIVIDUAL_CONTENT_REQUEST ) {
    try {
      console.log("INDIVIDUALCONTENT",action.payload);
      const response = await axios.get(`http://localhost:5199/lxp/course/material/${action.payload}`)
      console.log(`http://localhost:5199/lxp/course/topic/${action.payload}`)
      console.log('Fetch  Response:', response.data); // Log the response data
      
        dispatch(fetchIndividualContentSuccess(response.data.data));
        console.log("FetchMiddleware",response.data.data)
      
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchIndividualContentFailure(error.message));
    }
  }
  return next(action)
};
export default fetchIndividualContentApi;