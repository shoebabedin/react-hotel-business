
import React from "react";
import { Link } from "react-router-dom";
import BannerTab from "./BannerTab";

const Banner = (props) => {

  const event = window.location.pathname === "/events";

  const {img, desc, title, btn, bg, children, classs} = props;
  
  
  return (
    <section style={{backgroundImage: `url(${bg})`}} className={`${event && classs} banner bg-cover bg-center bg-no-repeat py-5`} >
      <div className="container mx-auto px-2 pb-2">
        <div className="pb-4 text-center lg:text-left">
          <div className="slider_item mx-auto text-center">
          {!event && <img
            className="w-14 lg:w-40 h-14 lg:h-40 rounded-full mx-auto mt-20"
            src={img}
            alt=""
          />}
            <h2 className="text-white text-3xl lg:text-5xl font-extrabold capitalize mb-5 mt-5 lobster">
              {title}<span className="text-red-600">.</span>
            </h2>
           {
            desc &&  <p className="text-white text-sm font-light lg:text-3xl">
            {desc}
          </p>
           }
            {
              btn && <Link
              className="text-white text-sm leading-[15px] lg:leading-[19px] font-normal capitalize mt-8 inline-block border-solid border-2 py-4 px-10 border-white rounded lg:text-base"
              to="room"
            >
              View Rooms
            </Link>
            }
          </div>
        </div>
       {!event && <BannerTab children={children}/>
      }
      </div>
    </section>
  );
};

export default Banner;
