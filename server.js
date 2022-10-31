const express = require("express");
const app = express();
const Port = process.env.PORT || 8080;
const postData = require("./routes/postData");

app.use(express.json())

app.use("/post", postData);






app.get("/test",(req,res)=>{
    res.send("TEST PASSED SUCESSFULLY ");
    console.log("test passed sucessfully ..")
})


app.listen(Port,()=>{
    console.log("App running on port 8080 ");
});