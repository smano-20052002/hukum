export const UPDATE_TOPICS_REQUEST = 'UPDATE_TOPICS_REQUEST';
export const UPDATE_TOPICS_SUCCESS = 'UPDATE_TOPICS_SUCCESS';
export const UPDATE_TOPICS_FAILURE = 'UPDATE_TOPICS_FAILURE';
  
  
  
  
export const updateTopicsRequest = (formData) => ({
    type: UPDATE_TOPICS_REQUEST,
   payload: formData,

  });
   
  export const updateTopicsSuccess = (topicId) => ({
    type: UPDATE_TOPICS_SUCCESS,
    payload: topicId,
    
  });
   
  export const updateTopicsFailure = (error) => ({
    type: UPDATE_TOPICS_FAILURE,
    payload: error,
  });