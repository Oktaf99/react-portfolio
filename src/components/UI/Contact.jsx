import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.8005915340122!2d106.92377977577826!3d-6.21022975552449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b575e6917a7%3A0x92c6430790cc192b!2sMasjid%20Jami%20al-Kautsar!5e0!3m2!1sid!2sid!4v1682717046612!5m2!1sid!2sid"
              className="w-full h-full border-0 rounded-l-[15px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 rounded-r-[15px]">
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[3px]"
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[3px]"
                />
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[3px]"
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[3px]"
                />
              </div>

              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                Send Messagge
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
