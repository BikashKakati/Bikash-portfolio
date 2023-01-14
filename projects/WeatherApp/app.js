let apiKey = `8ae7c8fd37c718e448507ee84dc994d8`;

const appContainer = document.querySelector(".app-container"),
inputPart = appContainer.querySelector(".input-part"),
judgeCity = inputPart.querySelector(".judge-city"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button"),
wIcon = appContainer.querySelector(".weather-part img"),
arrowBack = appContainer.querySelector("header i");

let api;



inputField.addEventListener("keyup", e =>{
    
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }

});

locationBtn.addEventListener("click", () =>{
    judgeCity.innerText = "Getting your details...";
    judgeCity.classList.add("pending");
    
    if(navigator.geolocation){ //if browser support geolocation api
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else{
        alert("Your browser not support geolocation api");
    }
});

function onSuccess(position){

    const{latitude, longitude} = position.coords; // getting lat and long of the user device from coords obj
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    fetchData();
}
function onError(error){
    judgeCity.innerText = error.message;
    judgeCity.classList.add("error");
}

function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetchData();

}
function fetchData(){
    judgeCity.innerText = "Getting weather details...";
    judgeCity.classList.add("pending");
    //getting api response and returning it with parsing into js obj and in another
    //then function calling weatherDetails function with passing api result as an argument
    fetch(api)
    .then(response => response.json())
    .then(result =>weatherDetails(result));
}

function weatherDetails(info){
    judgeCity.classList.replace("pending", "error");
    if(info.cod == "404"){
        judgeCity.innerText = `${inputField.value} isn't a valid city name`;
    }
    else{
        // let's get requird properties value from the info object
        const city = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {feels_like, humidity, temp} = info.main;

        if(id == 800){
            wIcon.src = "Weather Icons/clear.svg";
        }
        else if(id >= 200 && id <= 232){
            wIcon.src = "Weather Icons/storm.svg";
        }
        else if(id >= 600 && id <= 622){
            wIcon.src = "Weather Icons/snow.svg";
        }
        else if(id >= 701 && id <= 781){
            wIcon.src = "Weather Icons/haze.svg";
        }
        else if(id >= 801 && id <= 804){
            wIcon.src = "Weather Icons/cloud.svg";
        }
        else if((id >= 300 && id <= 321) || (id >= 500 && id <= 531)){
            wIcon.src = "Weather Icons/rain.svg";
        }

        //let's pass these values to a particular html element
        appContainer.querySelector(".temp .numb").innerText = Math.floor(temp);
        appContainer.querySelector(".weather").innerText = description;
        appContainer.querySelector(".location span").innerText = `${city}, ${country}`;
        appContainer.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        appContainer.querySelector(".humidity span").innerText = `${humidity}%`;

        judgeCity.classList.remove("pending", "error");
        appContainer.classList.add("active");

    }
}

arrowBack.addEventListener("click", () =>{
    appContainer.classList.remove("active");
})