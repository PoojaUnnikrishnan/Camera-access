import React from "react";

// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AddNewPost from "./components/NewPost/AddNewPost";
// import FormikPostUploader from "./components/NewPost/FormikPostUploader";
// import CameraAccess from "./components/CameraAccess/CameraAccess";
import Camera from "./components/CameraAccess/Camera";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<AddNewPost />} /> */}
          {/* <Route exact path="/" element={<FormikPostUploader />} /> */}
          {/* <Route exact path="/" element={<CameraAccess />} /> */}
          <Route exact path="/" element={<Camera />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
