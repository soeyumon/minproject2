// UI
const imgcarousel = document.getElementById('imgcarousel');
const imgs = document.querySelectorAll('#imgcarousel img');
console.log(imgs);

const leftbtn = document.getElementById('left'),
      rightbtn = document.getElementById('right');

let idx = 0;

rightbtn.addEventListener('click',()=>{
    idx++;
    // console.log(idx);

    changeimage();

});

leftbtn.addEventListener('click',()=>{
    idx--;
    // console.log(idx);
    changeimage();
    resetInterval();
});

function changeimage(){
    if(idx > imgs.length - 1){
        idx = 0;
    }else if(idx <0){
        idx = imgs.length - 1;
    }

    imgcarousel.style.transform = `translate(${idx * -500}px`;
    // console.log(idx);
}

let interval = setInterval(imgrun, 2000);

function imgrun(){
    idx++;
    changeimage();
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(imgrun,2000);
}