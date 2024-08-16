import nodemailer from "nodemailer"


export const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
         user: 'keezhillamaromal@gmail.com',
         pass: 'spoj tlvr hqbp gopx'
     }
 });
 
 export const sendVerificationEmail = (user, token) => {
     const verificationUrl = `http://localhost:3000/verify/${token}`;
     const mailOptions = {
         from: 'keezhillamaromal@gmail.com',
         to: user.email,
         subject: 'Email Verification',
         text: `hello ${user.firstName},
         happy to see you here
         Please verify your email by clicking on the link: ${verificationUrl}`
     };
 
     transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             console.log(error);
         } else {
             console.log('Email sent: ' + info.response);
             return info.response
         }
     });
 };