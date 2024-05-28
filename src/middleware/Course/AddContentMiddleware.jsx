import { CREATE_CONTENT_REQUEST, createContentSuccess, createContentFailure,createContentExists } from "../../action/Course/AddContentAction";
import axios from "axios";
const API_URL = 'http://localhost:5199/lxp/course/material';

const addContent = ({ dispatch }) => (next) => async (action) => {
    if (action.type === CREATE_CONTENT_REQUEST) {
        try {
            console.log("Content posting data : ", action.payload);
            const response =  await axios.post(API_URL, action.payload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(response.data.statusCode==412){
                dispatch(createContentExists());
              }
              else{
                dispatch(createContentSuccess(response.data));
                return next(action);
              }
           
           


            

        }
        catch (error) {
            console.error('API Error:', error.message)
            dispatch(createContentFailure(error.message))
        }
    }
    return next(action);
};

export default addContent;