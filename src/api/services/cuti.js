import * as CutiRepository from "../repositories/cuti.js";
import * as KaryawanRepository from "../repositories/karyawan.js";
import { ApplicationError, generateApplicationError } from "../../libs/error.js";

export async function getAllCuti() {
  try {
    const data = await CutiRepository.getAllCuti();
    if (data.length === 0) {
      throw new ApplicationError("Data cuti not found", 404);
    }
    return data;
  } catch (err) {
    throw generateApplicationError(err, "Error while get data cuti", 500);
  }
}

/** @param {string} id */
export async function getCutiById(id) {
  try {
    const data = await CutiRepository.getCutiById(id);
    if (!data) {
      throw new ApplicationError("Data cuti not found", 404);
    }
    return data;
  } catch (err) {
    throw generateApplicationError(err, "Error while get data cuti by id", 500);
  }
}

/** @param {any} payload */
export async function createCuti(payload) {
  try {
    const { tgl_cuti } = payload;
    const newPayload = {
      ...payload,
      tgl_cuti: new Date(tgl_cuti),
    };
    const data = await CutiRepository.createCuti(newPayload);
    return data;
  } catch (err) {
    throw generateApplicationError(err, "Error while create data cuti", 500);
  }
}

/**
 * @param {string} id
 * @param {any} payload
 */
export async function updateCuti(id, payload) {
  try {
    const [_, data] = await CutiRepository.updateCuti(id, payload);
    return data;
  } catch (err) {
    throw generateApplicationError(err, "Error while update data cuti", 500);
  }
}

/** @param {string} id */
export async function deleteCuti(id) {
  try {
    const data = await CutiRepository.deleteCuti(id);
    return data;
  } catch (err) {
    throw generateApplicationError(err, "Error while delete data cuti", 500);
  }
}
