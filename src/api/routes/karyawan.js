import { Router } from "express";
import * as Types from "../../libs/types/common.js";
import * as KaryawanController from "../controllers/karyawan.js";
import * as KMiddleware from "../middlewares/karyawan.js";

/**
 * @type {Types.Route}
 * @returns {void}
 */

export default (app) => {
  const router = Router();
  app.use("/karyawan", router);

  router.get("/", KaryawanController.getAllKaryawan);
  router.get("/:id", KaryawanController.getKaryawanById);
  router.get("/code/:nomorInduk", KaryawanController.getKaryawanByNomorInduk);
  router.post("/", KaryawanController.createKaryawan);
  router.put("/:id", KMiddleware.isKaryawanExistsById, KaryawanController.updateKaryawan);
  router.delete("/:id", KMiddleware.isKaryawanExistsById, KaryawanController.deleteKaryawan);
};
