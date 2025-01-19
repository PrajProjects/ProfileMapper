import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDetails from './pages/ProfileDetails';
import Home from "./pages/Home";
import Admin from "../src/components/AdminPanel";
import Login from "./pages/Login";
import Update from "./components/UpdateForm";
import Add from "./components/Add";
import { ProfileProvider } from './contexts/ProfileContext';  

function App() {
  return (
    <ProfileProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/adminpanel" element={<Admin />} /> 
          <Route path="/update/:id" element={<Update />} /> 
          <Route path="/profile/:id" element={<ProfileDetails />} /> 
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </ProfileProvider>
  );
}

export default App;
