import { mentor_1, mentor_2, mentor_3, mentor_4, Mentor_Vilora, Mentor_WiwiWiral } from "../assets/images/mentor";

const Mentorpage = () => {
  return (
    <div className="mt-40">
      <div className="container2 mx-auto mentor">
        <h1 className="text-center text-[40px] font-bold leading-[60px] text-[#214253] mb-2 mt-16">Mentor Money Plan</h1>
        <p className="text-center text-xl text-[#214253] mb-14">
          Sebelum resmi di publikasi sebagai mentor. Seluruh mentor moneyplan <br /> sudah dilakukan proses screening, kerjasama oleh team moneyplan.
        </p>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="grid justify-items-center card-mentor">
            <img className="rounded" src={Mentor_WiwiWiral} />
            <h1 className="text-[#517C8C] text-2xl font-extrabold mt-10 text-center"> Wiwi Wiral </h1>
            <p className="text-[#214253] text-lg font-medium mt-2 text-center mb-7"> CEO Biotalk </p>
            {/* <div className="mt-5 mb-7">
              <button className="bg-[#214253] py-2.5 px-14 text-white font-medium rounded-md">Detail </button>
            </div> */}
          </div>
          <div className="grid justify-items-center card-mentor">
            <img className="rounded" src={Mentor_Vilora} />
            <h1 className="text-[#517C8C] text-2xl font-extrabold mt-10 text-center"> Vilora Lista  </h1>
            <p className="text-[#214253] text-lg font-medium mt-2 text-center mb-7"> OWNER @Vlora Decorations </p>
            {/* <div className="mt-5 mb-7">
              <button className="bg-[#214253] py-2.5 px-14 text-white font-medium rounded-md">Detail </button>
            </div> */}
          </div>
          <div className="grid justify-items-center card-mentor">
            <img className="rounded" src={mentor_4} />
            <h1 className="text-[#517C8C] text-2xl font-extrabold mt-10 text-center"> Septri Susanto Satya Putra  </h1>
            <p className="text-[#214253] text-lg font-medium mt-2 text-center mb-7"> OWNER @sekeca.official </p>
            {/* <div className="mt-5 mb-7">
              <button className="bg-[#214253] py-2.5 px-14 text-white font-medium rounded-md">Detail </button>
            </div> */}
          </div>
          <div className="grid justify-items-center card-mentor">
            <img className="rounded" src={mentor_3} />
            <h1 className="text-[#517C8C] text-2xl font-extrabold mt-10 text-center"> Cindy Ciewie </h1>
            <p className="text-[#214253] text-lg font-medium mt-2 text-center mb-7"> OWNER @ciewiehomedress </p>
            {/* <div className="mt-5 mb-7">
              <button className="bg-[#214253] py-2.5 px-14 text-white font-medium rounded-md">Detail </button>
            </div> */}
          </div>
          <div className="grid justify-items-center card-mentor">
            <img className="rounded" src={mentor_1} />
            <h1 className="text-[#517C8C] text-2xl font-extrabold mt-10 text-center"> Satrio Rahargian </h1>
            <p className="text-[#214253] text-lg font-medium mt-2 text-center mb-7"> OWNER Ruang Rindu Cafe</p>
            {/* <div className="mt-5 mb-7">
              <button className="bg-[#214253] py-2.5 px-14 text-white font-medium rounded-md">Detail </button>
            </div> */}
          </div>
          <div className="grid justify-items-center card-mentor">
            <img className="rounded" src={mentor_2} />
            <h1 className="text-[#517C8C] text-2xl font-extrabold mt-10 text-center"> Krisna Bagus Prasetyo </h1>
            <p className="text-[#214253] text-lg font-medium mt-2 text-center mb-7"> OWNER Deka Laundry </p>
            {/* <div className="mt-5 mb-7">
              <button className="bg-[#214253] py-2.5 px-14 text-white font-medium rounded-md">Detail </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorpage;
