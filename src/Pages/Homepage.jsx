import { useNavigate } from "react-router-dom";
import { Bookmark, Classroom, Consultation, Counselor, CurrencyDollar, EmojiHappy, LightBulb, Play, Support, Thumbup, Users, UsersGroup, VideoConference, WA } from "../assets";
import { header, logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7, logo_8 } from "../assets/images/home";
import BlogSlider from "../Components/Slider/BlogSlider";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-40 ">
      {/* Header */}
      <section>
        <div className="container2 mx-auto grid grid-cols-1 lg:grid-cols-2 headers">
          <div className="flex flex-col pt-0 pr-2 lg:pt-5 xl:pt-10 lg:order-none sm:pt-0 order-1 lg:text-left text-center">
            <h1 className="text-3xl font-bold xl:text-4xl lg:text-2xl leading-[54px] text-[#1E1F4B] tracking-[0.121893px]"> Layanan untuk kamu <br/> memulai bisnis sendiri   didampingin mentor terbaik ! </h1>
            <p className="text-xl xl:text-xl lg:text-base leading-[30px] text-[#1E1F4B] opacity-80 mt-3 mb-8 "> Dapatkan penghasilan dari bisnis kamu sendiri di mulai dari sini. </p>
            <div className="flex justify-center md:justify-center lg:justify-start">
              <button className="flex p-4 bg-[#214253] rounded-xl font-medium text-white lg:px-4 lg:py-3" onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}>
                <img src={WA} className="mr-2" alt="wa" />
                Konsultasi
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={header} alt="" />
          </div>
        </div>
      </section>
      {/* End Header */}

      {/* Fasilitas */}
      <section className="mt-2">
        <div className="container2 mx-auto ">
          <h1 className="text-center text-[40px] font-bold leading-[60px] text-[#1E1F4B] mb-10">Fasilitas Moneyplan</h1>
          <div className="fasilitas-group grid grid-cols-3 gap-5">
            <div className="flex items-center facilitas">
              <img src={LightBulb} className="ml-5 py-5 mr-5" />
              <span className=" text-xl leading-[30px] font-medium text-[#214253] md:text-lg"> Konsultasi gratis </span>
            </div>
            <div className="flex items-center facilitas">
              <img src={Support} className="ml-5 py-5 mr-5" />
              <span className=" text-xl leading-[30px] font-medium text-[#214253] md:text-lg"> Langsung Punya Bisnis </span>
            </div>
            <div className="flex items-center facilitas">
              <img src={Users} className="ml-5 py-5 mr-5" />
              <span className=" text-xl leading-[30px] font-medium text-[#214253] md:text-lg"> Dibantu Mentor </span>
            </div>
            <div className="flex items-center facilitas">
              <img src={Play} className="ml-5 py-5 mr-5" />
              <span className=" text-xl leading-[30px] font-medium text-[#214253] md:text-lg">Tutorial Video</span>
            </div>
            <div className="flex items-center facilitas">
              <img src={Bookmark} className="ml-5 py-5 mr-5" />
              <span className=" text-xl leading-[30px] font-medium text-[#214253] md:text-lg ">Modul E-Book</span>
            </div>
            <div className="flex items-center facilitas">
              <img src={UsersGroup} className="ml-5 py-5 mr-5" />
              <span className=" text-xl leading-[30px] font-medium text-[#214253] md:text-lg">Grup Diskusi</span>
            </div>
            <div className="flex items-center facilitas">
              <img src={Support} className="ml-5 py-5 mr-5" />
              <span className=" text-xl leading-[30px] font-medium text-[#214253] md:text-lg ">Support Sistem Bisnis</span>
            </div>
            <div className="flex items-center facilitas">
              <img src={CurrencyDollar} className="ml-5 py-5 mr-5" />
              <span className=" text-xl leading-[30px] font-medium text-[#214253] md:text-lg ">Harga Transparan</span>
            </div>  
            <div className="flex items-center facilitas">
              <img src={Thumbup} className="ml-5 py-5 mr-5" />
              <span className=" text-xl leading-[30px] font-medium text-[#214253] md:text-lg"> Bisa Dimana Saja </span>
            </div>
          </div>
        </div>
      </section>
      {/* End Fasilitas */}

      {/* Layanan */}
      <section className="my-20">
        <div className="container2 mx-auto">
          <h1 className="text-center text-[40px] font-bold leading-[60px] text-[#214253] mb-10">Layanan Moneyplan</h1>
          <div className="layanans grid grid-cols-4 text-[#265361] gap-3 3xl:gap-5">
            {/* Card 1 */}
            <div className="layanan flex flex-col items-center cursor-pointer" onClick={() => navigate("/detailKonsultasi")}>
            <button className="flex p-2 px-5 bg-[#FF8400] rounded-xl text-[14px] text-white" onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}>
                Best Seller
              </button>
              <img src={Consultation} />
              <h1 className="font-semibold text-[32px] leading-[48px] mt-5">Konsultasi</h1>
              <p className="leading-6 text-center mt-1"> Layanan Konsultasi dan Rekomendasi Produk dari Moneyplan </p>
              <div className="h-full flex items-end">
                <button className="button_layanan cursor-pointer" onClick={() => navigate("/detailKonsultasi")} >Konsultasi</button>
              </div>
            </div>
            {/* End Card 1 */}

            {/* Card 2 */}
            <div className="layanan flex flex-col items-center">
              <img src={VideoConference} />
              <h1 className="font-semibold text-[32px] leading-[48px] mt-5">Webinar</h1>
              <p className="leading-6 text-center mt-1">Kegiatan sharing bisnis gratis secara langsung melalui IG Live/Tiktok Live/Youtube Live bersama mentor terbaik moneyplan</p>
              <div className="h-full flex items-end">
                <button className="button_layanan " onClick={() => navigate("/ListWebinar")}>
                  Katalog Webinar
                </button>
              </div>
            </div>
            {/* End Card 2 */}

            {/* Card 3 */}
            <div className="layanan flex flex-col items-center">
              <img src={Classroom} />
              <h1 className="font-semibold text-[32px] leading-[48px] mt-5">Kelas Online</h1>
              <p className="leading-6 text-center mt-1"> Kegiatan yang komprehensive dan fundamental untuk kamu memulai bisnis bersama mentor moneyplan </p>
              <div className="h-full flex items-end">
                <button className="button_layanan " onClick={() => navigate("/kelas-online")}>
                  Katalog Kelas
                </button>
              </div>
            </div>
            {/* End Card 3 */}

            {/* Card 4 */}
            <div className="layanan flex flex-col items-center">
              <img src={Counselor} />
              <h1 className="font-semibold text-[32px] leading-[48px] mt-5">Mentoring</h1>
              <p className="leading-6 text-center mt-1"> Layanan untuk buat bisnis sesuai yang kamu inginkan secara 1-on-1 atau grup seperjuangan kamu bersama mentor moneyplan </p>
              <div className="h-full flex items-end">
                <button className="button_layanan " onClick={() => navigate("/mentor")}>
                  Katalog Mentor
                </button>
              </div>
            </div>
            {/* End card 4 */}
          </div>
        </div>
      </section>
      {/* End Layanan */}

      {/* Blog */}
      <section className=" overflow-hidden" style={{ background: "rgba(38, 83, 97, 0.05)", minHeight: "741px" }}>
        <div className="blog container2 mx-auto relative">
          <div className="left-square"></div>
          <div className="right-square"></div>
          <h1 className="text-center text-[36px] font-bold leading-[54px] text-[#295563] mb-[10px] pt-12">Blog</h1>
          <p className="text-xl leading-[30px] text-[#7D8284] mb-6 text-center">Beberapa bahan bacaan yang berkualitas untuk meningkatkan pengetahuan anda tentang bisnis </p>
          <BlogSlider />
        </div>
      </section>
      {/* End Blog */}

      {/* Partner */}
      <section className="pt-20 bg-[#fff] logos_partner">
        <div className="container2 mx-auto">
          <h1 className="text-center text-[40px] font-bold leading-[60px] text-[#214253] mb-12">
            Dipercaya oleh banyak Pengusaha <br /> Yang Bisa Jadi Mentor Kamu
          </h1>
          <div className="grid grid-cols-4 md:gap-x-16 md:gap-y-8 gap-x-2 gap-y-4 logo_partners">
            <div className="logo_partner">
              <div className="h-full w-full flex justify-center items-center">
                <img src={logo_1} className="absolute" />
              </div>
            </div>
            <div className="logo_partner">
              <div className="h-full w-full flex justify-center items-center">
                <img src={logo_2} className="absolute" />
              </div>
            </div>
            <div className="logo_partner">
              <div className="h-full w-full flex justify-center items-center">
                <img src={logo_3} className="absolute" />
              </div>
            </div>
            <div className="logo_partner">
              <div className="h-full w-full flex justify-center items-center">
                <img src={logo_4} className="absolute" />
              </div>
            </div>
            <div className="logo_partner">
              <div className="h-full w-full flex justify-center items-center">
                <img src={logo_5} className="absolute" />
              </div>
            </div>
            <div className="logo_partner">
              <div className="h-full w-full flex justify-center items-center">
                <img src={logo_6} className="absolute" />
              </div>
            </div>
            <div className="logo_partner">
              <div className="h-full w-full flex justify-center items-center">
                <img src={logo_7} className="absolute" />
              </div>
            </div>
            <div className="logo_partner">
              <div className="h-full w-full flex justify-center items-center">
                <img src={logo_8} className="absolute" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Partner */}

      {/* Promote */}
      <section className="promotes mt-20">
        <div className="container2 mx-auto">
          <div className="promote md:flex justify-between items-center block">
            <div className="lg:text-[20px] font-semibold text-[#2E3E5C] leading-8 opacity-70  text-sm text-center md:text-start">
              Ayo mulai bisnis mu dan mulai <br /> mendapatkan penghasilan dari bisnis sendiri.
            </div>
            <div className="flex justify-center md:justify-end mt-3 md:mt-0">
              <button className="flex p-4 bg-[#214253] rounded-xl font-medium text-white" onClick={() => window.location.assign("https://api.whatsapp.com/send/?phone=%2B6282226108448&text&type=phone_number&app_absent=0")}>
                <img src={WA} className="mr-2" />
                Konsultasi
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Promote */}
      
    </div>
  );
};

export default Homepage;
