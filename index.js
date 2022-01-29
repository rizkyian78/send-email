const express = require("express")
const app = express()
const sendmail = require("./helper/email")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/send_email", async (req, res) => {
    await sendmail()
    res.json({ message: "created" });
});


app.listen(3000, () => console.log("Listening at port: " + 3000));
  

