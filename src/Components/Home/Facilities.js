import React from 'react';
import "./icon.css";


let facilities = [
    {
        svg: 'Frame-38960',
      title: 'Get And Drop',
      description: "We'll get from air terminal while you comfortable on your ride,",
    },
    {
        svg: 'Car',
        title: ' Parking spot',
        description: "We have specious parking spot &amp; have parking Facilities.",
    },
    {
        svg: 'Union',
        title: ' Room Service',
        description: "We have 24/7 room service facilities &amp; including all.",
    },
    {
        svg: 'WifiHigh',
        title: 'Free WiFi',
        description: "We have 24/7 Free WiFi service facilities &amp; including all.",
    },
];





const Facilities = () => {
    return (
        <section class="our_facilities py-10">
            <div class="container mx-auto px-2">
                <div
                    class="facilities gap-3 text-center grid grid-cols-12"
                >
                    {
                        facilities.map(item => 
                            
                            <div
                            class="col-span-12 md:col-span-6 lg:col-span-3 facilities_item p-7 shadow-[0px_0px_2px_rgba(195,195,195,1)] rounded-lg flex justify-center flex-col items-center lg:items-baseline w-full lg:text-left cursor-pointer -z-[1]"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >

                            <span className={`${item.svg} w-[-webkit-fill-available] h-10 bg-no-repeat bg-center lg:bg-left bg-auto cursor-pointer`}></span>
                            
    
                            <h4
                                class="font-bold text-base text-[#0F0E0E] capitalize mt-3 lg:mt-3 mb-5 lg:mb-5"
                            >
                                {item.title}
                            </h4>
                            <p class="font-normal text-sm text-[#0F0E0E]">
                                {item.description}
                            </p>
                        </div>
                            
                            )
                    }


                    
                   
                
                </div>
            </div>
        </section>
    );
};

export default Facilities;