import React from "react";

const Subscription = () => {
  return (
    <section class="visitors_part pt-[93px] pb-[79px] bg-center bg-no-repeat bg-cover bg-visitor">
      <div class="max-w-[1120px] mx-auto px-2">
        <div class="columns-1 lg:columns-2">
          <div class="left">
            <h2 class="text-white font-bold text-2xl leading-[39px] capitalize mb-5 text-center lg:text-left">
              Join our newsletter
            </h2>
            <p class="text-white font-normal text-sm text-center lg:text-left lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              aenean mauris blandit ac massa fames odio.
            </p>
          </div>
          <div class="subcribe">
            <div class="m-auto">
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-normal text-slate-900 opacity-0"
              >
                DESTINATION
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="email-address-icon"
                  class="border text-sm rounded-lg block w-full pl-8 py-3 focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)]"
                  placeholder="Enter your mail"
                />
                <div class="absolute inset-y-0 right-0 flex items-center p-1 cursor-pointer z-10">
                  <button class="focus:outline-none focus:ring-0 bg-gradient-to-r from-[#be9e57] to-[#ddba52] rounded-[10px] text-white py-2 px-6 cursor-pointer z-10">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
