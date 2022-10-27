var inputele=document.getElementById("location-input");
var btnele=document.getElementById("btn");
var tempele=document.getElementById("tempval");
var weatherdescele=document.getElementById("weatherdesc");
var locationele=document.getElementById("location");

const apikey="4d8fb5b93d4af21d66a2948710284366";
btnele.onclick=function()
{
if(inputele.value=="")
{
alert("please enter any location to proceed!!!")

}
else{
var locin=inputele.value;
var url = `https://api.openweathermap.org/data/2.5/weather?q=${locin}&appid=${apikey}`

fetch(url)
.then(res => res.json())
.then(data =>{
    console.log(data);
    var {name}=data;
    var {feels_like}=data.main;
    var {description}=data.weather[0];
    tempele.innerText=Math.floor(feels_like-273);
    locationele.innerText=name;
    weatherdescele.innerText=description;
});
}
}


