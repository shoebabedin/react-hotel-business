import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import TopNav from '../Navbar/TopNav';
import Preloader from '../Preloader/Preloader';
import ToTop from "../ToTop/ToTop";

const Layout = () => {
    const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  
    return (
        <main id="main">
            {loading && <Preloader />}
            <TopNav />
              <NavBar/>
           
            <Outlet />
            <ToTop/>
            <Footer/>
        </main>
    );
};

export default Layout;