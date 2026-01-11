import React, { useEffect } from "react";
import Home from "./website/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Website/Pages/About";
import Room from "./website/pages/Room";
import Not from "./Website/Pages/Not";
import Restaurant from "./website/pages/Restaurant";
import Offers from "./Website/Pages/Offers";
import Contact from "./website/pages/Contact";
import Booking from "./Website/Pages/Book";
import Location from "./website/pages/Location";
import Amenities from "./Website/Pages/Amenities";
import Dashboard from "./Admin/Apages/Dashboard";
import Gallery from "./Website/Pages/Gallery";
import Privacy from "./Website/Pages/Privacy";
import Events from "./Website/Pages/Events";
import Roomdetails from "./Website/Pages/Roomdetails";
import Starterpage from "./Website/Pages/Starterpage";
import Terms from "./Website/Pages/Terms";


function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/room" element={<Room />}></Route>
          <Route path="/*" element={<Not/>}></Route>
          <Route path="/rest" element={<Restaurant />}></Route>
          <Route path="/offer" element={<Offers/>}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/amenities" element={<Amenities />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Privacy" element={<Privacy />}></Route>
          <Route path="/Events" element={<Events />}></Route>
          <Route path="/Roomdetails" element={<Roomdetails />}></Route>
          <Route path="/Starterpage" element={<Starterpage/>}></Route>
          <Route path="/Terms" element={<Terms/>}></Route>
          

          {/* admin */}
          <Route path="/dash" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;