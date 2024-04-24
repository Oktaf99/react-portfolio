import React, { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null)

  const stikcyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };

  useEffect(() => {
    stikcyHeaderFunction();
    return window.removeEventListener("scroll", stikcyHeaderFunction);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const togggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center z-2"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ===== LOGO ===== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              O
            </span>

            <div className="leading-[20px] logo-title">
              <h2 className="text-smallTextColor font-[700]">OKTA</h2>
              <p className="text-smallTextColor text-[15px] font-[500]">Feri</p>
            </div>
          </div>
          {/* ===== LOGO ENDS ===== */}

          {/* ===== Menu ===== */}
          <div className="menu" ref={menuRef} onClick={togggleMenu}>
            <ul className="flex items-center gap-8">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600] border-smallTextColor hover:border-b border-spacing-2 "
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600] border-smallTextColor hover:border-b"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600] border-smallTextColor hover:border-b"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600] border-smallTextColor hover:border-b"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4 button-plane">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor  py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i class="ri-send-plane-line"></i> Come Here
            </button>

            <span onClick={togggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/* ===== Menu Ends ===== */}
        </div>
      </div>
    </header>
  );
};

export default Header;
