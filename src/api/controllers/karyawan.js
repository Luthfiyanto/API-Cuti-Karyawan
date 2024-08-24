import { ApplicationError } from "../../libs/error.js";
import * as Types from "../../libs/types/common.js";
import * as KaryawanService from "../services/karyawan.js";

/**
 * @type {Types.Controller}
 * @return {Promise<void>}
 */
export async function getAllKaryawan(req, res) {
  try {
    const data = await KaryawanService.getAllKaryawan();
    res.status(200).json({ data });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * @type {Types.Controller}
 * @return {Promise<void>}
 */
export async function getKaryawanById(req, res) {
  try {
    const { id } = req.params;
    const data = await KaryawanService.getKaryawanById(id);
    res.status(200).json({ data });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * @type {Types.Controller}
 * @return {Promise<void>}
 */
export async function getKaryawanByNomorInduk(req, res) {
  try {
    const { nomorInduk } = req.params;
    const data = await KaryawanService.getKaryawanByNomorInduk(nomorInduk);
    res.status(200).json({ data });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * @type {Types.Controller}
 * @return {Promise<void>}
 */
export async function createKaryawan(req, res) {
  try {
    const payload = req.body;
    const data = await KaryawanService.createKaryawan(payload);
    res.status(201).json({ data });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * @type {Types.Controller}
 * @return {Promise<void>}
 */
export async function updateKaryawan(req, res) {
  try {
    const { id } = req.params;
    const payload = req.body;
    const data = await KaryawanService.updateKaryawan(id, payload);
    res.status(200).json({ data });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * @type {Types.Controller}
 * @return {Promise<void>}
 */
export async function deleteKaryawan(req, res) {
  try {
    const { id } = req.params;
    await KaryawanService.deleteKaryawan(id);
    res.status(200).json({ message: "Data karyawan deleted" });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
}
