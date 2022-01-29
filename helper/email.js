const nodemailer = require("nodemailer");

const sendmail = async () => {
    // create reusable transporter object using the default SMTP transport
    const coba = nodemailer.createTransport({
      host: "smtp.mailgun.org",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "postmaster@sandbox91ea8004c8da4ceeb562a13fec2ceca1.mailgun.org", // generated ethereal user
        pass: "af869c6e7b68c200f2be5073587f1354-d5e69b0b-d339c7bd", // generated ethereal password
      }})
      let info = await coba.sendMail({
          from: '"Admin Yadika 👻" <noreply@yadika.com>', // sender address
          to: "rizkyian78@gmail.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
        console.log("Message sent: %s", info.messageId);
  }

module.exports = sendmail