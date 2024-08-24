import express, { json } from "express";
import cors from "cors";
import { HOST_PORT } from "./libs/env.js";
import karyawanRoutes from "./api/routes/karyawan.js";
import cutiRoutes from "./api/routes/cuti.js";

function main() {
  const app = express();
  app.use(cors(), json());

  karyawanRoutes(app);
  cutiRoutes(app);

  app.listen(HOST_PORT, () => {
    console.info(`Server started on port ${HOST_PORT}`);
  });
}

main();
