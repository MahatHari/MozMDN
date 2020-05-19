
// creating a onclick function on image 
// image will change if condition matches 

let myImage = document.querySelector('img')
myImage.onclick=function(){
    let mySrc= myImage.getAttribute('src');
    if(mySrc==='/Images/firefox-icon.png'){
        myImage.setAttribute('src', '/Images/Site Icon.png')
    }
    else{
        myImage.setAttribute('src', '/Images/firefox-icon.png')
    }
}

// Adding Button Functionality 

let myButton= document.querySelector('button');
let myHeading = document.querySelector('h1');

// Setting personal Gretting message 

function setUserName(){
    let myName= prompt("Please Enter Your Name: ");
    // Checking if user put name or not, if no name ... 
    // call function again 
    if(!myName || myName===null){
        setUserName()
    }
    localStorage.setItem('name', myName);
    myHeading.textContent= 'Mozilla is cool, ' +myName;
}

// Calling Initialziation Code

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName= localStorage.getItem('name');
    myHeading.textContent= 'Mozzila is cool, ' + storedName;
}

// Creating event handler on click of button
myButton.onclick = function(){
    setUserName();
}
