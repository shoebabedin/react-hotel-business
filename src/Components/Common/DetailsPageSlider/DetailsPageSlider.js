import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="next absolute top-1/2 right-0 z-10">
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="64"
        height="64"
        rx="32"
        fill="white"
        stroke="black"
        stroke-opacity="0.1"
      />
      <path
        d="M30 25.5L37.5 33L30 40.5"
        stroke="#0F0E0E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <button onClick={onClick} className="prev absolute top-1/2 left-0 z-10">
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="64"
        height="64"
        rx="32"
        transform="matrix(-1 0 0 1 65 1)"
        fill="white"
        stroke="black"
        stroke-opacity="0.1"
      />
      <path
        d="M36 25.5L28.5 33L36 40.5"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  );
}

const DetailsPageSlider = (props) => {
  const {slider} = props;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();



  

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-10 relative">
        <div className="hotel_details_slider">
          <Slider
            className="mainSlider"
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            nextArrow= {<SampleNextArrow />}
            prevArrow= {<SamplePrevArrow />}
            autoplay= {true}
            speed= {2000}
          >
            {slider.map((item) => (
              <div className="hotel_slider_item w-full">
              <img className="w-full object-cover" src={item.img} alt="" />
            </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-2">
        
        <div className="hotel_item">
            <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical= {true} 
            verticalSwiping= {true}
            arrows={false}
            responsive={
              [
                {
                  breakpoint: 769,
                  settings: {
                    vertical: false, 
                  }
                }, 
              ]
            }
            >
                {slider.map((item) => (
                    <div className="hotel_slider_item w-full">
                        <img className="w-full" src={item.img} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default DetailsPageSlider;
