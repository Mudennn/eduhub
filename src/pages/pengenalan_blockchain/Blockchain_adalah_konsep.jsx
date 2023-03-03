import React from "react";
import Sidebar from "./Sidebar";

const Prinsip_blockchain = () => {
  return (
    <div className="text-white lg:px-20 mx-auto lg:mt-5 m:max-w-xl md:max-w-full lg:max-w-screen-xl lg:flex lg:flex-row  ">
      <Sidebar />
      <div className="mx-auto w-full z-0">
        <div>
          <h1 className="text-2xl mt-5 ml-5 font-semibold">
            1.2 Blockchain adalah konsep
          </h1>
        </div>
        <div className="mx-5 mt-10">
          <div className="containerVideo aspect-w-16 aspect-h-9">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/zEA3cbJI8io?start=526&end=614"
              title="Pengenalan Blockchain"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mx-5 my-10 ">
          <p>Blockchain ini guna hanya untuk duit ke? No.</p>
          <br></br>
          <p>
            Sebenarnya blockchain hanya konsep. Dia bukan ‘trademark’ dia bukan
            jenama. Dia bukannya ‘blockchain trademark’, bukan ‘paypal
            trademark’. Bukan macam itu. Dia hanya konsep. Sebenarnya apa sahaja
            data boleh disimpan di atas blockchain?
          </p>
          <br />
          <p>
            {" "}
            Contoh. Tahukah kita? Kita punya ‘Covid Vaccination Record’ direkod
            di atas *Blockchain*? Cumanya ini yang kita panggil sebagai private
            Blockchain.
          </p>
          <br />
          <p>
            *Private blockchain* bermaksud, dia punya ‘validator’ adalah terhad
            kepada beberapa orang. Dalam kes ini, maknanya syarikat ‘Pfizer’
            syarikat Sinovac, KKM, pengedar-pengedar tempatan, dan juga kita
            sebagai pengguna.
          </p>
          <br />
          <p>
            So, semua orang boleh tengok rekod itu secara bersama, tapi dia
            tidak buka secara umum kepada luar. Pendidikan? Ada. ‘MyBlockCert’
            dekat Unisza. Sekarang ini semua degree yang dikeluarkan oleh
            Unisza, Degree, Master, PHD direkod di atas blockchain. Cuma namanya
            private blockchain.
          </p>
          <br />
          <p>
            Rekod pilihan raya? Banyak. Kalau kita tengok pada hari ini, banyak
            orang boleh buat ‘validate’. Boleh buat proposal di dalam blockchain
            untuk mengundi. Even banyak universiti pun sekarang buat pilihan
            raya kampus menggunakan blockchain dan of course yang kita bincang
            pada hari ini adalah rekod kewangan yang kita panggil sebagai kripto
            assets dan juga ‘Crypto Currency’.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prinsip_blockchain;
