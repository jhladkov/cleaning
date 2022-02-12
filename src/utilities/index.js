const nodemailer = require('nodemailer')
require('dotenv').config()

let transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass:  process.env.PASSWORD
        },
    },
)

// let mainOption = {
//     from: 'cleaninghouseassistant@gmail.com',
//     to: 'cleaninghouseassistant@gmail.com',
//     subject: 'Клиент прислал письмо!',
//     text: 'eeeeee it is work!!!'
// }


 const mailer = message => {
    transporter.sendMail(message, (err,info) => {
        if (err) {
            console.log('err')
            return console.log('err',err)
        }else {
            console.log('Email sent',info)
        }

    })
}


export default mailer


//
//
// transporter.sendMail(mainOption,(err,data) => {
//     if (err) {
//         console.log('err', err)
//     }else {
//         console.log('email sent !!!')
//     }
// })