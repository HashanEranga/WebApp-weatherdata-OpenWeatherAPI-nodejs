const exp = require("express")

const app = exp()

const PORT = 3000

app.get("/", function(req,res){
    res.send("Server up and running")
})

app.listen(3000, function(){
    console.log(`Server Stated and listening on port : ${PORT}`)
    console.log(`Server URL : http://localhost:${PORT}`)
})