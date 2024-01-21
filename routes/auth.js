const express = require('express')
const router = express.Router();
const crypto = require('crypto')
const nodemailer = require('nodemailer')




router.post("/", async (req,res) => {
    
    sendEmail(req.body)
})
const sendEmail = (mail) => {
    const {email,ver_code} = mail
    
   
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "prysta.service@gmail.com", 
            pass: "kqik vfrt dins zpgq", 
        },

    })
  
    const mail_config = {
        from: 'prysta.service@gmail.com', 
        to: email, 
        subject: "Verification code", 
      
        html:`<div>
            <span>P-${ver_code} is your Prysta verification code</span>   
        </div>
        `
    }
    
    transporter.sendMail(mail_config, (err, info) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("Sent" + info.response)
        return res.json( {
            message:`Email sended to ${req.body.email} successfully`,

        })
    })
   
}

module.exports = router