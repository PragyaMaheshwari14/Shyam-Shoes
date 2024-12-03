import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#111111] text-sky-50">
      <div className="flex flex-col md:flex-row p-6 md:p-10 bg-red-500">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
            <h1 className="text-[4vw] md:text-[3vw] font-krona tracking-tight">
              shop-anytime <br />anywhere
            </h1>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between items-start md:items-end">
          <div className="heading">
            <h1 className="text-[4vw] md:text-[2.8vw] font-krona tracking-tight">
              with{" "}
              <span className="text-[4vw] md:text-[3vw] font-krona tracking-tight">
                URBANSTORE
              </span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between mt-4">
            {/* Help Links */}
            <div className="flex flex-col items-start gap-2">
              <p className="text-lg md:text-xl">Help</p>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Customer Service
              </a>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Contact
              </a>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Find a store
              </a>
            </div>
            {/* Social Links */}
            <div className="flex flex-col items-start md:items-end gap-2 mt-4 md:mt-0">
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Facebook
              </a>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Twitter
              </a>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Instagram
              </a>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full text-center text-xs  p-4">
        © 2024 Ashish. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
