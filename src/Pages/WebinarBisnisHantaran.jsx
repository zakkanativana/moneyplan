import { detailWebinar5 } from "../assets/images/webinar";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BsCalendarEventFill, BsClockFill, BsFillGeoAltFill } from "react-icons/bs";

const WebinarBisnisHantaran = () => {
  return (
    <div className="detail-webinar mt-20">
      <div className="bg"></div>
      <div className="pt-20 text-white text-center ">
        <h6 className="text-xl mb-5"> Webinar Online </h6>
        <h1 className="font-bold text-3xl mb-8">
          Raih Cuan Melimpah dengan <br />  Bisnis Hantaran Pernikahan
        </h1>
        <div className="flex justify-center items-center">
          <img src={detailWebinar5} />
          <div className="ml-3">
            <h2 className="text-2xl font-semibold"> Vilora Lista </h2>
            <p className="font-medium text-start text-lg "> OWNER Vlora Decorations </p>
          </div>
        </div>
      </div>

      <div className="xl:grid grid-cols-6  container2 mx-auto mt-14 gap-x-10 block">
        <div className="column-1 col-span-4">
          <div>
            <h1 className="font-semibold text-4xl text-[#0F1D37]">Deskripsi Kelas</h1>
            <p className="mt-3 text-xl text-justify"> Bisnis mengemas dan sewa perlengkapan hantaran pernikahan kini semakin populer. Nah, peluang ini juga bisa Planner Muda manfaatkan untuk meraih untung maksimal. Yuk, ketahui tips sukses bisnis seserahan yang bisa memperluas potensi mendapatkan cuan dengan mengikuti webinar “Bedah Bisnis Hantaran Pernikahan dan Praktiknya”. </p>
          </div>

          <div className="mt-14">
            <h1 className="font-semibold text-4xl text-[#0F1D37]"> Materi yang akan dipelajari :  </h1>
            <p className="text-xl mt-3">1. Tips membuat hantaran yang menarik </p>
            <p className="text-xl mt-3">2. Strategi promosi dan iklan </p>
            <p className="text-xl mt-3">3. Praktik singkat pembuatan hantaran </p>
          </div>

          <div className="mt-14">
            <h1 className="font-semibold text-4xl text-[#0F1D37]">Benefit</h1>
            <p className="text-xl mt-3"> 1. E-Certifikat </p>
            <p className="text-xl mt-3"> 2. Group Komunitas Bareng Temen Seperjuangan </p>
            <p className="text-xl mt-3"> 3. Dapat Diskon Untuk Beli Kelas Online </p>
            <p className="text-xl mt-3"> 4. Video Recording + Materi  </p> <br />
          </div>


        </div>

        {/* Kolom 2 */}
        <div className="column-2 col-span-2 xl:mt-0 mt-14">
          <div className="mb-7">
            <h1 className="font-bold text-2xl">Tanggal</h1>
            <p className="text-2xl flex items-center mt-3">
              <BsCalendarEventFill className="text-base mr-5" /> 7 Januari 2023
            </p>
          </div>
          <div className="mb-7">
            <h1 className="font-bold text-2xl">Waktu</h1>
            <p className="text-2xl flex items-center mt-3">
              <BsClockFill className="text-base mr-5" /> 19.00 - 21.00 WIB
            </p>
          </div>
          <div className="mb-7">
            <h1 className="font-bold text-2xl">Lokasi</h1>
            <p className="text-2xl flex items-center mt-3">
              <BsFillGeoAltFill className="text-base mr-5 text-xl" /> Via Zoom
            </p>
          </div>

          <hr className="mb-7" />

          <div className="mb-7">
            <h1 className="font-bold text-2xl">Normal Price</h1>
            <p className="text-2xl flex items-center mt-3">
              <span className="mr-3 line-through">Rp.165.000</span> Rp.105.000
            </p>
          </div>

          <div className="flex justify-center">
            <button className="font-light px-24 xl:py-3 py-3 bg-[#214253] rounded-md text-white text-[16px] xl:mt-0 mt-2 cursor-pointer" onClick={() => window.location.assign("https://docs.google.com/forms/d/e/1FAIpQLSemxmJ7wPoT-5gvF4EUBdwNEo_5pqRc04_9rJz6XpFV1Tq82Q/viewform")} >Gabung webinar</button>
          </div>

          <p className="mt-4"> Yuk, Segera Daftar Jangan Sampai Ketinggalan! Seat terbatas, loh! Tersedia pula diskon khusus untuk 50 Pendaftar Pertama.</p>
        </div>
        {/* End Kolom 2 */}
      </div>
    </div>
  );
};

export default WebinarBisnisHantaran;
