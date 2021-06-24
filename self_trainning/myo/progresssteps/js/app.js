// UI
const progress = document.getElementById("progress");

const circles = document.querySelectorAll('.circle');
// console.log("abc");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentactive = 1;

next.addEventListener('click',()=>{
    currentactive++;
    // console.log(circles.length);
    // console.log(currentactive);
    if(currentactive > circles.length){
        currentactive = circles.length;
    }
    update();
    // console.log(currentactive);
})

prev.addEventListener('click',()=>{
    currentactive--;
    if(currentactive<1){
        currentactive = 1;
    }
    update();
});

function update(){
    circles.forEach((circle,index)=>{
        // console.log(circle);
        if(index < currentactive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }

        if(currentactive === 1){
            prev.disabled = true;
        }else if(currentactive === circles.length){
            next.disabled = true;
        }else{
            prev.disabled = false;
            next.disabled = false;
        }

        const actives = document.querySelectorAll('.active');

        let act = actives.length - 1;
        let cls = circles.length - 1;

        //33% and 66%
        progress.style.width = (act / cls) * 100 + "%";
        if(currentactive === 1){
            document.body.style.backgroundImage = "url('img/1.jpg')";
        }else if(currentactive===2){
            document.body.style.backgroundImage = "url('img/2.jpg')";
        }else if(currentactive===3){
            document.body.style.backgroundImage = "url('img/3.jpg')";
        }else if (currentactive === 4){
            document.body.style.backgroundImage = "url('img/4.jpg')";
        }
    });
}