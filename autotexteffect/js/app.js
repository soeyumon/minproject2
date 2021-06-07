const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
// console.log(speedel);
const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

let idx = 1;
let speed = 50;

function autotext(){
    // console.log('hay');
    textel.innerText = text.slice(0,idx);
    idx++;
    // console.log(text.length);
    if(idx > text.length){
        idx = 1;
    }
    setTimeout(autotext,speed);

}
autotext();

// Event Listener
speedel.addEventListener('click',()=>{
    speed = 2000/speedel.value;
    // console.log(speed);
});

// speed = 1;
// 2000/1 = 2000 = 2
// 2000/50 = 400