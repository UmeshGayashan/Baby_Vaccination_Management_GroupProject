const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
require("./database/connections")

const app = express()
const port = 4000;
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended:false
}))

app.use("/public",require("./routes/publicRoute"))
app.use("/admin",require("./routes/adminRoute"))
app.use("/helathcare",require("./routes/healthofficerRoute"))
app.use("/parent",require("./routes/parentRoute"))

app.listen(port, ()=>{
    console.log(`Server started at post ${port}`)
})