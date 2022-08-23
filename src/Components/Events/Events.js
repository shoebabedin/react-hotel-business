import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import eventBanner from "../../assets/images/events/event_banner.webp";
import data from "../../JsonData/events-data.json";
import Banner from "../Common/Banner/Banner";
import Pagination from "../Common/Pagination/Pagination";




const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 3;
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


  return (
    <>
      <Banner bg={eventBanner} title="Hotel Grand Prince" className="pt-[100px] pb-[100px]"/>
      <div className="delux_part my-[80px]">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="event_part">
                {currentTableData.map((item, index) => (
                  <div key={index} className="events-item max-w-7xl mx-auto flex items-start  justify-start gap-4 lg:gap-16 mb-6 flex-col lg:flex-row mb-10 lg:mb-16">
                    <div className="event-img">
                      <img
                        className="skewElem"
                        src={require(`../../assets/images/events/${item.img}`)}
                        alt={item.title}
                      />
                    </div>
                    <div className="event-ttl">
                      <h2 className="font-semibold text-base lg:text-4xl text-[#151515]">
                        {item.title}
                      </h2>
                      <span className="font-normal text-sm lg:text-sm text-[#312e49] opacity-50 mb-6 block">
                        {item.date}
                      </span>
                      <p className="font-normal text-sm lg:text-base text-[#0F0E0E] opacity-50">
                        {item.desc}
                      </p>
                      <ul className="mt-5">
                        <li className="check_in list-disc ml-5 col-span-12 lg:col-span-4">
                          <h4 className="font-medium text-sm lg:text-xl text-black mb-4">
                            {item.checkTime}
                          </h4>
                        </li>

                        <li className="check_out col-span-12 lg:col-span-8 ml-5">
                          {item.checkTimeList.map((childItem) => (
                            <p className="mb-2 lg:mb-4 flex items-center justify-start font-normal text-sm lg:text-base text-[#0F0E0E] opacity-50">
                              {childItem.text}
                            </p>
                          ))}
                        </li>
                      </ul>
                      <div className="question lg:basis-auto focus:outline-none focus:ring-0 bg-gradient-to-r from-[#be9e57] to-[#ddba52] rounded-[10px] text-white w-44 mt-3 lg:mt-11">
                        <div className="shadow rounded-md px-4 max-w-sm mx-auto">
                          <div className="flex items-center space-x-4">
                            <div className="">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19.0392 15.9028C19.0392 16.2328 18.9659 16.5719 18.8101 16.9019C18.6542 17.2319 18.4526 17.5436 18.1867 17.8369C17.7376 18.3319 17.2426 18.6894 16.6834 18.9186C16.1334 19.1478 15.5376 19.2669 14.8959 19.2669C13.9609 19.2669 12.9617 19.0469 11.9076 18.5978C10.8534 18.1486 9.79923 17.5436 8.75423 16.7828C7.70007 16.0128 6.7009 15.1603 5.74757 14.2161C4.8034 13.2628 3.9509 12.2636 3.19007 11.2186C2.4384 10.1736 1.8334 9.1286 1.3934 8.09276C0.953398 7.04776 0.733398 6.04859 0.733398 5.09526C0.733398 4.47193 0.843398 3.87609 1.0634 3.32609C1.2834 2.76693 1.63173 2.25359 2.11757 1.79526C2.70423 1.21776 3.3459 0.933594 4.02423 0.933594C4.2809 0.933594 4.53757 0.988594 4.76673 1.09859C5.00507 1.20859 5.2159 1.37359 5.3809 1.61193L7.50757 4.60943C7.67257 4.83859 7.79173 5.04943 7.87423 5.25109C7.95673 5.44359 8.00257 5.63609 8.00257 5.81026C8.00257 6.03026 7.9384 6.25026 7.81007 6.46109C7.6909 6.67193 7.51673 6.89193 7.29673 7.11193L6.60007 7.83609C6.49923 7.93693 6.4534 8.0561 6.4534 8.20276C6.4534 8.2761 6.46257 8.34026 6.4809 8.41359C6.5084 8.48693 6.5359 8.54193 6.55423 8.59693C6.71923 8.89943 7.0034 9.2936 7.40673 9.77026C7.81923 10.2469 8.25923 10.7328 8.7359 11.2186C9.2309 11.7044 9.70757 12.1536 10.1934 12.5661C10.6701 12.9694 11.0642 13.2444 11.3759 13.4094C11.4217 13.4278 11.4767 13.4553 11.5409 13.4828C11.6142 13.5103 11.6876 13.5194 11.7701 13.5194C11.9259 13.5194 12.0451 13.4644 12.1459 13.3636L12.8426 12.6761C13.0717 12.4469 13.2917 12.2728 13.5026 12.1628C13.7134 12.0344 13.9242 11.9703 14.1534 11.9703C14.3276 11.9703 14.5109 12.0069 14.7126 12.0894C14.9142 12.1719 15.1251 12.2911 15.3542 12.4469L18.3884 14.6011C18.6267 14.7661 18.7917 14.9586 18.8926 15.1878C18.9842 15.4169 19.0392 15.6461 19.0392 15.9028Z"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-miterlimit="10"
                                />
                                <path
                                  d="M15.8585 7.35091C15.8585 6.80091 15.4276 5.95758 14.786 5.27008C14.1993 4.63758 13.4201 4.14258 12.6501 4.14258"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M19.0668 7.35026C19.0668 3.80276 16.1976 0.933594 12.6501 0.933594"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 space-y-6 py-0.5">
                              <p className="font-normal text-sm text-white leading-4">
                                For Reservation
                              </p>
                              <Link className="text-white font-bold text-sm" to={`tel:${item.call}`}>
                                {item.call}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                ))}
              </div>
            </div>
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          
        </div>
      </div>
    </>
  );
};

export default Events;
