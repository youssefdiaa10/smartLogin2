var logInNavBar = document.getElementById("logInNavBar");
var welcomeDiv = document.getElementById("welcomeDiv");
var welcomeH1 = document.getElementById("welcomeH1");
var logOutBtn = document.getElementById("logOutBtn");

var user = JSON.parse(localStorage.getItem("user"));

if(!user){
  window.location.href = "login";
}

var welcomeH1 = document.getElementById("welcomeH1");

welcomeH1.innerText = `Welcome ${user.name}`;


logOutBtn.addEventListener("click", function(){
      location.href = "http://127.0.0.1:5500/html/Login/index.html";
});

