import * as KaryawanRepository from "../api/repositories/karyawan.js";
import { ApplicationError, generateApplicationError } from "./error.js";

export async function incrementNomorInduk() {
  try {
    const getLastNomorIndukKaryawan = await KaryawanRepository.getLastNomorIndukKaryawan();
    if (!getLastNomorIndukKaryawan) {
      const newNomorInduk = "IP06001";
      return newNomorInduk;
    }
    const oldNum = getLastNomorIndukKaryawan.dataValues.nomor_induk;
    const oldNumSplit = parseInt(oldNum.split("IP0")[1]);
    const newNum = `IP0${oldNumSplit + 1}`;

    return newNum;
  } catch (err) {
    throw generateApplicationError(err, "Error while generate new nomor induk", 500);
  }
}

/** @param {string} nomor_induk */
export async function getKaryawanIdByNomorInduk(nomor_induk) {
  try {
    const karyawan = await KaryawanRepository.getKaryawanByNomorInduk(nomor_induk);
    if (!karyawan) {
      throw new ApplicationError("Karyawan not found", 404);
    }

    return karyawan.dataValues.id;
  } catch (err) {
    throw generateApplicationError(err, "Error while get karyawan id by nomor induk", 500);
  }
}
