var intro = "Welcome to Formula 1!";
var fname = "Your First name?";
var surname = "Your Last name?";
var age = "Write u'r age?"

var alertINtro = alert(intro);
var alertName = prompt(fname).trim();
var alertSurname = prompt(surname).trim();
var alertAge = prompt(age).trim();

var paragaraph = document.createElement("p") 
paragaraph.textContent = "Info about"; 
document.body.appendChild (paragaraph)

var paragaraph = document.createElement("p") 
paragaraph.textContent = `Player's name : ${alertName}`; 
document.body.appendChild (paragaraph)

var paragaraph = document.createElement("p") 
paragaraph.textContent = `Player's surname : ${alertSurname}` ; 
document.body.appendChild (paragaraph)

var paragaraph = document.createElement("p") 
paragaraph.textContent = `Player's age : ${alertAge}` ; 
document.body.appendChild (paragaraph) 



if(alertAge >=17 && alertAge <= 35) {
  alert("You are participated!")
} 

else if (alertAge > 35 && alertAge <= 60) {
  alert("You are too old :(")
}

else if (isNaN(alertAge)) {
  alert("Write only numbers!")
  paragaraph.textContent = "Write your age)"
}

else {
  alert("You are too young!")
}