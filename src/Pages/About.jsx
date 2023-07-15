import React from "react";
import { joyful, kegiatan_1, kegiatan_2, kegiatan_3, layanan_1, layanan_2, layanan_3, layanan_4, logo_about } from "../assets/images/about";
import Testimoni from "../Components/Slider/Testimoni";

const About = () => {
  return (
    <div className="mt-40 about">
      <section className="container2 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 headers">
          <div className="flex flex-col pt-0 pr-2 lg:pt-14 xl:pt-28 lg:order-none sm:pt-0 order-1 lg:text-left text-center">
            <h1 className="text-3xl font-bold xl:text-4xl lg:text-2xl leading-[54px] text-[#1E1F4B] tracking-[0.121893px] ">Kenalan Yuk !</h1>
            <p className="text-xl xl:text-xl lg:text-base leading-[30px] text-[#1E1F4B] opacity-80 mt-3 mb-8 ">
              Money Plan adalah salah satu perusahaan konsultan yang mengajarkan edukasi tentang cara memulai dan mengembangkan bisnis bersama mentor di bisnisnya{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img src={joyful} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F7] py-10">
        <div className="text-center container2 mx-auto ">
          <div className="flex justify-center">
            <img src={logo_about} />
          </div>
          <h1 className="font-bold text-[40px] text-[#214253] mb-4">Perjalanan dimulai ketika....</h1>
          <p className="text-[24px] mb-8">
            Cerita dimulai saat Covid-19, saat itu banyak perusahaan yang melakukan PHK karyawan bahkan mengurangi penghasilan mereka. Padahal, kebanyakan penghasilan utama mereka, dari bekerja. Banyak yang belum memikirkan penghasilan
            sampingan.
          </p>
          <p className="text-[24px] mb-8">
            Berawal dari keresahan itu, misi kami agar setiap orang mempunyai kesempatan, akses, pemahaman yang sama tentang cara memulai dan mengembangkan bisnis. Cara menuju kesana, Money Plan membuat suatu produk yang memudahkan untuk
            setiap orang memulai bisnis. Layanan utamanya seperti mentoring untuk memudahkan interaksi mentor dan siswa, selain itu ada webinar dan kelas online yang bisa di akses kapan pun.
          </p>
          <p className="text-[24px] mb-8">
            Berawal dari keresahan itu, misi kami agar setiap orang mempunyai kesempatan, akses, pemahaman yang sama tentang cara memulai dan mengembangkan bisnis. Cara menuju kesana, Money Plan membuat suatu produk yang memudahkan untuk
            setiap orang memulai bisnis. Layanan utamanya seperti mentoring untuk memudahkan interaksi mentor dan siswa, selain itu ada webinar dan kelas online yang bisa di akses kapan pun.
          </p>
          <p className="text-[24px]">Kalian hanya membutuhkan niat "Memulai dengan Cara Dimulai"</p>
          <h2 className="font-semibold text-[26px] text-[#2E3E5C] mt-4">#SemuaBisaBerbisnis</h2>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 xl:grid-cols-2 text-white ">
          <div className="bg-[#214253] text-center flex justify-center py-10 min-h-[600px] ">
            <div className="max-w-[530px] ">
              <h1 className="mb-28 font-bold text-[40px]">VISI</h1>
              <p className="font-medium text-[23px]">Menjadi pilihan utama dalam mewujudkan mimpi masyarakat untuk memulai sebuah bisnis, mengembangkan bisnis serta meningkatkan produktivitas dan efisiensi entrepreneur dalam negeri</p>
            </div>
          </div>
          <div className="bg-[#517C8C] text-center flex justify-center py-10 min-h-[600px]">
            <div className="max-w-[530px] font-medium text-[23px] ">
              <h1 className="mb-8 font-bold text-[40px]">MISI</h1>
              <p className="mb-4 ">Mencetak ribuan pebisnis dalam negeri yang kompeten sesuai minat industri pilihan </p>
              <p className="mb-4">Membantu memberikan solusi inovatif berbagai permasalahan lini bisnis masyarakat Menciptakan layanan produk konsultasi yang berfokus pada meningkatkan kualitas entrepreneur dalam negeri</p>
              <p>Mengembangkan sumber daya yang terampil dan disiplin serta memberikan pelayanan yang maksimal</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container2 mx-auto mt-20">
        <div className="grid  grid-cols-1 xl:grid-cols-7">
          <div className="self-center col-span-3">
            <h1 className="font-bold text-[40px] text-center xl:text-start">Layanan yang bisa kamu nikmati bersama moneyplan</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 col-span-4 xl:ml-6 ml-0">
            <div className="card-layanan text-center py-14 px-5">
              <div className="flex justify-center">
                <img src={layanan_1} />
              </div>
              <h1 className="font-semibold text-[36px] text-[#517C8C]">Konsultasi</h1>
              <p className="">Kegiatan yang akan direkomendasikan Money Plan kalau bisa bingung atau tanya jawab seputar bisnis</p>
            </div>
            <div className="card-layanan text-center py-14 px-5">
              <div className="flex justify-center">
                <img src={layanan_2} />
              </div>
              <h1 className="font-semibold text-[36px] text-[#517C8C]">Webinar</h1>
              <p className="">Kegiatan yang dilakukan rutin setiap bulan dengan materi-materi pilihan dari money plan untuk yang sedang memulai bisnis</p>
            </div>
            <div className="card-layanan text-center py-14 px-5">
              <div className="flex justify-center">
                <img src={layanan_3} />
              </div>
              <h1 className="font-semibold text-[36px] text-[#517C8C]">Kelas Online</h1>
              <p className="">Kegiatan yang komprehensive dan fundamental untuk kamu memulai bisnis bersama mentor moneyplan</p>
            </div>
            <div className="card-layanan text-center py-14 px-5">
              <div className="flex justify-center">
                <img src={layanan_4} />
              </div>
              <h1 className="font-semibold text-[36px] text-[#517C8C]">Mentoring</h1>
              <p className="">Layanan untuk buat bisnis sesuai yang kamu inginkan secara 1-on-1 private ekslusif atau grup seperjuangan kamu bersama mentor moneyplan </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container2 mx-auto ">
        <h1 className="text-center text-[48px] font-bold leading-[60px] text-[#214253] mb-2 mt-16">Galeri Kegiatan</h1>
        <p className="text-center text-[20px] text-[#214253] mb-14"> Beberapa kegiatan yang telah dilakukan oleh team MoneyPlan</p>
        <div className="about-cards grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10 gap-5">
          <div className="about-card px-6 py-8">
            <img src={kegiatan_1} />
            <h6 className="font-semibold text-[#517C8C] mt-4 mb-3 text-sm">Bisnis</h6>
            <h2 className="font-semibold text-[#101828] text-2xl">Cara Memulai Bisnis Dropshipper </h2>
          </div>
          <div className="about-card px-6 py-8">
            <img src={kegiatan_2} />
            <h6 className="font-semibold text-[#517C8C] mt-4 mb-3 text-sm">Bisnis</h6>
            <h2 className="font-semibold text-[#101828] text-2xl">Cara Memulai Bisnis Laundry</h2>
          </div>
          <div className="about-card px-6 py-8">
            <img src={kegiatan_3} />
            <h6 className="font-semibold text-[#517C8C] mt-4 mb-3 text-sm">Bisnis</h6>
            <h2 className="font-semibold text-[#101828] text-2xl">Cara berjualan di platform streaming online</h2>
          </div>
        </div>
      </section>

      <section className="container2 mx-auto my-20">
        <h1 className="text-center mb-8 text-[36px] font-bold text-[#214253]">Cerita dari siswa moneyplan</h1>
        <div className="relative testi">
          <Testimoni />
        </div>
      </section>
    </div>
  );
};

export default About;
