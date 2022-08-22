import React from "react";
import { Link } from "react-router-dom";

let additional = [
    {
        icon: "CookingPot",
        title: "Food Corner",
        link: 'food-corner'
    },
    {
        icon: "Barbell",
        title: "Fitness Center",
        link: 'fitness'
    },
    {
        icon: "Frame-39413",
        title: "Pool",
        link: 'pool'
    },
    {
        icon: "Storefront ",
        title: "Lounge bar",
        link: 'bar'
    },
];

const Additional = () => {
    return (
        <section class="additional_part bg-[#222222] mt-10 mb-10">
            <div class="container px-2 py-10">
                <div class="grid grid-cols-12 gap-5">
                    <div class="additional_item w-full col-span-12 lg:col-span-4">
                        <h2 class="font-semibold lg:font-bold text-2xl lg:text-2xl xl:text-4xl text-white mb-8 text-center lg:text-left">
                            Additional Services
                        </h2>
                        <p class="font-normal text-sm lg:text-sm text-white mb-8 opacity-50 text-center lg:text-left">
                            The best costs for your loosening up excursion. The utanislen quam
                            nestibulum ac quame odion elementum sceisue the aucan.
                        </p>
                        <div class="call flex items-center justify-center lg:justify-start">
                            <div class="mr-2 lg:mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="27"
                                    fill="none"
                                    className="w-6"
                                    viewBox="0 0 26 27"
                                >
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M7.86 13.583a10.924 10.924 0 005.097 5.083 1.046 1.046 0 001.032-.079l3.267-2.182a1.034 1.034 0 01.993-.091l6.115 2.626a1.032 1.032 0 01.628 1.085 6.273 6.273 0 01-6.22 5.475A17.772 17.772 0 011 7.728a6.272 6.272 0 015.475-6.22 1.032 1.032 0 011.085.628l2.626 6.128a1.045 1.045 0 01-.078.98l-2.182 3.32a1.045 1.045 0 00-.066 1.019v0z"
                                    ></path>
                                </svg>
                            </div>
                            <div class="call_content">
                                <p class="mb-1 font-normal text-sm lg:text-sm text-white opacity-50">
                                    For resarvation
                                </p>
                                <a class="font-bold text-sm lg:text-base text-white" href="#">
                                    310-437-2766
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div class="grid grid-cols-12 gap-6 flex-col lg:flex-row">
                            {additional.map((item) => (
                                <div class="col-span-12 md:col-span-6 lg:col-span-3 additional_item border-x border-y p-7 md:p-4 rounded-xl text-center lg:text-left hover">
                                    <Link
                                        to={item.link}
                                    >
                                        <div class="icon flex items-center justify-center lg:justify-start">
                                            <iframe className={`${item.icon} w-auto h-10 bg-no-repeat bg-center lg:bg-left bg-auto`}></iframe>
                                        </div>
                                        <h2 class="font-bold text-base lg:text-base text-white mt-3 mb-5">
                                            <Link to={item.link}>{item.title}</Link>
                                        </h2>
                                        <Link
                                            to={item.link}
                                            class="font-normal text-sm lg:text-base text-white/50 flex justify-center lg:justify-start items-center gap-2 block capitalize see_details"
                                        >
                                            see Details
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    stroke="#fff"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M3.125 10h13.75M14.063 7.188L16.875 10l-2.813 2.813"
                                                ></path>
                                            </svg>
                                        </Link>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Additional;
