import { Cuti } from "./../models/index.js";
import * as CutiModel from "./../models/cuti.js";

export function getAllCuti() {
  return Cuti.findAll({
    attributes: ["id", "nomor_induk", "tgl_cuti", "lama_cuti", "keterangan"],
  });
}

/** @param {string} id */
export function getCutiById(id) {
  return Cuti.findByPk(id, {
    attributes: ["id", "nomor_induk", "tgl_cuti", "lama_cuti", "keterangan"],
  });
}

/** @param {CutiModel.CutiAttributes} payload */
export function createCuti(payload) {
  return Cuti.create(payload);
}

/**
 * @param {string} id
 * @param {any} payload
 */
export function updateCuti(id, payload) {
  return Cuti.update(payload, {
    where: { id },
    returning: true,
  });
}

/** @param {string} id */
export function deleteCuti(id) {
  return Cuti.destroy({ where: { id } });
}
