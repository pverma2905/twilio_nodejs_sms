require('dotenv').config();
const accountSid = process.env.accountSid
const authToken = process.env.authToken

const client = require('twilio')(accountSid, authToken);

const sendSms = async (body)=>{
    let messageOptions = {
        body: body,
        from: '+17043255452',
        to: `+917982600042` // re 
    }
    try{
     const message = await client.messages.create(messageOptions);
     console.log(message)
    }
    catch(error){
      console.error("err: ",error)
    }
    
   
}

sendSms("Hello Fro Nodejs app")
