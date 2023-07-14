import express from "express";
import {addUser} from "../controller/users.js";

const router=express.Router();

// router.use(express.json)
router.post('/test',addUser);
export default router;