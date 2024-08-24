"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { getKaryawanIdByNomorInduk } = await import("../../libs/utils.js");
    const data = [
      {
        id: "53e8abdf-631f-4cb8-ba80-090c9df6e450",
        nomor_induk: "IP06001",
        tgl_cuti: "2020-08-02T00:00:00.000Z",
        lama_cuti: 2,
        keterangan: "Acara Keluarga",
        karyawan_id: await getKaryawanIdByNomorInduk("IP06001"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "a8ad3a8c-bfd2-4de6-8352-1ad56d3a9880",
        nomor_induk: "IP06001",
        tgl_cuti: "2020-08-18T00:00:00.000Z",
        lama_cuti: 2,
        keterangan: "Anak Sakit",
        karyawan_id: await getKaryawanIdByNomorInduk("IP06001"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "896f0fc9-3b1b-4356-bcbb-c44a7acb2c94",
        nomor_induk: "IP06006",
        tgl_cuti: "2020-08-19T00:00:00.000Z",
        lama_cuti: 1,
        keterangan: "Nenek Sakit",
        karyawan_id: await getKaryawanIdByNomorInduk("IP06006"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "306b2d5f-c3be-40df-90cb-68dffa8b294c",
        nomor_induk: "IP06007",
        tgl_cuti: "2020-08-20T00:00:00.000Z",
        lama_cuti: 1,
        keterangan: "Sakit",
        karyawan_id: await getKaryawanIdByNomorInduk("IP06007"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "23fd0846-0012-46d5-b8b7-71085156047e",
        nomor_induk: "IP06004",
        tgl_cuti: "2020-08-29T00:00:00.000Z",
        lama_cuti: 5,
        keterangan: "Menikah",
        karyawan_id: await getKaryawanIdByNomorInduk("IP06004"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "e0a4d577-d8f1-4155-a42c-9accafac959e",
        nomor_induk: "IP06003",
        tgl_cuti: "2020-08-30T00:00:00.000Z",
        lama_cuti: 2,
        keterangan: "Acara Keluarga",
        karyawan_id: await getKaryawanIdByNomorInduk("IP06003"),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Cutis", data, {});
  },

  async down(queryInterface, Sequelize) {
    // @ts-ignore
    await queryInterface.bulkDelete("Cutis", null, {});
  },
};
