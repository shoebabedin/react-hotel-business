import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


let slider1 = [
    {
        icon: <FaQuoteRight />,
        desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
    },
    {
        icon: <FaQuoteRight />,
        desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
    },
    {
        icon: <FaQuoteRight />,
        desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
    },
    {
        icon: <FaQuoteRight />,
        desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
    },
    {
        icon: <FaQuoteRight />,
        desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
    },
    {
        icon: <FaQuoteRight />,
        desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
    },
]


let slider2 = [
    {
        name: 'Marten couper',
        star: <FaQuoteRight />,
        title: "CEO,Red Bull",
    },
    {
        name: 'Marten couper',
        star: <FaQuoteRight />,
        title: "CEO,Red Bull",
    },
    {
        name: 'Marten couper',
        star: <FaQuoteRight />,
        title: "CEO,Red Bull",
    },
    {
        name: 'Marten couper',
        star: <FaQuoteRight />,
        title: "CEO,Red Bull",
    },
    {
        name: 'Marten couper',
        star: <FaQuoteRight />,
        title: "CEO,Red Bull",
    },
    {
        name: 'Marten couper',
        star: <FaQuoteRight />,
        title: 'CEO,Red Bull',
    },
]


const Clients = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();





    return (
        <section class="client_part">
            <div class="container mx-auto px-2 py-10">
                <h2
                    class="text-center text-2xl lg:text-3xl font-bold uppercase mb-4 text-[#0F0E0E]"
                >
                    What our Guest’s say
                </h2>
                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} arrows={false} speed={4000} slidesToScroll={1} className="slider slider-single max-w-[729px] w-full mx-auto">
                    {
                        slider1.map(item =>
                            <div class="text-center">
                                <span class="text-center flex justify-center mb-2">
                                    {item.icon}
                                </span>
                                <p class="font-medium text-sm text-center opacity-50">
                                {item.desc}
                                </p>
                            </div>

                        )
                    }


                </Slider>
                <Slider
                className="slider slider-nav max-w-[1076px] w-full mx-auto border-t border-[#be9e57] pt-12"
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={5}
                    slidesToScroll={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    speed={1000}
                    autoplay={true}
                    centerPadding={'0px'}
                    centerMode={true}
                    arrows={false}
                    responsive=
                    {[
                            {
                                breakpoint: 600,
                                settings: {
                                  slidesToShow: 3,
                                  slidesToScroll: 2,
                                  centerMode: true,
                                  centerPadding: '20px'
                                }

                            }
                        ]}
                    
                >
                    {
                        slider2.map(item => 
                            <div class="opacity-50">
                        <h3
                            class="text-sm font-bold capitalize text-[#0F0E0E] mb-px xl:text-lg"
                        >
                           {item.name}
                        </h3>
                        <ul class="flex items-center gap-1 justify-center my-2">
                            <li>
                                <svg
                                    class="w-2 lg:w-4"
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.58844 13.3356L12.4651 15.8945C12.965 16.2224 13.5804 15.7346 13.4342 15.1348L12.3112 10.5447C12.2809 10.4175 12.2857 10.2839 12.3252 10.1594C12.3646 10.0349 12.4371 9.92454 12.5343 9.84101L16.011 6.82624C16.4648 6.4344 16.234 5.64272 15.6418 5.60274L11.1036 5.29886C10.9798 5.29137 10.8608 5.24654 10.7611 5.16985C10.6613 5.09317 10.5853 4.98794 10.5421 4.86704L8.84996 0.436842C8.80516 0.308816 8.72356 0.198222 8.61623 0.120071C8.5089 0.0419207 8.38104 0 8.25 0C8.11896 0 7.9911 0.0419207 7.88377 0.120071C7.77644 0.198222 7.69484 0.308816 7.65004 0.436842L5.95786 4.86704C5.91474 4.98794 5.83867 5.09317 5.73895 5.16985C5.63923 5.24654 5.52019 5.29137 5.39637 5.29886L0.858244 5.60274C0.265981 5.64272 0.0352291 6.4344 0.489041 6.82624L3.9657 9.84101C4.06288 9.92454 4.13537 10.0349 4.17484 10.1594C4.2143 10.2839 4.21913 10.4175 4.18877 10.5447L3.15038 14.799C2.97347 15.5187 3.71188 16.1025 4.30414 15.7106L7.91156 13.3356C8.01272 13.2687 8.13012 13.2332 8.25 13.2332C8.36988 13.2332 8.48728 13.2687 8.58844 13.3356Z"
                                        fill="#FDCE1A"
                                    />
                                </svg>
                            </li>
                            <li>
                                <svg
                                    class="w-2 lg:w-4"
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.58844 13.3356L12.4651 15.8945C12.965 16.2224 13.5804 15.7346 13.4342 15.1348L12.3112 10.5447C12.2809 10.4175 12.2857 10.2839 12.3252 10.1594C12.3646 10.0349 12.4371 9.92454 12.5343 9.84101L16.011 6.82624C16.4648 6.4344 16.234 5.64272 15.6418 5.60274L11.1036 5.29886C10.9798 5.29137 10.8608 5.24654 10.7611 5.16985C10.6613 5.09317 10.5853 4.98794 10.5421 4.86704L8.84996 0.436842C8.80516 0.308816 8.72356 0.198222 8.61623 0.120071C8.5089 0.0419207 8.38104 0 8.25 0C8.11896 0 7.9911 0.0419207 7.88377 0.120071C7.77644 0.198222 7.69484 0.308816 7.65004 0.436842L5.95786 4.86704C5.91474 4.98794 5.83867 5.09317 5.73895 5.16985C5.63923 5.24654 5.52019 5.29137 5.39637 5.29886L0.858244 5.60274C0.265981 5.64272 0.0352291 6.4344 0.489041 6.82624L3.9657 9.84101C4.06288 9.92454 4.13537 10.0349 4.17484 10.1594C4.2143 10.2839 4.21913 10.4175 4.18877 10.5447L3.15038 14.799C2.97347 15.5187 3.71188 16.1025 4.30414 15.7106L7.91156 13.3356C8.01272 13.2687 8.13012 13.2332 8.25 13.2332C8.36988 13.2332 8.48728 13.2687 8.58844 13.3356Z"
                                        fill="#FDCE1A"
                                    />
                                </svg>
                            </li>
                            <li>
                                <svg
                                    class="w-2 lg:w-4"
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.58844 13.3356L12.4651 15.8945C12.965 16.2224 13.5804 15.7346 13.4342 15.1348L12.3112 10.5447C12.2809 10.4175 12.2857 10.2839 12.3252 10.1594C12.3646 10.0349 12.4371 9.92454 12.5343 9.84101L16.011 6.82624C16.4648 6.4344 16.234 5.64272 15.6418 5.60274L11.1036 5.29886C10.9798 5.29137 10.8608 5.24654 10.7611 5.16985C10.6613 5.09317 10.5853 4.98794 10.5421 4.86704L8.84996 0.436842C8.80516 0.308816 8.72356 0.198222 8.61623 0.120071C8.5089 0.0419207 8.38104 0 8.25 0C8.11896 0 7.9911 0.0419207 7.88377 0.120071C7.77644 0.198222 7.69484 0.308816 7.65004 0.436842L5.95786 4.86704C5.91474 4.98794 5.83867 5.09317 5.73895 5.16985C5.63923 5.24654 5.52019 5.29137 5.39637 5.29886L0.858244 5.60274C0.265981 5.64272 0.0352291 6.4344 0.489041 6.82624L3.9657 9.84101C4.06288 9.92454 4.13537 10.0349 4.17484 10.1594C4.2143 10.2839 4.21913 10.4175 4.18877 10.5447L3.15038 14.799C2.97347 15.5187 3.71188 16.1025 4.30414 15.7106L7.91156 13.3356C8.01272 13.2687 8.13012 13.2332 8.25 13.2332C8.36988 13.2332 8.48728 13.2687 8.58844 13.3356Z"
                                        fill="#FDCE1A"
                                    />
                                </svg>
                            </li>
                            <li>
                                <svg
                                    class="w-2 lg:w-4"
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.58844 13.3356L12.4651 15.8945C12.965 16.2224 13.5804 15.7346 13.4342 15.1348L12.3112 10.5447C12.2809 10.4175 12.2857 10.2839 12.3252 10.1594C12.3646 10.0349 12.4371 9.92454 12.5343 9.84101L16.011 6.82624C16.4648 6.4344 16.234 5.64272 15.6418 5.60274L11.1036 5.29886C10.9798 5.29137 10.8608 5.24654 10.7611 5.16985C10.6613 5.09317 10.5853 4.98794 10.5421 4.86704L8.84996 0.436842C8.80516 0.308816 8.72356 0.198222 8.61623 0.120071C8.5089 0.0419207 8.38104 0 8.25 0C8.11896 0 7.9911 0.0419207 7.88377 0.120071C7.77644 0.198222 7.69484 0.308816 7.65004 0.436842L5.95786 4.86704C5.91474 4.98794 5.83867 5.09317 5.73895 5.16985C5.63923 5.24654 5.52019 5.29137 5.39637 5.29886L0.858244 5.60274C0.265981 5.64272 0.0352291 6.4344 0.489041 6.82624L3.9657 9.84101C4.06288 9.92454 4.13537 10.0349 4.17484 10.1594C4.2143 10.2839 4.21913 10.4175 4.18877 10.5447L3.15038 14.799C2.97347 15.5187 3.71188 16.1025 4.30414 15.7106L7.91156 13.3356C8.01272 13.2687 8.13012 13.2332 8.25 13.2332C8.36988 13.2332 8.48728 13.2687 8.58844 13.3356Z"
                                        fill="#FDCE1A"
                                    />
                                </svg>
                            </li>
                            <li>
                                <svg
                                    class="w-2 lg:w-4"
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.58844 13.3356L12.4651 15.8945C12.965 16.2224 13.5804 15.7346 13.4342 15.1348L12.3112 10.5447C12.2809 10.4175 12.2857 10.2839 12.3252 10.1594C12.3646 10.0349 12.4371 9.92454 12.5343 9.84101L16.011 6.82624C16.4648 6.4344 16.234 5.64272 15.6418 5.60274L11.1036 5.29886C10.9798 5.29137 10.8608 5.24654 10.7611 5.16985C10.6613 5.09317 10.5853 4.98794 10.5421 4.86704L8.84996 0.436842C8.80516 0.308816 8.72356 0.198222 8.61623 0.120071C8.5089 0.0419207 8.38104 0 8.25 0C8.11896 0 7.9911 0.0419207 7.88377 0.120071C7.77644 0.198222 7.69484 0.308816 7.65004 0.436842L5.95786 4.86704C5.91474 4.98794 5.83867 5.09317 5.73895 5.16985C5.63923 5.24654 5.52019 5.29137 5.39637 5.29886L0.858244 5.60274C0.265981 5.64272 0.0352291 6.4344 0.489041 6.82624L3.9657 9.84101C4.06288 9.92454 4.13537 10.0349 4.17484 10.1594C4.2143 10.2839 4.21913 10.4175 4.18877 10.5447L3.15038 14.799C2.97347 15.5187 3.71188 16.1025 4.30414 15.7106L7.91156 13.3356C8.01272 13.2687 8.13012 13.2332 8.25 13.2332C8.36988 13.2332 8.48728 13.2687 8.58844 13.3356Z"
                                        fill="#FDCE1A"
                                    />
                                </svg>
                            </li>
                        </ul>
                        <p
                            class="mt-px text-black/50 capitalize font-normal text-[10px] leading-[12px] xl:text-sm"
                        >
                            {item.title}
                        </p>
                    </div>
                            
                            )
                    }
                    
                    
                </Slider>
            </div>
        </section>
    );
};


export default Clients;