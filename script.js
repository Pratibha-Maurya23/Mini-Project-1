//Cursur animation

const cursor = document.querySelector(".cursor");
let timeout;

// Ensure the cursor starts hidden
cursor.style.display = 'none'; 

//cursor movement
document.addEventListener("mousemove",(e) => {
    var x= e.clientX;
    var y = e.clientY;
    cursor.style.top = y + 'px';
    cursor.style.left = x +'px';
    cursor.style.display = 'block';
// stop animation
function mouseStooped(){
    cursor.style.display = 'none';
}
clearTimeout(timeout);
timeout = setTimeout(mouseStooped,2000)
});

//stop animation off the screen
document.addEventListener("mouseout",() =>{
   cursor.style.display = 'none';
});

// ------------------------------------------------------------

// Header Toogle

let menubtn = document.getElementById('MenuBtn');
menubtn.addEventListener('click', function (){
    document.querySelector('.nav-bar').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

// background imgages
let array = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg'];
let i = 0;

function imgesSlider() {
    document.getElementById("imges").src = array[i];
    if (i < (array.length - 1)) {
        i++;
    } else {
        i = 0;
    }
}

setInterval(imgesSlider, 1000); 

// ---------------------------------------------------------------------------------------------------------------
// Typing Effect
let typed = new Typed('.auto-input',{
    strings: ['Krida Kaushal'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 200,
    loop: true,
}); 

// --------------------------------------------------------------------------------------------------------------
// Typing Effect
const text = `Platform connecting players and organizers, showcasing sports events, enabling enrollments, and fostering collaboration seamlessly.`;

const typingElement = document.getElementById("typing");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text[index];
    index++;

    // Check if it's time to move to the next line
    if (typingElement.offsetWidth >= typingElement.parentElement.offsetWidth && text[index - 1] === " ") {
      typingElement.innerHTML += "<br>"; // Move to the next line
    }

    setTimeout(typeText, 99); // Adjust typing speed (in milliseconds)
  }
}

typeText();


// ------------------------------------------------------------------------------------------------------------
// =========================== Animated about section =========================================

document.addEventListener("DOMContentLoaded", () => {
    const box1 = document.querySelector("#about .container .box-1");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          box1.style.animation = "rotatingwall1 2s ease-out";
        }
      });
    });
  
    observer.observe(box1);
  });


  document.addEventListener("DOMContentLoaded", () => {
    const box2 = document.querySelector("#about .container .box-2");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          box2.style.animation = "rotatingwall2 2s ease-out";
        }
      });
    });
  
    observer.observe(box2);
  });