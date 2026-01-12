 const api_key = 'e1f7a8e431e6ce244f860e22e63fc500'

 async function getWeather() {

    let city = document.getElementById('city_name').value

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=
        ${api_key}&units=metric`)

    let result = await response.json()

    let resultDiv= document.getElementById('result')
    resultDiv.innerHTML= `
    <div class= "weather-result">
    <p> Name : ${result.name} </p>
    <p> Temp : ${result.main.temp} °C </p>
    <p> Description : ${result.weather[0].description} </p>
    <p> Wind Speed : ${result.wind.speed} </p>
    </div>
    `
 }

//  Stringyfy and Parse

// let data= {
//     name : 'ali',
//     email : 'ali@gmail.com',
//     age : 20

// }

// let jsonString = JSON.stringify(data)

// console.log(jsonString)

// let parse = JSON.parse(jsonString)

// console.log(parse)