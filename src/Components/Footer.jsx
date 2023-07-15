import React from "react";

import { facebook, foot_loc, foot_wa, Instagram, linkind, Logo_money, tiktok, twitter } from "../assets/images/logo";

const Footer = () => {
  return (
    <footer className="bg-[#214253] text-white mt-20">
      <div className="containers mx-auto md:grid sm:block grid-cols-2 py-20 px-5">
        <div className="col-span-1 max-w-[520px] md:col-span-2 lg:col-span-1 ">
          <img src={Logo_money} alt="logo-Money-Plan" />
          <p className="text-[12px] leading-[18px] mt-5">Money Plan adalah salah satu perusahaan konsultan yang mengajarkan edukasi tentang cara memulai dan mengembangkan bisnis bersama mentor di bisnisnya</p>
          <div className="flex gap-x-2 mt-5">
            <div className="p-2 bg-[#fff] rounded-full w-[40px] cursor-pointer">
              <img src={linkind} onClick={() => window.location.assign("https://www.linkedin.com/company/money-plan-consultant/mycompany/")} />
            </div>
            <div className="p-2 bg-[#fff] rounded-full w-[40px] cursor-pointer">
              <img src={twitter} onClick={() => window.location.assign("https://twitter.com/MoneyPlan_ID")} />
            </div>
            <div className="p-2 bg-[#fff] rounded-full w-[40px] cursor-pointer">
              <img src={facebook} onClick={() => window.location.assign("https://www.instagram.com/moneyplan.id/")}/>
            </div>
            <div className="p-2 bg-[#fff] rounded-full w-[40px] cursor-pointer">
              <img src={tiktok} onClick={() => window.location.assign("https://www.tiktok.com/@moneyplan.id")}/>
            </div>
            <div className="p-2 bg-[#fff] rounded-full w-[40px] cursor-pointer">
              <img src={Instagram} onClick={() => window.location.assign("https://www.instagram.com/moneyplan.id/")} />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-7 md:grid-cols-6 lg:pt-0 md:pt-5 lg:ml-10 gap-y-4 gap-x-5 lg:gap-x-0 mt-5 md:mt-0">
          <div className="col-span-2">
            <h4 className="font-semibold text-2xl">Tautan </h4>
            <ul className="text-sm mt-5">
              <li className="mt-2">Beranda </li>
              <li className="mt-2">Solusi </li>
              <li className="mt-2">Blog </li>
              <li className="mt-2">FAQ </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-semibold text-2xl">Layanan </h4>
            <ul className="text-sm mt-5">
              <li className="mt-2">Beranda </li>
              <li className="mt-2">Solusi </li>
              <li className="mt-2">Blog </li>
              <li className="mt-2">FAQ </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-semibold text-2xl">Kontak </h4>
            <ul className="text-sm mt-5">
              <li className="mt-2 flex items-center">
                <img src={foot_wa} className="mr-2" /> WA : 082226108448
              </li>
              <li className="mt-2 flex items-center">
                <img src={foot_loc} className="mr-2" />
                Yogyakarta
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center pb-6 text-sm md:text-base">Copyright © 2022 Money Plan - Powered by Code.in| All right reserved.</p>
    </footer>
  );
};

export default Footer;
