import { 
   
    FETCH_INDIVIDUAL_CONTENT_REQUEST,
    FETCH_INDIVIDUAL_CONTENT_SUCCESS,
    FETCH_INDIVIDUAL_CONTENT_FAILURE,
  } from '../../action/Course/FetchIndividualContentByIdAction'
  
  const initialState = {
    
    content: [],
    loading: false,
    error: null,
    
  };
  
  const fetchIndividualContentReducer = (state = initialState, action) => {
    
    switch (action.type) {
       
      case FETCH_INDIVIDUAL_CONTENT_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case FETCH_INDIVIDUAL_CONTENT_SUCCESS:
        console.log("Contentreducer",action.payload);
        return{
          ...state,
          content:action.payload,
         
          loading:false,
          error:null,
        };
      case FETCH_INDIVIDUAL_CONTENT_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default fetchIndividualContentReducer;