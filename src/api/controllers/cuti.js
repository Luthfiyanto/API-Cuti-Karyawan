import * as CutiService from "./../services/cuti.js";
import { ApplicationError } from "./../../libs/error.js";
import * as Types from "./../../libs/types/common.js";

/**
 * @type {Types.Controller}
 * @return {Promise<void>}
 */
export async function getAllCuti(req, res) {
  try {
    const data = await CutiService.getAllCuti();
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
export async function getCutiById(req, res) {
  try {
    const { id } = req.params;
    const data = await CutiService.getCutiById(id);
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
export async function createCuti(req, res) {
  try {
    const payload = req.body;
    const karyawan_id = res.locals.karyawan_id;
    const newPayload = { ...payload, karyawan_id };

    const data = await CutiService.createCuti(newPayload);
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
export async function updateCuti(req, res) {
  try {
    const { id } = req.params;
    const payload = req.body;
    const data = await CutiService.updateCuti(id, payload);
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
export async function deleteCuti(req, res) {
  try {
    const { id } = req.params;
    await CutiService.deleteCuti(id);
    res.status(200).json({ message: "Data cuti has been deleted" });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
}
