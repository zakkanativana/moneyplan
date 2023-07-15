import { useNavigate } from "react-router-dom";
import { blog_1, blog_2, blog_3, blog_4, blog_5, blog_6, blog_9, blog_7 } from "../assets/images/blog";


const DetailKonsultasi = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-40">
      <div className="container2 mx-auto relative">
        <h1 className="text-center text-[40px] font-bold leading-[60px] text-[#214253] mb-2 mt-16"> Jasa Konsultasi </h1>
        <p className="text-center text-xl text-[#214253] mb-14"> Memiliki misi Mencetak ribuan pebisnis dalam negeri yang kompeten sesuai minat industri pilihan, Money Plan menawarkan berbagai layanan seperti berikut: </p>


        <div className="blog-group grid grid-cols-3 mt-10 gap-5">

          {/* Card */}
          <div className="card-blog cursor-pointer">
            <img src={blog_9} />

            <h2 className="font-semibold text-[#101828] text-2xl mt-5"> Perencanaan Bisnis   </h2>
            <p className="text-[#667085] mt-2"> Money Plan siap sedia membantu Planner Muda dalam pembuatan proposal bisnis untuk ke bank atau investor. Anda akan dibimbing untuk membuat proposal bisnis yang menarik. </p>
            <div className="flex justify-center mb-5 mt-12">
              <button className="px-8 py-4 rounded-md border-2 mt-5 border-[#265361] text-[#214253] font-medium" onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}> Pesan Jasa Sekarang !</button>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="card-blog cursor-pointer">
            <img src={blog_2} />

            <h2 className="font-semibold text-[#101828] text-2xl mt-5"> Pembuatan SOP </h2>
            <p className="text-[#667085] mt-2"> Dalam sebuah bisnis, dibutuhkan standar operasional khusus agar berjalan lancar. Money Plan juga memiliki tenaga ahli untuk membantu Anda membuat SOP rekrutmen karyawan, membuat kontrak & aturan-aturan yang sesuai dengan perusahaan.
            </p>

            <div className="flex justify-center mb-5">
              <button className="px-8 py-4 rounded-md border-2 mt-5 border-[#265361] text-[#214253] font-medium" onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}> Pesan Jasa Sekarang ! </button>
            </div>

          </div>
          {/* End Card */}

          {/* Card */}
          <div className="card-blog cursor-pointer">
            <img src={blog_5} />

            <h2 className="font-semibold text-[#101828] text-2xl mt-5"> Jasa Virtual Assistant </h2>
            <p className="text-[#667085] mt-2 "> Asisten Virtual dari Money Plan siap membantu Anda dalam pembuatan logo, entry data, hingga update sosial media beserta laporannya. </p> <br />
            <div className="flex justify-center mb-5 mt-12">
              <button className="px-8 py-4 rounded-md border-2 mt-5 border-[#265361] text-[#214253] font-medium" onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}>Pesan Jasa Sekarang !</button>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="card-blog cursor-pointer">
            <img src={blog_4} />

            <h2 className="font-semibold text-[#101828] text-2xl mt-5"> Laporan Keuangan </h2>
            <p className="text-[#667085] mt-2"> Keuangan merupakan tiang utama dalam berdirinya sebuah bisnis. Untuk menjaga kesehatan keuangan perusahaan Anda, tim Money Plan siap membantu dalam pembuatan laporan keuangan serta analisis baik perusahaan & pribadi. </p>
            <div className="flex justify-center mb-5 ">
              <button className="px-8 py-4 rounded-md border-2 mt-5 border-[#265361] text-[#214253] font-medium" onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}>Pesan Jasa Sekarang !</button>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="card-blog cursor-pointer">
            <img src={blog_7} />

            <h2 className="font-semibold text-[#101828] text-2xl mt-5"> Laporan Pajak </h2>
            <p className="text-[#667085] mt-2"> Sering pusing saat mengurus pajak bisnis? Tenang saja! Bersama Money Plan, Anda akan dibantu dalam pembuatan laporan SPT pribadi dan perusahaan, laporan SPT PPh, Laporan SPT PPN/PPNBM, hingga review perpajakan. </p><br />
            <div className="flex justify-center mb-5 ">
              <button className="px-8 py-4 rounded-md border-2 mt-5 border-[#265361] text-[#214253] font-medium" onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}>Pesan Jasa Sekarang !</button>
            </div>
          </div>
          {/* End Card */}



        </div>
      </div>
    </div>
  );
};

export default DetailKonsultasi;
