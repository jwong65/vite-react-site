import nodemailer from 'nodemailer';

export default async function handler(req, res){
    if (req.method !=='POST'){
        return res.status(405).json({error: 'Method not allowed'})
    }

    // try{
    //     const{
    //         firstName,
    //         lastName,
    //         email,
    //         company,
    //         role,
    //         interest,
    //         jobTitle,
    //         message,
    //         consent
    //     } = req.body;
    // }

}