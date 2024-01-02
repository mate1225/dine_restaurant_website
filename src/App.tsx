import "./App.css";
//react router
import { BrowserRouter, Route, Routes } from "react-router-dom";
//tsx
import Home from "./assets/pages/Home";
import Booking from "./assets/pages/Booking";

function App() {
  return (
    <>
      <BrowserRouter basename="/dine_restaurant_website">
        {/*  <div className=" flex gap-5">
          <Link to={"/"} className="rounded-lg bg-red-500 p-3">
            Home
          </Link>
          <Link to={"/Booking"} className="rounded-lg bg-red-500 p-3">
            BOOK A TABLE
          </Link>
        </div> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
