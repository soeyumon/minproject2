// UI
const body = document.body;
const slides = document.querySelectorAll('.slider');

// console.log(slides);
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

let activeslide = 0;

function setbody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}

function setactiveslide(){
    // slides.forEach((slide)=>{
    //     slide.classList.remove('active');
    //     console.log(slide);
    // })

    slides.forEach(slide=>slide.classList.remove('active'));

    slides[activeslide].classList.add('active');
}

rightbtn.addEventListener('click',function(){
    // console.log('hay');
    activeslide++;
    if(activeslide > slides.length - 1){
        activeslide = 0;
    }
    setbody();
    setactiveslide();

});

leftbtn.addEventListener('click',function (){
    activeslide--;
    if(activeslide < 0){
        activeslide = slides.length - 1;
    }
    setbody();
    setactiveslide();
})