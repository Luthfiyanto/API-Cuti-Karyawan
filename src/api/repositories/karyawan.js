import { Karyawan, Cuti, sequelize } from "../models/index.js";
import * as KaryawanModel from "../models/karyawan.js";
import Sequelize from "sequelize";

export function getAllKaryawan() {
  return Karyawan.findAll();
}

/** @param {string} id */
export function getKaryawanById(id) {
  return Karyawan.findByPk(id);
}

/** @param {string} nomorInduk */
export function getKaryawanByNomorInduk(nomorInduk) {
  return Karyawan.findOne({
    where: { nomor_induk: nomorInduk },
  });
}

/** @param {string} nomorInduk */
export function getDetailCutiKaryawanByNomorInduk(nomorInduk) {
  return Karyawan.findOne({
    where: { nomor_induk: nomorInduk },
    include: [
      "cuti",
      {
        model: Cuti,
        as: "cuti",
        attributes: ["id", "nomor_induk", "tgl_cuti", "lama_cuti", "keterangan"],
      },
    ],
  });
}

export function getLastNomorIndukKaryawan() {
  return Karyawan.findOne({
    order: [["nomor_induk", "DESC"]],
    attributes: ["nomor_induk"],
  });
}

/** @param {KaryawanModel.KaryawanAttributes} payload */
export function createKaryawan(payload) {
  return Karyawan.create(payload);
}

/**
 * @param {string} id
 * @param {any} payload
 */
export function updateKaryawan(id, payload) {
  return Karyawan.update(payload, {
    where: { id },
    returning: true,
  });
}

/** @param {string} id */
export function deleteKaryawan(id) {
  return Karyawan.destroy({ where: { id } });
}
