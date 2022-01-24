const exp = require("express")
const bodyParser = require("body-parser")
const app = exp()
const PORT = 3000
const https = require("https")
const { urlencoded } = require("express")

app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function(req,res){

    res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req, res){

    const query = req.body.cityName
    const apiKey = "34fc0872209cf9fd64fd0566b4496eae"
    const units = "metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`

    https.get(url, function(responce){
        console.log(responce.statusCode)
        responce.on("data", function(data){
            const weatherData = JSON.parse(data)
            const iconName = weatherData.weather[0].icon
            const URLName = "http://openweathermap.org/img/w/"+iconName+".png"
            res.send(`
                <h1>City : ${weatherData.name}</h1>
                <h1>Description : ${weatherData.weather[0].description}</h1>
                <h1>Tempreture : ${weatherData.main.temp}</h1>
                <h1>Pressure : ${weatherData.main.pressure}</h1>
                <img src="${URLName}"> 
            `)
        })
    })

})

app.listen(3000, function(){
    console.log(`Server Stated and listening on port : ${PORT}`)
    console.log(`Server URL : http://localhost:${PORT}`)
})