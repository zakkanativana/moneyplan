// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
const Testimoni = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
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
        navigation={true}
        modules={[Pagination, Navigation]}
        className="TestiSwipper"
      >
        <SwiperSlide>
          <div className="card-testimoni rounded-lg border-2 px-4 py-6">
            <h1 className="text-[16px]">
              “Penyampaian mentor menarik sesuai yang saya inginkan ”
            </h1>
            <p className="font-bold text-[16px] mt-5"> ~ Nur Arifin </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-testimoni rounded-lg border-2 px-4 py-6">
            <h1 className="text-[16px]">
              “Sangat bermanfaat materi nya untuk saya memulai Bisnis”
            </h1>
            <p className="font-bold text-[16px] mt-5"> ~ Ahmad</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-testimoni rounded-lg border-2 px-4 py-6">
            <h1 className="text-[16px]">
              “Mentor menjawab pertanyaan dengan bahasa yang mudah dipahami”
            </h1>
            <p className="font-bold text-[16px] mt-5"> ~ M.Rayhan Azhari</p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimoni;
