var logInDiv = document.getElementById("logInDiv");
var dataEmailLogIn = document.getElementById("emailLogin");
var dataPasswordLogIn = document.getElementById("passwordLogin");
var myAlert1 = document.getElementById("inputRequired1");
var incorrect = document.getElementById("inputIncorrect");

var dataNameSignUP = document.getElementById("nameSignUp");
var dataEmailSignUP = document.getElementById("emailSignUp");
var dataPasswordSignUP = document.getElementById("passwordSignUp");
var invalidAlert = document.getElementById("inputInvalid");
var myAlert2 = document.getElementById("inputRequired2");
var successAlert = document.getElementById("inputSuccess");
var existsAlert = document.getElementById("alreadyExistsAlert");


var regexName = /^[A-Z][A-Za-z0-9]{1,30}/;
var regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;



    var allDataSignUp = [];



    if (localStorage.getItem("data") != null) {
        allDataSignUp = JSON.parse(localStorage.getItem("data"));
    }



function signUp(){
        if(successAlert.classList.contains("d-block") == true){
          successAlert.classList.replace("d-block", "d-none");
        }

        if(existsAlert.classList.contains("d-block") == true){
          existsAlert.classList.replace("d-block", "d-none");
        }

        if(invalidAlert.classList.contains("d-block") == true) {
          invalidAlert.classList.replace("d-block", "d-none");
        }

        if(myAlert2.classList.contains("d-block") == true) {
          myAlert2.classList.replace("d-block", "d-none");
        }


    if(dataEmailSignUP.value == "" || dataPasswordSignUP.value == "" || dataNameSignUP.value == ""){
        requiredAlert2();
    }


    else if(isValidSignUp(dataNameSignUP.value , dataEmailSignUP.value , dataPasswordSignUP.value) == false){
            if(successAlert.classList.contains("d-block") == true){
              successAlert.classList.replace("d-block", "d-none");
            }

            if(existsAlert.classList.contains("d-block") == true){
              existsAlert.classList.replace("d-block", "d-none");
            }

            if(myAlert2.classList.contains("d-block") == true) {
              myAlert2.classList.replace("d-block", "d-none");
            }

            invalidAlert.classList.replace("d-none", "d-block");
    }



    else{
      if(isSameData() == true){
        if(myAlert2.classList.contains("d-block") == true) {
            myAlert2.classList.replace("d-block", "d-none");
          }

          if(existsAlert.classList.contains("d-block") == true) {
            existsAlert.classList.replace("d-block", "d-none");
          }

          if(invalidAlert.classList.contains("d-block") == true) {
            invalidAlert.classList.replace("d-block", "d-none");
          }

            // Add Data
            successAlert.classList.replace("d-none", "d-block");

            var data ={
                name : dataNameSignUP.value ,
                email : dataEmailSignUP.value ,
                password : dataPasswordSignUP.value
            };

            allDataSignUp.push(data);

            localStorage.setItem("data", JSON.stringify(allDataSignUp));

            clear();
    }

    else{
          if(myAlert2.classList.contains("d-block") == true){
            myAlert2.classList.replace("d-block", "d-none");
          }

          if(successAlert.classList.contains("d-block") == true){
            successAlert.classList.replace("d-block", "d-none");
          }

          if(existsAlert.classList.contains("d-none") == true){
            existsAlert.classList.replace("d-none", "d-block");
          }
      }
  }
}

function logIn(){
    if(dataEmailLogIn.value == "" || dataPasswordLogIn.value == "") {
      if(incorrect.classList.contains("d-block") == true) {
        incorrect.classList.replace("d-block", "d-none");
      }

      requiredAlert1();
    }

    else {
      var checkUp = false;

        for (let i = 0; i < allDataSignUp.length; i++) {
            if( (allDataSignUp[i].email.includes(dataEmailLogIn.value) == true) && (allDataSignUp[i].password.includes(dataPasswordLogIn.value) == true) ){
              checkUp = true;
            }
        }

        if(checkUp == false) {
          if(incorrect.classList.contains("d-block") == true) {
            incorrect.classList.replace("d-block", "d-none");
          }

          if(myAlert1.classList.contains("d-block") == true) {
            myAlert1.classList.replace("d-block", "d-none");
          }

          if(incorrect.classList.contains("d-none") == true) {
            incorrect.classList.replace("d-none", "d-block");
          }
        }

      else if(checkUp == true){

        var user = allDataSignUp.find((dataSignUp) => dataSignUp.email == dataEmailLogIn.value && dataSignUp.password == dataPasswordLogIn.value)

        if(incorrect.classList.contains("d-block") == true) {
          incorrect.classList.replace("d-block", "d-none");
        }

        if(myAlert1.classList.contains("d-block") == true) {
          myAlert1.classList.replace("d-block", "d-none");
        }

        localStorage.setItem('user', JSON.stringify(user))

        location.href = "https://youssefdiaa10.github.io/smartLogin2/html/Welcome/index.html";
      }
    }
}

function clear(){
  // Clear Data
  dataNameSignUP.value = '';
  dataEmailSignUP.value = '';
  dataPasswordSignUP.value = '';
}

function requiredAlert1(){
    //Alert Login
    myAlert1.classList.replace("d-none" , "d-block");
}

function requiredAlert2(){
    //Alert Signup
    myAlert2.classList.replace("d-none" , "d-block");
}

function isValidSignUp(nameValue , emailValue , passwordValue) {
  var dataChecked = true;

  if (regexName.test(nameValue) != true || regexEmail.test(emailValue) != true || regexPassword.test(passwordValue) != true) {
      dataChecked = false;
  }

  return dataChecked;
}

function isSameData(){
    // Check that the Data , which the User enter hasn't been entered before
    var checkDataName = document.getElementById("nameSignUp").value;
    var checkDataEmail = document.getElementById("emailSignUp").value;
    var checkDataPassword = document.getElementById("passwordSignUp").value;

    var dataChecked = true;

    for (var i = 0; i < allDataSignUp.length; i++) {
        if(checkDataName != '' && checkDataEmail != '' && checkDataPassword != '') {
            if(allDataSignUp[i].email.includes(checkDataEmail) == true) {
              dataChecked = false;
            }
        }
    }

    return dataChecked;
}





