import { Figma, prof_detail, vscode } from "../assets";
import { BsCalendarEventFill, BsClockFill, BsFillGeoAltFill } from "react-icons/bs";
import { detailWebinar4 } from "../assets/images/webinar";

const DetailWebinar4 = () => {
  return (
    <div className="mt-20">
      <div className="detail-webinar">
        <div className="bg"></div>
        <div className="pt-20 text-white text-center ">
          <h6 className="text-xl mb-5">  Webinar </h6>
          <h1 className="font-bold text-3xl mb-8">
            Bisnis Minuman Kesehatan <br /> Dengan Jutaan Strategi Didalamnya
          </h1>
          <div className="flex justify-center items-center">
            <img src={detailWebinar4} />
            <div className="ml-3">
              <h2 className="text-2xl font-semibold"> Septri Susanto Satya Putra </h2>
              <p className="font-medium text-start text-lg "> OWNER @sekeca.official </p>
            </div>
          </div>
        </div>
        <div className="xl:grid grid-cols-6  container2 mx-auto mt-14 gap-x-10 block">
          {/* Kolom 1 */}
          <div className="column-1 col-span-4">
            <div>
              <h1 className="font-semibold text-4xl text-[#0F1D37]">Deskripsi webinar</h1>
              <p className="text-xl mt-3">Pada sesi ini kita akan membahas bagaimana peluang untuk memulai bisnis minuman, dengan konteks sehat. Yang mana konteks kesehatan ini menjadi perhatian utama dengan hadirnya Covid 19. Selain fokus pada produk, brand, dan sellingnya, tetapi juga kita harus sadar dan memperhatikan bahwa bisnis f&b mempunyai komunitas yang luas. Dapat masuk kedalam jenis kegiatan apapun, sehingga dapat memperluas jaringan, menambah relasi. Pada dasarnya bisnis itu yang menentukan adalah jaringan, dan juga relasi. Produk yang baik adalah faktor yang mempermudah bisnismu agar lebih mudah berkembang dan dikenal pasar. Jadi tetaplah pada jalur basic berbisnis, yaitu jaringan dan relasi.
              </p>
            </div>

            <div className="mt-14">
              <h1 className="font-semibold text-4xl text-[#0F1D37]"> Materi yang akan dipelajari : </h1>
              <p className="text-xl mt-3"> 1. Kenapa bisnis minuman? kenapa harus sehat? </p>
              <p className="text-xl mt-3"> 2. Diferesiansi jenis bisnis </p>
              <p className="text-xl mt-3"> 3. Opportunity minuman sehat </p>
              <p className="text-xl mt-3"> 4. Optimasi strategi pemasaran </p>
            </div>



            <div className="mt-14">
              <h1 className="font-semibold text-4xl text-[#0F1D37]">Benefit</h1>
              <p className="text-xl mt-3"> 1. E-Certifikat </p>
              <p className="text-xl mt-3"> 2. Group Komunitas Bareng Temen Seperjuangan </p>
              <p className="text-xl mt-3"> 3. Dapat Diskon Untuk Beli Kelas Online </p>
            </div>
          </div>
          {/* End Kolom 1 */}

          {/* Kolom 2 */}
          <div className="column-2 col-span-1 xl:mt-0 mt-14">
            <div className="mb-7">
              <h1 className="font-bold text-2xl">Tanggal</h1>
              <p className="text-2xl flex items-center mt-3">
                <BsCalendarEventFill className="text-base mr-5" /> 10 Desember 2022
              </p>
            </div>
            <div className="mb-7">
              <h1 className="font-bold text-2xl">Waktu</h1>
              <p className="text-2xl flex items-center mt-3">
                <BsClockFill className="text-base mr-5" /> 19.00 - 20.30 WIB
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
                <span className="mr-3 line-through">Rp.80.000</span> Rp.70.000
              </p>
            </div>

            <div className="mb-7">
              <h1 className="font-bold text-2xl"> Intruksi Pembayaran </h1> <br />
              <h1 className="text-2xl"> Transfer Bank </h1>
              <p className="text-1xl flex items-center mt-3"> Jaringan Perencana Keuangan Indonesia </p>
              <p className="text-1xl flex items-center mt-3"> MANDIRI : 137-001-8399-861 </p>
            </div>



            <div className="flex justify-center">
              <button className="font-light px-20 xl:py-3 py-3 bg-[#214253] rounded-md text-white text-[16px] xl:mt-0 mt-2 cursor-pointer" onClick={() => window.location.assign("https://s.id/WebinarStrategiBisnisMinuman")} > Konfirmasi Gabung webinar </button>
            </div>
          </div>
          {/* End Kolom 2 */}
        </div>
      </div>
    </div>
  );
};

export default DetailWebinar4;
