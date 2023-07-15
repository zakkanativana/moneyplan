import { useNavigate } from "react-router-dom";
import { blog_1, blog_2, blog_3, blog_4, blog_5, blog_6 } from "../assets/images/blog";
import Filterblog from "../Components/Slider/Filterblog";


const Blogpage = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-40">
      <div className="container2 mx-auto relative">
        <h1 className="text-center text-[40px] font-bold leading-[60px] text-[#214253] mb-2 mt-16">Blog</h1>
        <p className="text-center text-xl text-[#214253] mb-14"> Bahan bacaan buat nambah wawasan bisnis kamu</p>
        <div className="relative filter">
          <Filterblog />
        </div>

        <div className="blog-group grid grid-cols-3 mt-10 gap-5">
          {/* Card */}
          <div className="card-blog cursor-pointer" onClick={() => navigate("/detail-blog1")}>
            <img src={blog_1} />
            <h6 className="font-semibold text-[#517C8C] mt-4 mb-3 text-sm">Bisnis</h6>
            <h2 className="font-semibold text-[#101828] text-2xl">Cara Memulai Bisnis untuk Pemula </h2>
            <p className="text-[#667085] mt-2">Cara memulai bisnis untuk pemula selalu menjadi informasi yang dicari banyak orang. Hal ini tidak mengherankan sebab keinginan untuk memiliki bisnis sendiri telah menjadi trend... </p>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="card-blog cursor-pointer" onClick={() => navigate("/detail-blog2")}>
            <img src={blog_2} />
            <h6 className="font-semibold text-[#517C8C] mt-4 mb-3 text-sm">Perencanaan</h6>
            <h2 className="font-semibold text-[#101828] text-2xl">Cara Mudah Optimasi Penjualan</h2>
            <p className="text-[#667085] mt-2">Ingin bisnis terus berkembang? Nah, Planner Muda harus memahami cara optimasi penjualan. Yah, optimasi penjualan sangat penting untuk perkembangan bisnis kita....</p>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="card-blog cursor-pointer" onClick={() => navigate("/detail-blog3")}>
            <img src={blog_3} />
            <h6 className="font-semibold text-[#517C8C] mt-4 mb-3 text-sm">Bisnis</h6>
            <h2 className="font-semibold text-[#101828] text-2xl">Tips Memaksimalkan Bisnis Minuman Sehat</h2>
            <p className="text-[#667085] mt-2">Gaya hidup sehat tampaknya sedang menjadi sebuah trend yang merambah dunia. Bila sebelumnya konsep usaha minuman segar dan sehat ini banyak muncul di Indonesia... </p>
          </div>
          {/* End Card */}

          <div className="card-blog">
            <img src={blog_4} />
            <h6 className="font-semibold text-[#517C8C] mt-4 mb-3 text-sm">Bisnis</h6>
            <h2 className="font-semibold text-[#101828] text-2xl">Investasi bodong bikin resah, pahami 5 ciri-cirinya</h2>
            <p className="text-[#667085] mt-2">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          </div>
          <div className="card-blog">
            <img src={blog_5} />
            <h6 className="font-semibold text-[#517C8C] mt-4 mb-3 text-sm">Perencanaan</h6>
            <h2 className="font-semibold text-[#101828] text-2xl">Manfaat Asisten Virtual untuk Bisnis</h2>
            <p className="text-[#667085] mt-2">Tips memaksimalkan bisnis minuman sehat juga perlu Planner Muda pahami, loh...</p>
          </div>
          <div className="card-blog">
            <img src={blog_6} />
            <h6 className="font-semibold text-[#517C8C] mt-4 mb-3 text-sm">Bisnis</h6>
            <h2 className="font-semibold text-[#101828] text-2xl">Strategi Bisnis Korean Street Food di Indonesia</h2>
            <p className="text-[#667085] mt-2">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
