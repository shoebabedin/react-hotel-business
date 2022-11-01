import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import TopNav from "../Navbar/TopNav";
import Preloader from "../Preloader/Preloader";
import ToTop from "../ToTop/ToTop";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main id="main" className={`${loading && 'overflow-hidden'}`}>
        {loading && <Preloader />}
        <TopNav />
        <NavBar />
        <Outlet />
        <ToTop />
        <Footer />
      
    </main>
  );
};

export default Layout;
