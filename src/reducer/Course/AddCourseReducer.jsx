import { 
  CREATE_COURSES_REQUEST,
  CREATE_COURSES_SUCCESS,
  CREATE_COURSES_FAILURE,
  CREATE_CONTENT,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  CREATE_COURSES_EXISTS,
} from '../../action/Course/AddCourseAction';

const initialState = {
  
  course_id:null,
  loading: false,
  error: null,
  isSubmitted:false,
  isError:false,
  isExists:false,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
     case CREATE_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COURSES_SUCCESS:
      console.log('Course posted:', action.payload);
      
      // Add the new course to the existing courses array
      return {
        ...state,
        loading: false,
        course_id: action.payload,
        isSubmitted:true,
        isError:false,
        isExists:false,
        error: null,
      };
     
    case CREATE_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSubmitted:false,
        isExists:false,
        isError:true,
      };

      case CREATE_COURSES_EXISTS:
        return {
          ...state,
          loading: false,
          isExists:true,
          isSubmitted:false,
          isError:false,
         
          

        };
    
    default:
      return state;
  }
};

export default courseReducer;
