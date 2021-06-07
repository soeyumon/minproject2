const text = document.getElementById('text');
// console.log(text);
const speedel = document.getElementById('range');
let idx = 1;
let speed = 50;

const inputtext = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

function autotext(){
    text.innerText = inputtext.slice(0,idx);
    idx++;
    if(idx>inputtext.length){
        idx = 1;
    }
    setTimeout(autotext,speed);
}
autotext();
speedel.addEventListener('click',function(){
    speed = 1000/range.value;
});