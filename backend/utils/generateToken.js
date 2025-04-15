import jwt from 'jsonwebtoken';


const generateTokenAndCookie = (userId,res) => {
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d'}
)
    res.cookie('jwt',token,{
    httpOnly:true, //cookie cannot be accessed by client side script
    maxAge: 15*24*60*60*1000,
    sameSite: 'strict',//cookie will only be sent in a first-party context
    secure: process.env.NODE_ENV === 'production' ? true : false //cookie will only be set on HTTPS
})
}

export default generateTokenAndCookie;