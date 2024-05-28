import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Corrected import
import courseReducer from '../../reducer/Course/AddCourseReducer';
import addCourse from '../../middleware/Course/AddCourse';
import fetchcategoryApi from '../../middleware/Course/FetchCategoryMiddleware';
import fetchlevelApi from '../../middleware/Course/FetchLevelMiddleware';
import fetchCategoryReducer from '../../reducer/Course/FetchCategoryReducer';
import fetchLevelReducer from '../../reducer/Course/FetchLevelReducer';
import categoryReducer from '../../reducer/Course/AddCategoryReducer';
import addCategory from '../../middleware/Course/AddCategoryMiddleware';
import fetchCourseReducer from '../../reducer/Course/FetchCourseDetailReducer';
import fetchcourseApi from '../../middleware/Course/FetchCourseDetailMiddleware';
import addTopicReducer from '../../reducer/Course/AddTopicReducer';
import addTopic from '../../middleware/Course/AddTopicMiddleware';
// import storage from 'redux-persist/lib/storage';
//import { persistReducer,persistStore } from 'redux-persist';

import fetchTopicsReducer from '../../reducer/Course/FetchTopicReducer';
import fetchTopicsApi from '../../middleware/Course/FetchTopicMiddleware';
import fetchEditTopicsApi from '../../middleware/Course/FetchEditTopicMiddleware';
import fetchEditTopicsReducer from '../../reducer/Course/FetchEditTopicsReducer';
import updateTopicReducer from '../../reducer/Course/UpdateTopicsReducer'
import updateTopicsApi from '../../middleware/Course/UpdateTopicsMiddleware';
import deleteTopicReducer from '../../reducer/Course/DeleteTopicsReducer';
import deleteTopic from '../../middleware/Course/DeleteTopicMiddleware';
import addContent from '../../middleware/Course/AddContentMiddleware';
import AddMaterialReducer from '../../reducer/Course/AddContentReducer';
import fetchMaterialTypeReducer from '../../reducer/Course/FetchMaterialTypeReducer';
import fetchMaterialTypeApi from '../../middleware/Course/FetchMaterialTypeMiddleware';
import fetchContentApi from '../../middleware/Course/FetchContentMiddleware';
import fetchContentReducer from '../../reducer/Course/FetchContentReducer';
import deleteContentReducer from '../../reducer/Course/DeleteContentReducer';
import deleteContentApi from '../../middleware/Course/DeleteContentMiddleware';
import fetchIndividualContentReducer from '../../reducer/Course/FetchIndividualContentByIdReducer';
import fetchIndividualContentApi from '../../middleware/Course/FetchIndividualContentByIdMiddleware';
import updateContentReducer from '../../reducer/Course/UpdateContentReducer';
import updateContentApi from '../../middleware/Course/UpdateContentMiddleware';
import fetchContentUrlReducer from '../../reducer/Course/FetchContentUrlReducer';
import fetchContentUrlApi from '../../middleware/Course/FetchContentUrlMiddleware';
// const persistConfig={
//   key:'root',
//   storage,
//   // blacklist:['fetchTopic']
// };

const rootReducer = combineReducers({
  course: courseReducer, // The key you've used for your course reducer
  level:fetchLevelReducer,
  category:fetchCategoryReducer,
  addCategory:categoryReducer,
  fetchCourse:fetchCourseReducer,
  Topic:addTopicReducer,
  fetchTopic:fetchTopicsReducer,
  fetchEditTopic:fetchEditTopicsReducer,
  updateTopic:updateTopicReducer,
   deleteTopic:deleteTopicReducer,
   deleteContent:deleteContentReducer,
   addContent: AddMaterialReducer,
  fetchMaterialType:fetchMaterialTypeReducer,
  fetchContent:fetchContentReducer,
  fetchIndividualContent: fetchIndividualContentReducer,
  updateContent:updateContentReducer,
  fetchContentUrl:fetchContentUrlReducer,
 
});
//const persistedReducer= persistReducer(persistConfig,rootReducer);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, addCourse,addCategory,fetchcategoryApi,fetchlevelApi,fetchcourseApi,addTopic,fetchTopicsApi,fetchEditTopicsApi,updateTopicsApi,deleteTopic,addContent,fetchMaterialTypeApi,fetchContentApi,deleteContentApi,fetchIndividualContentApi,updateContentApi,fetchContentUrlApi) // Corrected middleware application
);

export default store;