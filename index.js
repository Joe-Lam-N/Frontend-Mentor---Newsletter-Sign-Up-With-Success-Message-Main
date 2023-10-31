





//check Valid Email
let inputButtonElement = document.querySelector(".inputEmail");
let emailElement = document.querySelector(".emailAddress");

inputButtonElement.addEventListener("click",checkEmail)

function checkEmail(){
    let email = emailElement.value
    let dotPostion = email.indexOf(".");
    let atPostion = email.indexOf('@');
    let emailLenth = email.length;
    if(atPostion == 0){
        console.error("No recipient name");
        invaildEmail()
    }
    else if(atPostion == -1){
        console.error("No @ sign");
        invaildEmail()
    }
    else if(atPostion+1 == dotPostion){
        console.error("No domain name");
        invaildEmail()
    }
    else if(dotPostion == -1 || dotPostion == emailLenth-1){
        console.error("Top level domain missing")
        invaildEmail()
    }
    else{
        successEmail()
    }
}

function invaildEmail(){
    let inputBox = document.querySelector(".emailAddress");
    let message = document.querySelector(".errorMessage");

    inputBox.style.border = '1px solid red' 
    inputBox.style.backgroundColor = "rgba(247, 127, 127, 0.445)"

    message.style.display = "block"
}
function successEmail(){
    let mainContainerElement = document.querySelector(".container");
    let successMessageContainer = document.querySelector(".successMessage");
    let emailElement = document.querySelector(".emailAddress");
    let successEmailSpan = document.querySelector(".emailChange")

    mainContainerElement.style.display = "none";

    console.log(emailElement.value, successEmailSpan.innerHTML)
    successEmailSpan.innerHTML = emailElement.value+".";


    successMessageContainer.style.display = "flex"

}

// button click to restart
function reset(){

    let inputBox = document.querySelector(".emailAddress");
    inputBox.style.border = '1px solid black' 
    inputBox.style.backgroundColor = "white"

    let message = document.querySelector(".errorMessage");
    message.style.display = "none"

    let successMessageContainer = document.querySelector(".successMessage");
    let mainContainerElement = document.querySelector(".container");
    mainContainerElement.style.display = "grid";
    successMessageContainer.style.display = "none"

    let emailElement = document.querySelector(".emailAddress");
    emailElement.value = '';

}
//Enter to click button
function checkEnter(event){
    if(event.key == "Enter"){
        checkEmail();
    }
}



//desktop and mobile picture change
let image = document.querySelector(".rightContainer");
function screenSize(){
    x  = window.screen.width;
    if(x>375){
        image.innerHTML = `<img src="assets/images/illustration-sign-up-desktop.svg" alt="Desktop Image">`;
    }
    else{
        image.innerHTML = `<img src="assets/images/illustration-sign-up-mobile.svg" alt="Mobile Image">`
    }
}



resetButton = document.querySelector(".reset");
let inputBox = document.querySelector(".emailAddress");

screenSize();
window.addEventListener("resize", screenSize);
resetButton.addEventListener("click",reset)
inputBox.addEventListener("keydown",checkEnter)

