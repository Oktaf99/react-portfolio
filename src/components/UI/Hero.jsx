import React from "react";
import Typed from "typed.js";

import yogendra from "../../assets/images/yogendra.jpg";
import CountUp from "react-countup";

import "../../App.css"

const Hero = () => {
  React.useEffect(() => {
    const typingEffect = new Typed(".multiText", {
      strings: ["Frontend", "Ux Designer", "Backend"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typingEffect.destroy();
    };
  }, []);

  return (
    <section className="pt-0" id="home">
      <div className="container pt-9">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* Left Content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[25px]"
            >
              Hai, Welcome
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[2rem] sm:text-[40px]"
            >
              I'm Okta Feriyanto
            </h1>
            <h3
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[400] text-[2rem] sm:text-[30px] "
            >
              a <span className="multiText"></span>
            </h3>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-3 rounded-[5px]">
                  <i class="ri-mail-line"></i>Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor text-[16px]  hvr-underline-from-left"
              >
                See Portfolio
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              at molestiae? Autem totam, explicabo ducimus voluptatum eveniet
              nesciunt hic. Cum numquam excepturi aut magni eum, beatae
              molestiae dicta est nihil!
            </p>

            <div className="flex items-center gap-7 mt-10">
              <h2 className="text-smallTextColor font-[600]">Follow me :</h2>
              <span className="flex items-center gap-4">
                <a
                  href=""
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i class="ri-github-fill hvr-bob"></i>
                </a>
                <a
                  href=""
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i class="ri-youtube-line hvr-bob"></i>
                </a>
                <a
                  href=""
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill hvr-bob"></i>
                </a>
                <a
                  href=""
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i class="ri-facebook-fill hvr-bob"></i>
                </a>
                <a
                  href=""
                  className="text-smallTextColor text-[25px] font-[600] "
                >
                  <i class="ri-instagram-line hvr-bob"></i>
                </a>
              </span>
            </div>
          </div>
          {/* Left Content Ends */}

          {/* Hero Img */}
          <div className="hero-img bxasis-1/3 mt-10 sm:mt-0 ">
            <figure className="flex items-center justify-center">
              <img src={yogendra} alt="" className="rounded-full w-[350px]" />
            </figure>
          </div>
          {/* Hero Img */}

          {/* Right Content */}
          <div className="flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:basis-1/5 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={4} duration={2} surfix="+" />
              </h2>
              <h4 className="text-headingColor font-[400] text-[18px]">
                Years of Experience
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} surfix="+" />
              </h2>
              <h4 className="text-headingColor font-[400] text-[18px]">
                Success Rate
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} surfix="+" />
              </h2>
              <h4 className="text-headingColor font-[400] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
          {/* Right Content Ends */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
