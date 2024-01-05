import "./App.css";
//react router
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
//tsx
import Home from "./assets/pages/Home";
import Booking from "./assets/pages/Booking";
import SocialEvents from "./assets/pages/SocialEvents";
import SpecialEvents from "./assets/pages/SpecialEvents";

function App() {
  return (
    <>
      <BrowserRouter basename="/dine_restaurant_website">
        <div className=" flex gap-5">
          <Link to={"/"} className="rounded-lg bg-red-500 p-3">
            Home
          </Link>
          <Link to={"/Booking"} className="rounded-lg bg-red-500 p-3">
            BOOK A TABLE
          </Link>
          <Link to={"/SpecialEvents"} className="rounded-lg bg-red-500 p-3">
            SpecialEvents
          </Link>
          <Link to={"/SocialEvents"} className="rounded-lg bg-red-500 p-3">
            SocialEvents
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/SpecialEvents" element={<SpecialEvents />} />
          <Route path="/SocialEvents" element={<SocialEvents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
