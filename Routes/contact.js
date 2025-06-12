import express from 'express'
import { Contact ,contactbyid,contactbyuserid,deletecontactid,getcontact, updatecontactid } from '../Controllers/contact.js'
import { isAuthenticated } from '../Middlewares/Auth.js'
const router = express.Router()
router.post("/new",isAuthenticated,Contact)
router.get("/",getcontact)
router.get("/:id",contactbyid)
router.put("/:id",isAuthenticated,updatecontactid)
router.delete("/:id",isAuthenticated,deletecontactid)
router.get("/userid/:id",contactbyuserid)
export default router;