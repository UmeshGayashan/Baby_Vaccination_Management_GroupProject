const express = require("express")
const morgan = require("morgan")

const app = express()
const port = 4000;
app.use(morgan("dev"))

app.use("/public",require("./routes/publicRoute"))

app.listen(port, ()=>{
    console.log(`Server started at post ${port}`)
})