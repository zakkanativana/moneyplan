import { Figma, prof_detail, vscode } from "../assets";
import { BsCalendarEventFill, BsClockFill, BsFillGeoAltFill } from "react-icons/bs";
import { WebinarCoffeeShop1Profile1, WebinarCoffeeShop1Profile2 } from "../assets/images/webinar";

const WebinarBisnisKecantikan = () => {
  return (
    <div className="mt-20">
      <div className="detail-webinar">
        <div className="bg"></div>
        <div className="pt-20 text-white text-center ">
          <h6 className="text-xl mb-5">  Webinar </h6>
          <h1 className="font-bold text-3xl mb-8">
          Merambah Dunia Content Creator Sebagai Beauty Influencer
          </h1>
          <div className="flex justify-center items-center">
          <img src={WebinarCoffeeShop1Profile2} />
            <div className="ml-3">
              <h2 className="text-2xl font-semibold"> Yohanes Handoyo </h2>
              <p className="font-medium text-start text-lg "> CEO Kopi Uncle Jo </p>
            </div>
          </div>
        </div>
        <div className="xl:grid grid-cols-6  container2 mx-auto mt-14 gap-x-10 block">
          {/* Kolom 1 */}
          <div className="column-1 col-span-4">
            <div>
              <h1 className="font-semibold text-4xl text-[#0F1D37]">Deskripsi webinar</h1>
              <p className="text-xl mt-3 text-justify">
              Menjadi content creator, di era anak muda semakin populer. Nah, peluang ini juga bisa Planner Muda manfaatkan untuk meraih untung maksimal. Yuk, ketahui tips sukses cara memulai menjadi content creator yang bisa memperluas potensi mendapatkan cuan dengan mengikuti IG Live “Merambah Dunia Content Creator Sebagai Beauty Influencer”.
              </p>
            </div>

            <div className="mt-14">
              <h1 className="font-semibold text-4xl text-[#0F1D37]"> Materi yang akan dipelajari : </h1>
              <p className="text-xl mt-3"> 1. Pengenalan singkat background profesi Content Creator </p>
              <p className="text-xl mt-3"> 2. Jangkauan peluang job sebagai Content Creator </p>
              <p className="text-xl mt-3"> 3. Peralatan dan Perlengkapan yang dibutuhkan sebagai Content Creator </p>
              <p className="text-xl mt-3"> 4. Bagaimana cara memproduksi konten sesuai brief/SOW </p>
              <p className="text-xl mt-3"> 5. Bagaimana cara membuat konten yang dapat menginfluence followers</p>
              <p className="text-xl mt-3"> 6. Waktu yang tepat untuk posting konten di media sosial </p>
            </div>



            <div className="mt-14">
              <h1 className="font-semibold text-4xl text-[#0F1D37]">Benefit</h1>
              <p className="text-xl mt-3"> 1. Group Komunitas Bareng Temen Seperjuangan </p>
              <p className="text-xl mt-3"> 2. Dapat Diskon Untuk Beli Kelas Online </p> <br />
              <p>Buruan ikutan Yuk, Set reminder di Akun IGnya! Tersedia pula diskon khusus untuk bagi teman yang ikutan </p>
            </div>
          </div>
          {/* End Kolom 1 */}

          {/* Kolom 2 */}
          <div className="column-2 col-span-1 xl:mt-0 mt-14">
            <div className="mb-7">
              <h1 className="font-bold text-2xl">Tanggal</h1>
              <p className="text-2xl flex items-center mt-3">
                <BsCalendarEventFill className="text-base mr-5" /> 25 Februari 2023
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
                <BsFillGeoAltFill className="text-base mr-5 text-xl" /> Via IG Live
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
              <button className="font-light px-20 xl:py-3 py-3 bg-[#214253] rounded-md text-white text-[16px] xl:mt-0 mt-2 cursor-pointer" onClick={() => window.location.assign("https://www.instagram.com/moneyplan.id/")} > Konfirmasi Gabung webinar </button>
            </div>
          </div>
          {/* End Kolom 2 */}
        </div>
      </div>
    </div>
  );
};

export default WebinarBisnisKecantikan;
