import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Page from "./templates/Page.js";
import CoursePage from "./pages/Course";
import HalfPage from './pages/Half';
import ProfilePage from './pages/Profile';
import CourPage from './pages/Cour';
import UTPPage from './pages/UTP';
import RPPage from './pages/RP';
import ProvPage from './pages/Prov';
import HearPage from './pages/Hear';
import UserPage from './pages/User';
import KafPage from './pages/Kaf';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/course" element={<CoursePage />} />
          <Route path="/half" element={<HalfPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
         
          <Route path="/cour" element={<CourPage/>}/>
          <Route path="/utp" element={<UTPPage/>}/>
          <Route path="/rp" element={<RPPage/>}/>
          <Route path="/prov" element={<ProvPage/>}/>
          <Route path="/hear" element={<HearPage/>}/>
          <Route path="/user" element={<UserPage/>}/>
          <Route path="/kaf" element={<KafPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);