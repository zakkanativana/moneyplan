import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
const Dropdown1 = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="dropdown relative">
      <button className="flex items-center" onClick={() => setActive(!active)}>
        Layanan {active ? <BiChevronDown className="ml-2" /> : <BiChevronUp className="ml-2" />}
      </button>
      <ul className={`absolute bg-[#517C8C] w-full text-center mt-2 ${active ? "block" : "hidden"}`}>
        <li className="py-2" onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}>Konsultasi</li>
        <li className="py-2" onClick={() => navigate("/kelas-online")}>Kelas Online</li>
        <li className="py-2" onClick={() => navigate("/webbinar-online")}>Webinar</li>
        <li className="py-2" onClick={() => navigate("/mentor")}>Mentoring</li>
      </ul>
    </div>
  );
};

export default Dropdown1;
