let key="9b95a468a3754c4492d134547232512";
let container=document.querySelector("#container");
let card=document.querySelector("#card");

let btn= document.querySelector("#btn");
let input=document.querySelector("#input")

btn.addEventListener("click",()=>{

  let querry=input.value;
  input.value="";
  getData(querry);
})




async function getData(querry="gwalior"){
    let data= await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${querry}&aqi=no`);
    let obj= await data.json();
    console.log(obj);
    ScreenUpdateKardo(obj);
} 

getData("gwalior");

// let btn=document.querySelector("#btn")


function ScreenUpdateKardo(obj){

  

  let city=obj.location.name;
  let time=obj.location.localtime;
  let temp=obj.current.temp_c;
  let icon=obj.current.condition.icon;
  let climate=obj.current.condition.text;
  let humidity=obj.current.humidity;
 
    card.innerHTML=`<div id="box1">
    <div>${city}</div>
    <div>${time}</div>
  </div>
  <div id="box2">
    <img

    <div>${temp}
    </div>
    <img id="icon" src=${icon} alt="">
  </div>
  <div id="box3">
    <div>Humidity: ${humidity}</div>
    <div>${climate}</div>
  </div>`
 


}
// ScreenUpdateKardo();