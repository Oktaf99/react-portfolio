import React from "react";

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="bg-smallTextColor pt-12">
      {/* Top Content */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[500] mb-5 md:text-[2rem]">
              Do you want to make beautiful products ?
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-3 rounded-[5px]">
                <i class="ri-mail-line"></i>Hire me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              distinctio fuga illo tenetur dolores provident eveniet ratione
              asperiores. Numquam sapiente mollitia modi itaque cupiditate
              repudiandae porro et eum error amet?
            </p>

            <div className="flex items-center gap-7 mt-10">
              <h2 className="text-white font-[600]">Follow me :</h2>
              <span className="flex items-center gap-3">
                <a href="" className="text-white text-[25px] font-[500]">
                  <i class="ri-github-fill"></i>
                </a>
                <a href="" className="text-white text-[25px] font-[500]">
                  <i class="ri-youtube-fill"></i>
                </a>
                <a href="" className="text-white text-[25px] font-[500]">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
                <a href="" className="text-white text-[25px] font-[500]">
                  <i class="ri-facebook-fill"></i>
                </a>
                <a href="" className="text-white text-[25px] font-[500]">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        
      </div>
      {/* Top Content Ends */}
      {/* Bottom Content */}
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[33px] h-[33px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  O
                </span>

                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[16px]">
                    OKTA
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Feri
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-[14px]">Copyright {year} Developed by OktaF - All right reserved.</p>
            </div>

          </div>
        </div>
      </div>
      {/* Bottom Content Ends */}
    </footer>
  );
};

export default Footer;
