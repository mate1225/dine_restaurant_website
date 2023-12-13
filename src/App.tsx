import "./App.css";
//react router
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
//tsx
import Home from "./pages/Home";
import Booking from "./pages/Booking";

function App() {
  return (
    <>
      <BrowserRouter basename="/dine_restaurant_website">
        <div className=" flex gap-5">
          <Link
            to={"/dine_restaurant_website"}
            className="rounded-lg bg-red-500 p-3"
          >
            Home
          </Link>
          <Link
            to={"/dine_restaurant_website/Booking"}
            className="rounded-lg bg-red-500 p-3"
          >
            Booking
          </Link>
        </div>

        <Routes>
          <Route path="/dine_restaurant_website" element={<Home />} />
          <Route
            path="/dine_restaurant_website/Booking"
            element={<Booking />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
