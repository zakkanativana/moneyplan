import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Hamburger, WA } from "../assets";
import { Logo_money } from "../assets/images/logo";
import Drodpown_mobile from "./dropdown/drodpown_mobile";
import Dropdown1 from "./dropdown/dropdown1";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="bg-[#214253]">
        <div className="navbar flex items-center justify-between text-white containers mx-auto px-5 hidden lg:flex">
          <div>
            <img className="cursor-pointer" src={Logo_money} alt="logo-Money-Plan" onClick={() => navigate("/")} />
          </div>
          <div>
            <ul class="flex text-base font-base">
              <li class="mr-5 cursor-pointer" onClick={() => navigate("/")}>
                Beranda
              </li>
              <li class="mr-5 cursor-pointer">
                <Dropdown1 />
              </li>
              <li class="mr-5 cursor-pointer" onClick={() => navigate("/blog")}>
                Blog
              </li>
              <li class="mr-5 cursor-pointer" onClick={() => navigate("/about-me")}>
                Tentang Kami
              </li>
            </ul>
          </div>
          <div class="cursor-pointer">
            <a class="flex p-4 bg-[#517C8C] rounded-xl font-semibold" onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}>
              <img src={WA} class="mr-2" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-phone lg:hidden ">
        <div className="flex flex items-center justify-between min-h-[120px] px-8 bg-[#214253]">
          <div className="text-white ">
            <img src={Hamburger} alt="logo-Money-Plan" onClick={() => setActive(!active)} />
          </div>
          <div className="w-[130px]" onClick={() => navigate("/")}>
            <img src={Logo_money} alt="logo-Money-Plan" />
          </div>
          <div onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}>
            <img src={WA} alt="logo-Money-Plan"  />
          </div>
        </div>

        <div className={`min-h-full hidden mobile-${active ? "active" : ""}`}>
          <ul class="flex flex-col text-base font-base text-white">
            <li class="p-10 bg-[#517C8C] text-center cursor-pointer" onClick={() => navigate("/")}>
              Beranda
            </li>
            <li class="p-10 bg-[#517C8C] text-center cursor-pointer flex justify-center">
              <Drodpown_mobile />
            </li>
            <li class="p-10 bg-[#517C8C] text-center cursor-pointer" onClick={() => navigate("/blog")}>
              Blog
            </li>
            <li class="p-10 bg-[#517C8C] text-center cursor-pointer"  onClick={() => navigate("/about-me")}>Tentang Kami</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
