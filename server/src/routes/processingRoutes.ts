import express from "express";
import processing from "../controllers/processing";

const processRouter = express.Router();

processRouter.route("/upload").post(processing.upload);

export default processRouter;
