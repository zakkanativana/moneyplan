import { useState } from "react";
import { BiChevronUp } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { kelas_1, kelas_2, prof_1 } from "../assets/images/kelas";
const Kelaspage = () => {
  const navigate = useNavigate();
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  return (
    <div className="mt-40">
      <div className="kelas-section container2 mx-auto relative">
        <h1 className="text-center text-[40px] font-bold leading-[60px] text-[#214253] mb-2 mt-16">Katalog Kelas Online</h1>
        <p className="text-center text-xl text-[#214253] mb-14"> Kegiatan sharing bisnis berbayar bersama mentor pilihan money plan secara praktis & fleksibel</p>
        <div className="md:grid grid-cols-6 block">
          <div className="col-span-1 ">
            <div className="p-4 sidebar-kelas mb-10 md:mb-0 ">
              <div className="overflow-hidden">
                <div className="flex items-center justify-between cursor-pointer " onClick={() => setDrop1(!drop1)}>
                  <h6 className="text-[#214253] font-bold">Tipe Kelas</h6>
                  <BiChevronUp className={`transition delay-150 duration-300 ease-in-out ${drop1 ? "rotate-180" : "rotate-0"}`} />
                </div>
                <div className={`transition ${drop1 ? "max-h-20" : "max-h-0"}`}>
                  <div className="flex">
                    <input className="mr-2.5" type="checkbox" name="" id="" />
                    <p className="font-medium">Gratis</p>
                  </div>
                  <div className="flex mt-2">
                    <input className="mr-2.5" type="checkbox" name="" id="" />
                    <p className="font-medium">Berbayar</p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="flex items-center justify-between mt-6 cursor-pointer" onClick={() => setDrop2(!drop2)}>
                  <h6 className="text-[#214253] font-bold">Status Kelas</h6>
                  <BiChevronUp className={`transition delay-150 duration-300 ease-in-out ${drop2 ? "rotate-180" : "rotate-0"}`} />
                </div>
                <div className={`transition ${drop2 ? "max-h-20" : "max-h-0"}`}>
                  <div className="flex">
                    <input className="mr-2.5" type="checkbox" name="" id="" />
                    <p className="font-medium">Sudah Rilis</p>
                  </div>
                  <div className="flex mt-2">
                    <input className="mr-2.5" type="checkbox" name="" id="" />
                    <p className="font-medium">Akan Datang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-span-5 lg:ml-20 md:ml-28 xl:ml-5 ">
            <div className="kelas-group grid grid-cols-3 gap-5">
              Coming Soon
              {/* Card */}
              { <div className="col-span-1 card-kelas cursor-pointer" onClick={() => navigate("/detailkelas-online1")}>
                <img className="rounded" src={kelas_1} />
                <div className="mt-4 px-2.5">
                  <h1 className="text-2xl font-bold text-[#214253]">Inovasi memulai bisnis laundry modern menggunakan aplikasi </h1>
                  <div className="flex mt-4 mb-4">
                    <img src={prof_1} />
                    <div className="ml-3">
                      <h2 className="text-lg font-semibold">Krisna Bagus Prasetyo</h2>
                      <p className="font-light">Owner Deka Laundry</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-2xl text-[#214253] mb-3">Rp. 1.000.000</h3>
                </div>
              </div> }
              {/* End Card */}
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kelaspage;
