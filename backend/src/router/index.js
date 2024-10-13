import { Router } from 'express'
import User from './User.route.js'


const router = Router()



router.use("/user",User);

export default router