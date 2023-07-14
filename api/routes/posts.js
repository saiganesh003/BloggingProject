import express from "express";
import {addPost} from "../controller/posts.js";

const router=express.Router();

// router.use(express.json)
router.post('/test',addPost);
export default router;