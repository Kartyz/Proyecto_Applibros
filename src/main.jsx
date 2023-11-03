import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import FAQ from "./routes/faq/faq";
import Contact from "./routes/contact/contact";
import Register from './routes/register/register';
import Profile from './routes/profile/profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from './App';
import { UserProvider } from "./routes/login/UserContext";

const root = document.getElementById("root");

const rootInstance = createRoot(root);

rootInstance.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes>
          <Route path ="/" >
          <Route index element={<App />} />      
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} /> 
          <Route path="register" element={<Register />} />  
          <Route path="profile" element={<Profile />} />

          </Route>
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>,
  
);



