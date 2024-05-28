export const UPDATE_TOPIC_REQUEST = 'UPDATE_TOPIC_REQUEST';
export const UPDATE_TOPIC_SUCCESS = 'UPDATE_TOPIC_SUCCESS';
export const UPDATE_TOPIC_FAILURE = 'UPDATE_TOPIC_FAILURE';
 
export const updateTopicrequest = (topic) => ({
  type:UPDATE_TOPIC_REQUEST ,
  payload:topic,
  
});
export const updateTopicsuccess = (response) => ({
  type:UPDATE_TOPIC_SUCCESS ,
  payload:response,
  
});
export const updateTopicfailure = (error) => ({
  type:UPDATE_TOPIC_FAILURE ,
  payload:error,
  
});