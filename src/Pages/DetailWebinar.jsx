import { Figma, prof_detail, vscode } from "../assets";
import { BsCalendarEventFill, BsClockFill, BsFillGeoAltFill } from "react-icons/bs";
import { detailWebinar1 } from "../assets/images/webinar";

const DetailWebinar = () => {
  return (
    <div className="mt-20">
      <div className="detail-webinar">
        <div className="bg"></div>
        <div className="pt-20 text-white text-center ">
          <h6 className="text-xl mb-5">  Webinar </h6>
          <h1 className="font-bold text-3xl mb-8">
            Sharing Bisnis <br />  Perbedaan Coffee Shop dan Cafe shop
          </h1>
          <div className="flex justify-center items-center">
            <img src={detailWebinar1} />
            <div className="ml-3">
              <h2 className="text-2xl font-semibold"> Satrio Rahargian </h2>
              <p className="font-medium text-start text-lg "> OWNER Ruang Rindu </p>
            </div>
          </div>
        </div>
        <div className="xl:grid grid-cols-6  container2 mx-auto mt-14 gap-x-10 block">
          <div className="column-1 col-span-4">
            <div>
              <h1 className="font-semibold text-4xl text-[#0F1D37]">Deskripsi webinar</h1>
              <p className="text-xl mt-3"> Di Webinar ini kita akan sharing tentang Perbedaan Coffee Shop dan Cafe Shop </p>
            </div>

            <div className="mt-14">
              <h1 className="font-semibold text-4xl text-[#0F1D37]"> Webinar ini cocok untuk kamu : </h1>
              <p className="text-xl mt-3">1. Ingin Membangun Bisnis</p>
              <p className="text-xl mt-3">2. Memperdalam Bisnis Coffee</p>
              <p className="text-xl mt-3">3. Seorang Pemilik Bisnis dan Barista </p>
              <p className="text-xl mt-3">4. Menyukai Hal Baru </p>
            </div>

          </div>
          <div className="column-2 col-span-2 xl:mt-0 mt-14">
            <div className="mb-7">
              <h1 className="font-bold text-2xl">Tanggal</h1>
              <p className="text-2xl flex items-center mt-3">
                <BsCalendarEventFill className="text-base mr-5" /> 26 November 2022
              </p>
            </div>
            <div className="mb-7">
              <h1 className="font-bold text-2xl">Waktu</h1>
              <p className="text-2xl flex items-center mt-3">
                <BsClockFill className="text-base mr-5" /> 19.00 - 20.30
              </p>
            </div>
            <div className="mb-7">
              <h1 className="font-bold text-2xl">Lokasi</h1>
              <p className="text-2xl flex items-center mt-3">
                <BsFillGeoAltFill className="text-base mr-5 text-xl" /> Via IG Live
              </p>
            </div>

            <hr className="mb-7" />

            <div className="mb-7">
              <h1 className="font-bold text-2xl">Normal Price</h1>
              <p className="text-2xl flex items-center mt-3">
                Gratis
              </p>
            </div>

            <div className="flex justify-center">
              <button className="font-light px-24 xl:py-3 py-3 bg-[#214253] rounded-md text-white text-[16px] xl:mt-0 mt-2 cursor-pointer" onClick={() => window.location.assign("https://www.instagram.com/moneyplan.id/")}>Gabung webinar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailWebinar;
