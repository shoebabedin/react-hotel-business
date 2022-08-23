import React from "react";
import RoomBanner from "../../assets/images/hotel_location/banner.webp";
import DestinationData from "../../JsonData/DestinationData";
import Banner from "../Common/Banner/Banner";
import Destination from "../Common/Destination/Destination";
import MultiRangeSlider from "../Common/MultiRangeSlider/MultiRangeSlider";
import bannerLogo from "./../../assets/images/banner/bannerLogo.webp";





const Room = () => {



  return (
    <>
      <Banner bg={RoomBanner} img={bannerLogo} title={"Hotel Grand Prince"}>
        <div className="m-auto w-full mb-2 lg:mb-0 lg:mx-2 relative">
          <label
            for="email-address-icon"
            className="block mb-2 text-sm font-normal text-slate-900"
          >
            PRICE RANGE
          </label>

          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
      </Banner>

      <Destination
        addClass={"popular_part"}
        heading={"aVAILABLE rOOMS"}
        headingText={"!text-left"}
        desc={"We Choose this rooms only for you.This rooms are popular by our clint’s choice."} data={DestinationData} >
        
    </Destination>
    </>
  );
};

export default Room;
