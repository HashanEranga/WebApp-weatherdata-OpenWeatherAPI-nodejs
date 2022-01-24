const exp = require("express")
const app = exp()
const PORT = 3000
const https = require("https")

const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=34fc0872209cf9fd64fd0566b4496eae"

app.get("/", function(req,res){
    https.get(url, function(responce){
        console.log(responce)
    })
    res.send("Server up and running")
})

app.listen(3000, function(){
    console.log(`Server Stated and listening on port : ${PORT}`)
    console.log(`Server URL : http://localhost:${PORT}`)
})