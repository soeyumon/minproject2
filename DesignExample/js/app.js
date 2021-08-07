const trends = document.querySelectorAll('.trend');
const left = document.querySelector('.leftbtn');
const right = document.querySelector('.rightbtn');

let activeslide = 0;

function slideget(activeslide){
    trends.forEach(trend=>{
        trend.classList.remove('active');
    });
    trends[activeslide].classList.add('active');
}

right.addEventListener('click',()=>{
    activeslide++;
    if(activeslide > trends.length-1 ){
        activeslide = 0;
    }
    slideget(activeslide);

});

left.addEventListener('click',()=>{
    activeslide--;
    if(activeslide < 0){
        activeslide = trends.length - 1;
    }
    slideget(activeslide);
})