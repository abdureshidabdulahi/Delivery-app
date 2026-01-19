import jwt from 'jsonwebtoken'

const authMiddleWare = async (req,res,next)=>{
            const {token} = req.headers.token
            if(!token){
                return res.json({success:false,message:'not Auth login again'})
            }
            try{
                const token_decode = jwt.verify(token,process.env.JWT_SECRET); 
                console.log('this is the userid',token_decode.id)
                req.body.userId = token_decode.id
                next()

            }catch(err){
                console.log(err)
                res.json({success:false,message:'error inauth'})

            }

}

export default authMiddleWare