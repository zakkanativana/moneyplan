import { useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { blog_1, blog_2, blog_3 } from "../../assets/images/home";

const BlogSlider = () => {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        style={{
          position: "static",
          maxWidth: "950px",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-[#fff] rounded-md p-6 blog-card cursor-pointer" onClick={() => navigate("/detail-blog1")}>
            <div className="flex justify-center">
              <img src={blog_1} />
            </div>
            <div>
              <h1 className="font-semibold text-[22px] leading-[33px] text-[#295563] mt-2.5 mb-2.5">Cara Memulai Bisnis untuk Pemula</h1>
              <p className="text-[#5B5959]">Cara memulai bisnis untuk pemula selalu menjadi informasi yang dicari banyak orang. Hal ini tidak mengherankan sebab keinginan untuk memiliki bisnis sendiri telah menjadi trend... </p>
              <div className="flex justify-center">
                <button className="px-8 py-4 rounded-md border-2 mt-5 border-[#265361] text-[#214253] font-medium">Baca Selengkapnya</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[#fff] rounded-md p-6 blog-card cursor-pointer" onClick={() => navigate("/detail-blog2")}>
            <div className="flex justify-center">
              <img src={blog_2} />
            </div>
            <div>
              <h1 className="font-semibold text-[22px] leading-[33px] text-[#295563] mt-2.5 mb-2.5">Cara Mudah Optimasi Penjualan</h1>
              <p className="text-[#5B5959]">Ingin bisnis terus berkembang? Nah, Planner Muda harus memahami cara optimasi penjualan. Yah, optimasi penjualan sangat penting untuk perkembangan bisnis kita....</p>
              <div className="flex justify-center">
                <button className="px-8 py-4 rounded-md border-2 mt-5 border-[#265361] text-[#214253] font-medium">Baca Selengkapnya</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[#fff] rounded-md p-6 blog-card cursor-pointer" onClick={() => navigate("/detail-blog3")}>
            <div className="flex justify-center">
              <img src={blog_3} />
            </div>
            <div>
              <h1 className="font-semibold text-[22px] leading-[33px] text-[#295563] mt-2.5 mb-8"> Tips Memaksimalkan Bisnis Minuman Sehat <br/> 
              </h1>
              <p className="text-[#5B5959]">Gaya hidup sehat tampaknya sedang menjadi sebuah trend yang merambah dunia. Bila sebelumnya konsep usaha minuman segar dan sehat ini banyak muncul di Indonesia...</p>
              <div className="flex justify-center">
                <button className="px-8 py-4 rounded-md border-2 mt-5 border-[#265361] text-[#214253] font-medium">Baca Selengkapnya</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BlogSlider;
