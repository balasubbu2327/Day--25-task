const dataButton = document.getElementById("result");
var cardRow = document.getElementById("cards");

var images = [
  {
image:"https://st4.depositphotos.com/10968552/19890/v/600/depositphotos_198904738-stock-illustration-young-woman-who-became-heatstroke.jpg"
  },
  {
image:"https://southshorestylish.files.wordpress.com/2014/06/rainy-day.jpg"
  },
  {
    image:"https://media.istockphoto.com/vectors/swirling-tornado-in-city-destroy-buildings-vector-id945652046?k=20&m=945652046&s=612x612&w=0&h=zUwlq8RbNt0Q_gdCrcB8iyK9l6kOs_ttDPcbF6DFyMY="
  }];


function getWeather(){
  
  cardRow.innerHTML="";
  
var input = document.getElementById("form").value;
fetch(`https://goweather.herokuapp.com/weather/${input}`)
.then((data)=>(data.json()))
.then((data1)=>{
  console.log(data1)
  
  document.getElementById("temp").innerHTML=`Temprature : ${data1.temperature}`
  document.getElementById("wind").innerHTML=`Wind : ${data1.wind}`
  document.getElementById("des").innerHTML=`Describtion : ${data1.description}`;




//days

for(let i=0; i<data1.forecast.length; i++){
  
  cardRow.innerHTML +=`
  
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                    
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                  <img src=${images[i].image} alt=${data1.description} />
                                </div>
                                <div class="text-container">
                                    <h6 id="day1"> Day ${data1.forecast[i].day}</h6>
                                    <p id="day1-para">${data1.forecast[i].temperature}</p>
                                    <p id="day1-para2">${data1.forecast[i].wind}</p>
                                </div>
                            </div>
                        </div>
                
                </div> `
                
                
                
  
  
}



})
.catch((error)=>{
  console.log(error.message);
})

}
//event Listner
dataButton.addEventListener("click",getWeather);



