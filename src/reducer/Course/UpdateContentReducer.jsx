import { 
   
    UPDATE_CONTENT_REQUEST,
    UPDATE_CONTENT_SUCCESS,
    UPDATE_CONTENT_FAILURE,
  } from '../../action/Course/UpdateContentAction'
  
  const initialState = {
    
    content: [],
    loading: false,
    error: null,
    
  };
  
  const updateContentReducer = (state = initialState, action) => {
    
    switch (action.type) {
       
      case UPDATE_CONTENT_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case UPDATE_CONTENT_SUCCESS:
        console.log("updatereducer",action.payload);
        return{
          ...state,
          content:action.payload,
         
          loading:false,
          error:null,
        };
      case UPDATE_CONTENT_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default updateContentReducer;