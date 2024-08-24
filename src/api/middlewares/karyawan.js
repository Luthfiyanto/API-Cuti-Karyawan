import * as KaryawanRepository from "../repositories/karyawan.js";
import * as Types from "./../../libs/types/common.js";

/**
 * @type {Types.Middleware}
 */
export async function isKaryawanExistsById(req, res, next) {
  const { id } = req.params;
  const karyawan = await KaryawanRepository.getKaryawanById(id);
  if (!karyawan) {
    return res.status(404).json({ message: "Karyawan not found" });
  }
  next();
}

/**
 * @type {Types.Middleware}
 */
export async function isKaryawanExistsByNomorInduk(req, res, next) {
  const { nomor_induk } = req.body;
  const karyawan = await KaryawanRepository.getKaryawanByNomorInduk(nomor_induk);
  if (!karyawan) {
    return res.status(404).json({ message: "Karyawan not found" });
  }
  res.locals.karyawan_id = karyawan.dataValues.id;
  next();
}
