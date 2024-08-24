import { Router } from "express";
import * as Types from "../../libs/types/common.js";
import * as CutiController from "./../controllers/cuti.js";
import * as KMiddleware from "../middlewares/karyawan.js";

/**
 * @type {Types.Route}
 * @returns {void}
 */
export default (app) => {
  const router = Router();
  app.use("/cuti", router);

  router.get("/", CutiController.getAllCuti);
  router.get("/:id", CutiController.getCutiById);
  router.post("/", KMiddleware.isKaryawanExistsByNomorInduk, CutiController.createCuti);
  router.put("/:id", CutiController.updateCuti);
  router.delete("/:id", CutiController.deleteCuti);
};
