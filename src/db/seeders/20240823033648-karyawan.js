"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        id: Sequelize.fn("gen_random_uuid"),
        nomor_induk: "IP06001",
        nama: "Agus",
        alamat: "Jln Gaja Mada no 12, Surabaya",
        tgl_lahir: new Date("1980-01-11"),
        tgl_gabung: new Date("2005-08-07"),
      },
      {
        id: Sequelize.fn("gen_random_uuid"),
        nomor_induk: "IP06002",
        nama: "Amin",
        alamat: "Jln Imam Bonjol no 11, Mojokerto",
        tgl_lahir: new Date("1977-12-03"),
        tgl_gabung: new Date("2005-08-07"),
      },
      {
        id: Sequelize.fn("gen_random_uuid"),
        nomor_induk: "IP06003",
        nama: "Alyssa",
        alamat: "Jln Bungur Sari V no 166, Bandung",
        tgl_lahir: new Date("1983-03-18"),
        tgl_gabung: new Date("2006-08-07"),
      },
      {
        id: Sequelize.fn("gen_random_uuid"),
        nomor_induk: "IP06004",
        nama: "Maulana",
        alamat: "Jln Candi Agung, No 78 Gg 5, Jakarta",
        tgl_lahir: new Date("1978-11-10"),
        tgl_gabung: new Date("2010-09-10"),
      },
      {
        id: Sequelize.fn("gen_random_uuid"),
        nomor_induk: "IP06005",
        nama: "Agfika",
        alamat: "	Jln Nangka, Jakarta Timur",
        tgl_lahir: new Date("1979-02-07"),
        tgl_gabung: new Date("2007-01-02"),
      },
      {
        id: Sequelize.fn("gen_random_uuid"),
        nomor_induk: "IP06006",
        nama: "James",
        alamat: "Jln Merpati, 8 Surabaya",
        tgl_lahir: new Date("1989-05-18"),
        tgl_gabung: new Date("2007-04-04"),
      },
      {
        id: Sequelize.fn("gen_random_uuid"),
        nomor_induk: "IP06007",
        nama: "Octavian",
        alamat: "Jln A Yani 17, B 08 Sidoarjo",
        tgl_lahir: new Date("1985-04-14"),
        tgl_gabung: new Date("2007-05-19"),
      },
      {
        id: Sequelize.fn("gen_random_uuid"),
        nomor_induk: "IP06008",
        nama: "Dewi",
        alamat: "Jln Kaliurang KM 5, Yogyakarta",
        tgl_lahir: new Date("1982-06-09"),
        tgl_gabung: new Date("2008-01-04"),
      },
      {
        id: Sequelize.fn("gen_random_uuid"),
        nomor_induk: "IP06009",
        nama: "Rudi",
        alamat: "Jln Duren tiga 167, Jakarta Selatan",
        tgl_lahir: new Date("1984-01-01"),
        tgl_gabung: new Date("2008-01-16"),
      },
      {
        id: Sequelize.fn("gen_random_uuid"),
        nomor_induk: "IP06010",
        nama: "Raisa",
        alamat: "Jln Kelapa Sawit, Jakarta Selatan",
        tgl_lahir: new Date("1990-12-17"),
        tgl_gabung: new Date("2008-08-16"),
      },
    ];
    await queryInterface.bulkInsert("Karyawans", data, {});
  },

  async down(queryInterface, Sequelize) {
    // @ts-ignore
    await queryInterface.bulkDelete("Karyawans", null, {});
  },
};
