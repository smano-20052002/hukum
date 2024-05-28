import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddCourseView } from "../view/Course/AddCourseView";
import { CourseContent } from "../view/Course/CourseContentView";
import Topics from "../view/Course/Topics";
import SavedTopics from "../Component/Course/SavedTopics";
import AddMaterial from "../view/Course/AddMaterial";
function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/addcourse" element={<AddCourseView/>} />
        <Route path="/coursecontent" element={<CourseContent/>} />
        <Route path="/addtopic/:id" element={<Topics/>} />
        <Route path="/savedtopics/:id" element={<SavedTopics/>} />
        <Route path='/addcontent/:id' element={<AddMaterial/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
