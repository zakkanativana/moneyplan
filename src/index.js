import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./Pages/Homepage";
import { Navbar, Footer } from "./Components";
import Blogpage from "./Pages/Blogpage";
import Kelaspage from "./Pages/Kelaspage";
import DetailsKelas1 from "./Pages/DetailsKelas1";
import Webinar from "./Pages/Webinar";
import DetailWebinar from "./Pages/DetailWebinar";
import Mentorpage from "./Pages/Mentorpage";
import About from "./Pages/About";
import DetailsBlog1 from "./Pages/DetailsBlog1";
import DetailsBlog2 from "./Pages/DetailsBlog2";
import DetailsBlog3 from "./Pages/DetailsBlog3";
import DetailWebinar2 from "./Pages/DetailWebinar2";
import DetailWebinar3 from "./Pages/DetailWebinar3";
import DetailWebinar4 from "./Pages/DetailWebinar4";
import WebinarBisnisKecantikan from "./Pages/WebinarBisnisKecantikan";
import WebinarGabiCandini from "./Pages/WebinarGabiCandini";
import WebinarUncleJo from "./Pages/WebinarUncleJo";
import DetailKonsultasi from "./Pages/DetailKonsultasi";
import WebinarBisnisHantaran from "./Pages/WebinarBisnisHantaran";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/kelas-online" element={<Kelaspage />} />
        <Route path="/detailkelas-online1" element={<DetailsKelas1 />} />
        <Route path="/WebinarGabiCandini" element={<WebinarGabiCandini />} />
        <Route path="/WebinarUncleJo" element={<WebinarUncleJo />} />
        <Route path="/detailwebinar-online" element={<DetailWebinar />} />
        <Route path="/detailwebinar2" element={<DetailWebinar2 />} />
        <Route path="/detailwebinar3" element={<DetailWebinar3 />} />
        <Route path="/detailwebinar4" element={<DetailWebinar4 />} />
        <Route path="/WebinarBisnisKecantikan" element={<WebinarBisnisKecantikan />} />
        <Route path="/ListWebinar" element={<Webinar />} />
        <Route path="/mentor" element={<Mentorpage />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/detail-blog1" element={<DetailsBlog1 />} />
        <Route path="/detail-blog2" element={<DetailsBlog2 />} />
        <Route path="/detailKonsultasi" element={<DetailKonsultasi />} />
        <Route path="/detail-blog3" element={<DetailsBlog3 />} />
        <Route path="/webinar-bisnishantaran01" element={<WebinarBisnisHantaran />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
