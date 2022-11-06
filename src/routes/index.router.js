import express from "express";
import { createImage } from "../controllers/index.controller.js";

const router = express.Router();

/* GET home page. */
router.post('/', createImage);


export default router;