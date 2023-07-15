// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
const Filterblog = () => {
  return (
    <div>
      <Swiper
        slidesPerView={6}
        slidesPerGroup={3}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="filterSwipper"
      >
        <SwiperSlide className="mr-5 ">
          <button className="bg-[#517C8C] py-1 px-3 font-semibold text-white rounded-md text-xl">Semua Cerita</button>
        </SwiperSlide>
        <SwiperSlide className="mr-5">
          <button className="border-2 border-[#517C8C] py-1 px-3 font-medium text-[#214253] rounded-md text-xl">Rencana Bisnis </button>
        </SwiperSlide>
        <SwiperSlide className="mr-5">
          <button className="border-2 border-[#517C8C] py-1 px-3 font-medium text-[#214253] rounded-md text-xl">Rekomendasi Bisnis </button>
        </SwiperSlide>
        <SwiperSlide className="mr-5">
          <button className="border-2 border-[#517C8C] py-1 px-3 font-medium text-[#214253] rounded-md text-xl">Strategi Bisnis </button>
        </SwiperSlide>
        <SwiperSlide className="mr-5">
          <button className="border-2 border-[#517C8C] py-1 px-3 font-medium text-[#214253] rounded-md text-xl">Investasi Bisnis </button>
        </SwiperSlide>
        <SwiperSlide className="mr-5">
          <button className="border-2 border-[#517C8C] py-1 px-3 font-medium text-[#214253] rounded-md text-xl">Keuangan & Perpajakan </button>
        </SwiperSlide>
        <SwiperSlide className="mr-5">
          <button className="border-2 border-[#517C8C] py-1 px-3 font-medium text-[#214253] rounded-md text-xl">Keuangan & Perpajakan </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Filterblog;
