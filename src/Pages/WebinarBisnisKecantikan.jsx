import { Figma, prof_detail, vscode } from "../assets";
import { BsCalendarEventFill, BsClockFill, BsFillGeoAltFill } from "react-icons/bs";
import { WebinarBisnisKecantikanProfile2 } from "../assets/images/webinar";

const WebinarBisnisKecantikan = () => {
  return (
    <div className="mt-20">
      <div className="detail-webinar">
        <div className="bg"></div>
        <div className="pt-20 text-white text-center ">
          <h6 className="text-xl mb-5">  Webinar </h6>
          <h1 className="font-bold text-3xl mb-8">
          Raih Cuan dengan Bisnis Kecantikan Herbal
          </h1>
          <div className="flex justify-center items-center">
          <img src={WebinarBisnisKecantikanProfile2} />
            <div className="ml-3">
              <h2 className="text-2xl font-semibold"> Wiwi Wiral </h2>
              <p className="font-medium text-start text-lg "> CEO Biotalk </p>
            </div>
          </div>
        </div>
        <div className="xl:grid grid-cols-6  container2 mx-auto mt-14 gap-x-10 block">
          {/* Kolom 1 */}
          <div className="column-1 col-span-4">
            <div>
              <h1 className="font-semibold text-4xl text-[#0F1D37]">Deskripsi webinar</h1>
              <p className="text-xl mt-3 text-justify">
Pertumbuhan pakar kosmetik di Indonesia juga berhasil naik hingga 7 persen di tahun 2021. Di Indonesia sendiri, bahan baku kosmetik herbal sangat melimpah dan murah. Potensi tersebut bisa menjadi peluang Indonesia untuk menyaingi negara seperti China, Korea, dan Indona untuk mengekspor kosmetik dan skincare berbahan herbal ke mancanegara. <br /><br />

Meningkatnya nanoteknologi herbal di Indonesia juga mampu menambah nilai lebih dari segi formulasi, brand, dan penjualan. Nah, peluang yang sangat besar ini bisa menjadi ladang cuan bagi Planner Muda yang ingin melirik bisnis kecantikan herbal. <br /><br />

Bagi Planner Muda yang tertarik untuk memanfaatkan peluang besar ini, yuk, ikuti sesi webinar bersama owner Biotalk, Wiwi Wiral Arbi. Biotalk adalah brand kecantikan lokal yang memproduksi skincare dan bodycare berbahan premium dan herbal. Berdiri sejak 2015, Biotalk kini telah menguasai pasar lokal dan memproduksi puluhan produk, baik untuk pria maupun wanita.

              </p>
            </div>

            <div className="mt-14">
              <h1 className="font-semibold text-4xl text-[#0F1D37]"> Materi yang akan dipelajari : </h1>
              <p className="text-xl mt-3"> 1. Pengenalan Bisnis Sabun Herbal Ala Biotalk </p>
              <p className="text-xl mt-3"> 2. Kenapa Bisnis Sabun Herbal </p>
              <p className="text-xl mt-3"> 3. Memulai Bisnis Sabun Herbal Ala Biotalk </p>
              <p className="text-xl mt-3"> 4. Strategi Target Pasar dan Konsumen Produk Sabun Herbal </p>
            </div>



            <div className="mt-14">
              <h1 className="font-semibold text-4xl text-[#0F1D37]">Benefit</h1>
              <p className="text-xl mt-3"> 1. E-Certifikat </p>
              <p className="text-xl mt-3"> 2. Group Komunitas Bareng Temen Seperjuangan </p>
              <p className="text-xl mt-3"> 3. Dapat Diskon Untuk Beli Kelas Online </p> <br />
              <p>Yuk, Segera Daftar Jangan Sampai Ketinggalan! Seat terbatas, loh! </p>
            </div>
          </div>
          {/* End Kolom 1 */}

          {/* Kolom 2 */}
          <div className="column-2 col-span-1 xl:mt-0 mt-14">
            <div className="mb-7">
              <h1 className="font-bold text-2xl">Tanggal</h1>
              <p className="text-2xl flex items-center mt-3">
                <BsCalendarEventFill className="text-base mr-5" /> 11 Februari 2023
              </p>
            </div>
            <div className="mb-7">
              <h1 className="font-bold text-2xl">Waktu</h1>
              <p className="text-2xl flex items-center mt-3">
                <BsClockFill className="text-base mr-5" /> 19.00 - 20.00 WIB
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
                <span className="mr-3 line-through">Rp.80.000</span> Gratis
              </p>
            </div>

            <div className="flex justify-center">
              <button className="font-light px-20 xl:py-3 py-3 bg-[#214253] rounded-md text-white text-[16px] xl:mt-0 mt-2 cursor-pointer" onClick={() => window.location.assign("https://s.id/WebinarFreeBiotalk")} > Konfirmasi Gabung webinar </button>
            </div>
          </div>
          {/* End Kolom 2 */}
        </div>
      </div>
    </div>
  );
};

export default WebinarBisnisKecantikan;
