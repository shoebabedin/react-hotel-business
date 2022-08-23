import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bar from "./Components/Bar/Bar";
import Layout from "./Components/Common/Layout/Layout";
import NoMatch from "./Components/Common/NoMatch/NoMatch";
import Contact from "./Components/Contact/Contact";
import Events from "./Components/Events/Events";
import Fitness from "./Components/Fitness/Fitness";
import FoodCorner from "./Components/FoodCorner/FoodCorner";
import Home from "./Components/Home/Home";
import Pool from "./Components/Pool/Pool";
import Room from "./Components/Room/Room";
import RoomDetails from "./Components/RoomDetails/RoomDetails";

function App() {
  const [page, setPage] = useState("");

  console.log(page);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    // setPage()
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="room" element={<Room />} />
          <Route path="events" element={<Events />} />
          <Route path="food-corner" element={<FoodCorner />} />
          <Route path="fitness" element={<Fitness />} />
          <Route path="pool" element={<Pool />} />
          <Route path="bar" element={<Bar />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/roomDetails/:id" element={<RoomDetails />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
