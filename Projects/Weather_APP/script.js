// Data
// Variable to store the elements
// Function to get the data from weather app
// Manipluate already created variables
let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const cityName = document.getElementById("cityName");
const stateName = document.getElementById("stateName");
const humidity = document.getElementById("humidity");
const winSpeed = document.getElementById("winSpeed");
const currentTemperature = document.getElementById("currentTemperature");
const weatherStatus = document.getElementById("weatherStatus");
const logoImage = document.getElementById("logoImage");

let getData = async (event)=>{
  event.preventDefault();  
  if(!inputBox.value)
    {
        alert("Please Enter City Name!");
    }

    const city  = inputBox.value;
    // fetch weather details
    const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=0961952445474296b34135229250404&q=${city}`);

    const orgData = await fetchData.json();
    data = orgData;
   console.log(data);
    //displaying data on webApp
    countryName.innerText = data.location.country;
    stateName.innerText = data.location.region;
    cityName.innerText = data.location.name;
    humidity.innerText = data.current.humidity;
    winSpeed.innerText = data.current.wind_kph;
    weatherStatus.innerText = data.current.condition.text;
    currentTemperature.innerText = data.current.temp_c;
    logoImage.src = data.current.condition.icon;
};