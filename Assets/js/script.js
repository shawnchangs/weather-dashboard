const APIKey = "91a96aaccba811d0a271ca34729a5aa8";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function GetInfo() {
    var cityInput = document.getElementById("city-input");
    var searchBtn = document.getElementById("search-button");
    var cityName = document.getElementById("city-name");
    var currentPic = document.getElementById("current-pic");
    var currentTemp = document.getElementById("temperature");
    var currentHumidity = document.getElementById("humidity");4
    var currentWind = document.getElementById("wind");
    var currentUVIndex = document.getElementById("UV-index");
    

//  get city name and search
    function getWeather(cityName) {
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        axios.get(queryURL)
        .then(function(response){
            console.log(response);
        }
            )}        

    searchBtn.addEventListener("click",function() {
        const searchTerm = cityInput.value;
        getWeather(searchTerm);
    })

}
GetInfo();