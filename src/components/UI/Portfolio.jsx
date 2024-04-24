import React, { useEffect, useState } from "react";

import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  // Load more Handler
  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  // Show Modal
  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  // Filter Data
  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }

    if (selectTab === "website") {
      const filteredData = data.filter(
        (item) => item.category === "Website"
      );
      setPortfolios(filteredData);
    }

    if (selectTab === "ux-design") {
      const filteredData = data.filter((item) => item.category === "Ux");
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My Recent Projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className={`btn-category ${
                selectTab === "all" ? "btnActive" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("website")}
              className={`btn-category ${
                selectTab === "website" ? "btnActive" : ""
              }`}
            >
              Website
            </button>
            <button
              onClick={() => setSelectTab("ux-design")}
              className={`btn-category ${
                selectTab === "ux-design" ? "btnActive" : ""
              }`}
            >
              UX Design
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12 ">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img src={portfolio.imgUrl} alt="" className="rounded-[8px]" />
              </figure>

              <div className="w-full h-full hover:bg-neutral-900 hover:bg-opacity-50 absolute top-0 left-0 z-[5] hidden group-hover:block ease-in duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in-out duration-300"
                  >
                    see details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              load more
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
