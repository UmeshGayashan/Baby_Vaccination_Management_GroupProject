const express = require("express");
const morgan = require("morgan");
require("./database/connections");
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protectedRoute');
const auth = require('./middleware/auth');


const app = express();

app.use(express.json());


// Routes
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

const port = 4000;
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

app.use("/public",require("./routes/publicRoute"))
app.use("/admin",require("./routes/adminRoute"))
app.use("/healthcare",require("./routes/healthofficerRoute"))

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})