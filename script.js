console.log('Script connected.');
// toggle navbar during mobile view
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navlist");

hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle("slide");
});

// introduction text typing animation
// const intro_text = document.querySelector(".intro");
// const text = "Hello, I'm Subashkumar.";
// let index = 0;
  
// const intervalId = setInterval(function(){
//     intro_text.innerHTML += text[index];
//     index++;
//     if(index === text.length){
//         clearInterval(intervalId);
//     }
// }, 300);
  
// // type text in express-skill
const textToChange = document.querySelector(".text_to_change");
const cursor = document.querySelector(".cursor");

const textArray = ["website.", "mobile apps."];
let typingDelay = 300;
let erasingDelay = 100; 
let newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type(){

    if(charIndex < textArray[textArrayIndex].length){
        if(!cursor.classList.contains("typing")){
            cursor.classList.add("typing");
        }
        textToChange.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        cursor.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
 }
// type(); 
function erase(){
    if(charIndex > 0){
        if(!cursor.classList.contains("typing")){
            cursor.classList.add("typing");
        }
        textToChange.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        cursor.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay + 250);
});



