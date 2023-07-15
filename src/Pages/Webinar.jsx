import { BiChevronUp } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { banner_webinar3, WebinarBisnisKecantikan, WebinarBisnisKecantikanProfile, banner_webinar4, banner_webinar5, imageNull, prof_webinar, webinar, webinar1, webinar2, webinar3, webinar4, webinar5, Webinar_GabiCandini, Webinar_GabiCandiniProfile2, WebinarCoffeeShop1, WebinarCoffeeShop1Profile1 } from "../assets/images/webinar";


const Webinar = () => {
  const navigate = useNavigate();
  const [drop1, setDrop1] = useState(false);
  return (
    <div className="mt-40">
      <div className="webinar-section container2 mx-auto relative">
        <h1 className="text-center text-[40px] font-bold leading-[60px] text-[#214253] mb-2 mt-16">Katalog Webinar</h1>
        <p className="text-center text-xl text-[#214253] mb-14">
          Kegiatan sharing bisnis berbayar bersama mentor pilihan money <br /> plan secara praktis & fleksibel
        </p>
        <div className="md:grid grid-cols-6 block">
          <div className="col-span-1 ">
            <div className="px-3 py-1 sidebar-webinar mb-10 md:mb-0 overflow-hidden">
              <div className="py-3 flex items-center justify-between cursor-pointer" onClick={() => setDrop1(!drop1)}>
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
          </div>

          <div className="col-span-5 lg:ml-20 md:ml-28 xl:ml-5 ">
            <div className="webinar-group grid grid-cols-3 gap-5">

               {/* Card */}
               <div className="col-span-1 card-webinar cursor-pointer" onClick={() => navigate("/WebinarUncleJo")}>
                <img className="rounded" src={WebinarCoffeeShop1} />
                <div className="mt-4 px-2.5">
                  <h1 className="text-xl font-bold text-[#214253]"> Memulai Jejak Karier Dengan Bisnis Coffee Shop </h1>
                  <div className="flex mt-4 mb-4">
                    <img src={WebinarCoffeeShop1Profile1} alt="gambarwebinar3" />
                    <div className="ml-3">
                      <h2 className="text-lg font-semibold"> Yohanes Handoyo </h2>
                      <p className="font-light"> CEO Kopi Unclejo </p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-2xl text-[#214253] mb-3"> Gratis </h3>
                </div>
              </div>
              {/* End Card */}

              {/* Card */}
              <div className="col-span-1 card-webinar cursor-pointer" onClick={() => navigate("/WebinarGabiCandini")}>
                <img className="rounded" src={Webinar_GabiCandini} />
                <div className="mt-4 px-2.5">
                  <h1 className="text-xl font-bold text-[#214253]">Merambah Dunia Content Creator Sebagai Beauty Influencer </h1>
                  <div className="flex mt-4 mb-4">
                    <img src={Webinar_GabiCandiniProfile2} alt="gambarwebinar3" />
                    <div className="ml-3">
                      <h2 className="text-lg font-semibold"> Gaby Candini </h2>
                      <p className="font-light"> Beauty Enthusiast </p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-2xl text-[#214253] mb-3"> Gratis </h3>
                </div>
              </div>
              {/* End Card */}

              {/* Card */}
              <div className="col-span-1 card-webinar cursor-pointer" onClick={() => navigate("/WebinarBisnisKecantikan")}>
                <img className="rounded" src={WebinarBisnisKecantikan} />
                <div className="mt-4 px-2.5">
                  <h1 className="text-2xl font-bold text-[#214253]"> Raih Cuan dengan Bisnis Kecantikan Herbal </h1>
                  <div className="flex mt-4 mb-4">
                    <img src={WebinarBisnisKecantikanProfile} alt="gambarwebinar3" />
                    <div className="ml-3">
                      <h2 className="text-lg font-semibold"> Wiwi Wiral </h2>
                      <p className="font-light"> CEO Biotalk </p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-2xl text-[#214253] mb-3"> Gratis </h3>
                </div>
              </div>
              {/* End Card */}

              {/* Card */}
              <div className="col-span-1 card-webinar cursor-pointer" onClick={() => navigate("/webinar-bisnishantaran01")}>
                <img className="rounded" src={banner_webinar5} />
                <div className="mt-4 px-2.5">
                  <h1 className="text-2xl font-bold text-[#214253]"> Bedah Bisnis Hantaran Pernikahan dengan Praktiknya </h1>
                  <div className="flex mt-4 mb-4">
                    <img src={webinar5} alt="gambarwebinar3" />
                    <div className="ml-3">
                      <h2 className="text-lg font-semibold"> Vilora Lista </h2>
                      <p className="font-light"> OWNER Vlora Decorations </p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-2xl text-[#214253] mb-3"> <span className="line-through mr-4"> Rp.165.000 </span> Rp.105.000 </h3>
                </div>
              </div>
              {/* End Card */}

              {/* Card */}
              <div className="col-span-1 card-webinar cursor-pointer" onClick={() => navigate("/detailwebinar4")}>
                <img className="rounded" src={banner_webinar4} />
                <div className="mt-4 px-2.5">
                  <h1 className="text-2xl font-bold text-[#214253]"> Jutaan Strategi Didalam Bisnis Minuman Sehat </h1>
                  <div className="flex mt-4 mb-4">
                    <img src={webinar4} alt="gambarwebinar3" />
                    <div className="ml-3">
                      <h2 className="text-lg font-semibold"> Septri Susanto </h2>
                      <p className="font-light"> OWNER @sekeca_official </p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-2xl text-[#214253] mb-3"> <span className="line-through mr-4"> Rp.80.000 </span> Rp.70.000 </h3>
                </div>
              </div>
              {/* End Card */}

              {/* Card */}
              <div className="col-span-1 card-webinar cursor-pointer" onClick={() => navigate("/detailwebinar3")}>
                <img className="rounded" src={banner_webinar3} />
                <div className="mt-4 px-2.5">
                  <h1 className="text-2xl font-bold text-[#214253]"> Distributor, Reseller, Dropshipper ? Mana yang pas ? </h1>
                  <div className="flex mt-4 mb-4">
                    <img src={webinar3} alt="gambarwebinar3" />
                    <div className="ml-3">
                      <h2 className="text-lg font-semibold"> Cindy Ciewie </h2>
                      <p className="font-light"> OWNER @ciewiehomedress </p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-2xl text-[#214253] mb-3"> <span className="line-through mr-4"> Rp.80.000 </span> Rp.70.000 </h3>
                </div>
              </div>
              {/* End Card */}

              {/* Card */}
              <div className="col-span-1 card-webinar cursor-pointer" onClick={() => navigate("/detailwebinar-online")}>
                <img className="rounded" src={prof_webinar} />
                <div className="mt-4 px-2.5">
                  <h1 className="text-2xl font-bold text-[#214253]">Perbedaan Coffee Shop dan Cafe Shop </h1>
                  <div className="flex mt-4 mb-4">
                    <img src={webinar1} />
                    <div className="ml-3">
                      <h2 className="text-lg font-semibold"> Satrio Rahargian </h2>
                      <p className="font-light"> OWNER Ruang Rindu </p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-2xl text-[#214253] mb-3"> Gratis </h3>
                </div>
              </div>
              {/* End Card */}





            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Webinar;
