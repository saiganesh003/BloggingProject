import express from "express";
import {login,logout,register} from "../controller/auth.js";

const router=express.Router();

// router.use(express.json)
router.post('/login',login);
router.post('/logout',logout);
router.post('/register',register);


export default router;