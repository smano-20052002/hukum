import { 
   
    FETCH_CONTENT_URL_REQUEST,
    FETCH_CONTENT_URL_SUCCESS,
    FETCH_CONTENT_URL_FAILURE,
  } from '../../action/Course/FetchContentUrlAction';
  
  const initialState = {
    
    content: [],
    loading: false,
    error: null,
    
  };
  
  const fetchContentUrlReducer = (state = initialState, action) => {
    switch (action.type) {
       
      case FETCH_CONTENT_URL_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case FETCH_CONTENT_URL_SUCCESS:
        
        // console.log("contentreducer1",action.payload);  

        return{
          ...state,
          content:action.payload,
          loading:false,
        };
      case FETCH_CONTENT_URL_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default fetchContentUrlReducer;
  