const app = require("./index");
const mongoose = require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/validatorData");
}

app.listen(5000,async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(err,"There is a error in connecting to server");
    }
    console.log("listenning on port 5000")
})
