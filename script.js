// console.log('Script connected.');
// toggle navbar during mobile view
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navlist");
toggle.addEventListener("click" , function(){
   const visibility = navbar.getAttribute("data-visible");
   if(visibility === "false"){
    navbar.setAttribute("data-visible", true);
    toggle.setAttribute("aria-expanded", true);
   }else{
    navbar.setAttribute("data-visible", false);
    toggle.setAttribute("aria-expanded", false);
   }
});

  
// type text in express-skill
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


// Download resume
const downloadButton = document.querySelector('.resume');

downloadButton.addEventListener('click', () => {
  const pdfUrl = 'Subashkumar_S_Resume.pdf'; // Replace with the actual URL of your PDF file

  // Create a link element
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Subashkumar_S_Resume.pdf'; // Specify the desired filename for the downloaded file

  // Trigger a click event on the link
  link.click();
});


