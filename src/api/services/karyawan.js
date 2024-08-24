import * as KaryawanRepository from "../repositories/karyawan.js";
import * as utils from "../../libs/utils.js";
import { ApplicationError, generateApplicationError } from "../../libs/error.js";

export async function getAllKaryawan() {
  try {
    const data = await KaryawanRepository.getAllKaryawan();
    if (data.length === 0) {
      throw new ApplicationError("Data karyawan not found", 404);
    }
    return data;
  } catch (err) {
    throw generateApplicationError(err, "Error while get data karyawan", 500);
  }
}

/** @param {string} id */
export async function getKaryawanById(id) {
  try {
    const data = await KaryawanRepository.getKaryawanById(id);
    if (!data) {
      throw new ApplicationError("Data karyawan not found", 404);
    }
    return data;
  } catch (err) {
    throw generateApplicationError(err, "Error while get data karyawan by id", 500);
  }
}

/** @param {string} nomorInduk */
export async function getKaryawanByNomorInduk(nomorInduk) {
  try {
    const data = await KaryawanRepository.getDetailCutiKaryawanByNomorInduk(nomorInduk);
    if (!data) {
      throw new ApplicationError("Data karyawan not found", 404);
    }
    return data;
  } catch (err) {
    throw generateApplicationError(err, "Error while get data karyawan by nomor induk", 500);
  }
}

/** @param {any} payload */
export async function createKaryawan(payload) {
  try {
    const { tgl_lahir, tgl_gabung } = payload;
    const lahir = new Date(tgl_lahir);
    const gabung = new Date(tgl_gabung);

    const newPayload = {
      nomor_induk: await utils.incrementNomorInduk(),
      ...payload,
      tgl_lahir: lahir,
      tgl_gabung: gabung || new Date(),
    };
    const data = await KaryawanRepository.createKaryawan(newPayload);
    return data;
  } catch (err) {
    throw generateApplicationError(err, "Error while create data karyawan", 500);
  }
}

/**
 * @param {string} id
 * @param {any} payload
 */
export async function updateKaryawan(id, payload) {
  try {
    const data = await KaryawanRepository.updateKaryawan(id, payload);
    if (data[0] === 0) {
      throw new ApplicationError("Data karyawan not found", 404);
    }
    const updatedData = data[1][0];
    return updatedData;
  } catch (err) {
    throw generateApplicationError(err, "Error while update data karyawan", 500);
  }
}

/** @param {string} id */
export async function deleteKaryawan(id) {
  try {
    const data = await KaryawanRepository.deleteKaryawan(id);
    if (data === 0) {
      throw new ApplicationError("Data karyawan not found", 404);
    }
    return data;
  } catch (err) {
    throw generateApplicationError(err, "Error while delete data karyawan", 500);
  }
}
