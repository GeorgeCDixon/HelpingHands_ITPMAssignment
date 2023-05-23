//import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import CreateJobs from './components/CreateJobs';
import UpdateJobs from './components/UpdateJobs';
import ManageJobs from './components/ManageJobs';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import ManageCourse from './components/ManageCourse';
import Nav from './components/Navbar';
import ViewJobs from './components/ViewJobs';
import ViewCourse from './components/ViewCourse';

function App() {
  return (
    <>
    <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />       
          <Route path="/add" element={<CreateJobs />} />
          <Route path="/addCourse" element={<CreateCourse />} />
          <Route path="/edit/:id" element={<UpdateJobs />} />
          <Route path="/edits/:id" element={<UpdateCourse />} />
          <Route path="/jobs" element={<ManageJobs />} />
          <Route path="/manageCourse" element={<ManageCourse />} />
          <Route path="/view" element={<ViewJobs />} />
          <Route path="/viewcourse" element={<ViewCourse />} />
        </Routes>
      </Router>
  
    </>
  );
}

export default App;