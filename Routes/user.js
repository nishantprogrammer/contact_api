import express from 'express'
import { Userlogin, Userregister } from '../Controllers/user.js';
const router = express.Router();
router.post("/register",Userregister)
router.post("/login",Userlogin)
export default router
