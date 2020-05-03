alert("Welcome!!");
var initBMI = 0;
var category;

var SI = document.getElementById("para1");
var Metric = document.getElementById("para2");

SI.addEventListener("click", function(){

  var weight = prompt("Enter your weight in Kgs ");
  var height = prompt("Enter your height in meters ");
  
  BMI = initBMI + weight / (height * height);
   range();
});


Metric.addEventListener("click", function(){

  var weight = prompt("Enter your weight in lbs");
  var height = prompt("Enter your height in inches");
  
  BMI = initBMI + (703 * weight)/(height * height);
  range();
});

function range(){
  if(BMI < 18.5){
    category = "Under Weight";
  }
  else if(BMI>=18.5 && BMI <= 24.9){
    category = "Normal Weight";
  }
  else if(BMI >=25 && BMI < 29.9){
    category = "Over Weight";
  }
  else{
    category = "Obese";
  }
  
  alert("Your calculated BMI is " + BMI + " and you are under the category: " + category);
}


      
      