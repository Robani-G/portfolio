import nodemailer from "nodemailer"
import React from "react";

export async function sendmail(formdata:FormData) {
    // const {SMPT_EMAIL,SMPT_PASSWORD}=process.env;
    const sub=formdata.get('subject');
    const message=formdata.get('message');
    const senderEmail=formdata.get('senderemail');


    const transporter = nodemailer.createTransport({
      service:"gmail",
         auth: {
           user: "robanigirma2021@gmail.com"           ,
           pass: "rxbb inrx gpcq drdt",
         },
       });
       try{
        const testResult=await transporter.verify();
        console.log(testResult);
       } catch(error){
        console.log(error)
        return ;
       }
       try {
        if(!sub || typeof sub !=="string"){
          return {error:"invalid sub"}
        }
        if(!message || typeof message !=="string"){
          return {error:"invalid sub"}
        }
       
        const sendresult= await transporter.sendMail({
            from:"robanigirma2021@gmail.com",
            to:"robanigirma2021@gmail.com",
            subject:sub,
            html:message,
         

        })
        console.log(sendresult);
       }
       catch(error)
       {console.log(error)}
       
}

  