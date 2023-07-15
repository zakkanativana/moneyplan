import { Figma, prof_detail, vscode } from "../assets";
import { HiOutlineVideoCamera } from "react-icons/hi";
const DetailsKelas1 = () => {
  return (
    <div className="detail-kelas mt-20">
      <div className="bg"></div>
      <div className="pt-20 text-white text-center ">
        <h6 className="text-xl mb-5">Kelas Online</h6>
        <h1 className="font-bold text-3xl mb-8">
          Inovasi memulai bisnis laundry modern <br /> menggunakan aplikasi
        </h1>
        <div className="flex justify-center items-center">
          <img src={prof_detail} />
          <div className="ml-3">
            <h2 className="text-2xl font-semibold">Krisna Bagus Prasetyo</h2>
            <p className="font-medium text-start text-lg ">Owner Deka Laundry</p>
          </div>
        </div>
      </div>
      <div className="xl:grid grid-cols-6  container2 mx-auto mt-14 gap-x-10 block">
        <div className="column-1 col-span-4">
          <div>
            <h1 className="font-semibold text-4xl text-[#0F1D37]">Deskripsi Kelas</h1>
            <p className="text-xl mt-3">Dikelas ini teman - teman akan belajar tentang pemahaman dasar tentang teknologi </p>
          </div>

          <div className="mt-14">
            <h1 className="font-semibold text-4xl text-[#0F1D37]">Kelas ini cocok untuk kamu : </h1>
            <p className="text-xl mt-3">1. Ingin Membangun Bisnis</p>
            <p className="text-xl mt-3">2. Punya modal 10 juta +++</p>
            <p className="text-xl mt-3">3. Ingin membuat portofolio bisnis</p>
            <p className="text-xl mt-3">4. Ingin punya investor</p>
          </div>

          <div className="mt-14">
            <h1 className="font-semibold text-4xl text-[#0F1D37]">Silabus Pelajaran</h1>
            <div className="text-xl mt-3 flex  items-center text-lg  border-b-2 border-[#838383] pb-2.5 font-medium">
              1.
              <div className="flex items-center text-lg text-[#C7C5C5] w-full justify-between pl-4">
                <p>Pengenalan Database</p>
                <div className="flex items-center text-[#000000]">
                  <HiOutlineVideoCamera className="text-3xl" /> 07:10
                </div>
              </div>
            </div>
            <div className="text-xl mt-3 flex  items-center text-lg  border-b-2 border-[#838383] pb-2.5 font-medium">
              2.
              <div className="flex items-center text-lg text-[#C7C5C5] w-full justify-between pl-4">
                <p>Memahami Perintah dan Sintaks pada DOS</p>
                <div className="flex items-center text-[#000000]">
                  <HiOutlineVideoCamera className="text-3xl" /> 07:10
                </div>
              </div>
            </div>
            <div className="text-xl mt-3 flex  items-center text-lg  border-b-2 border-[#838383] pb-2.5 font-medium">
              3.
              <div className="flex items-center text-lg text-[#C7C5C5] w-full justify-between pl-4">
                <p>Pengenalan Aplikasi Office Administration</p>
                <div className="flex items-center text-[#000000]">
                  <HiOutlineVideoCamera className="text-3xl" /> 07:10
                </div>
              </div>
            </div>
            <div className="text-xl mt-3 flex  items-center text-lg  border-b-2 border-[#838383] pb-2.5 font-medium">
              4.
              <div className="flex items-center text-lg text-[#C7C5C5] w-full justify-between pl-4">
                <p>Memulai Membuat Program Menggunakan C++</p>
                <div className="flex items-center text-[#000000]">
                  <HiOutlineVideoCamera className="text-3xl" /> 07:10
                </div>
              </div>
            </div>
            <div className="text-xl mt-3 flex  items-center text-lg  border-b-2 border-[#838383] pb-2.5 font-medium">
              5.
              <div className="flex items-center text-lg text-[#C7C5C5] w-full justify-between pl-4">
                <p>Final Project</p>
                <div className="flex items-center text-[#000000]">
                  <HiOutlineVideoCamera className="text-3xl" /> 07:10
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h1 className="font-semibold text-4xl text-[#0F1D37]">Benefit</h1>
            <p className="text-xl mt-3">1. Sertifikat</p>
            <p className="text-xl mt-3">2. Portofolio Real Project</p>
            <p className="text-xl mt-3">3. Tutorial Video</p>
          </div>

          <div className="mt-14 ">
            <h1 className="font-semibold text-4xl text-[#0F1D37]">Tools</h1>
            <div className="flex items-center">
              <img src={vscode} alt="" />
              <img src={Figma} alt="" />
            </div>
          </div>
        </div>
        <div className="column-2 col-span-2 grid justify-items-center xl:mt-0 mt-14">
          <h1 className="font-bold text-2xl">Harga</h1>
          <h4 className="font-medium text-3xl xl:mt-0 mt-2">Rp.1.000.000</h4>
          <button className="font-light px-24 xl:py-1 py-3 bg-[#214253] rounded-md text-white text-[16px] xl:mt-0 mt-2" onClick={() => window.location.assign("https://s.id/JoinRahasiaCashFlowLaundry")}>Gabung Kelas</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsKelas1;
