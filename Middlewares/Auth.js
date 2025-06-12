import jwt from 'jsonwebtoken'
import { User } from '../Models/User.js'
export const isAuthenticated = async (req, res, next) => {
    const token = req.header('Auth')
    if (!token) {
        return res.json(
            {
                message: "Login First"
            }
        )
    }
    const decode = jwt.verify(token, process.env.JWT)
    const id = decode.user;
    console.log(id)
    let user = await User.findById(id)
    if (!user) {
        return res.json("No User Found")
    }
    req.user = user;
    next();


}