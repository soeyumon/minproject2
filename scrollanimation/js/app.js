// UI
const boxes = document.querySelectorAll('.box');
// console.log(boxes);

function checkboxes(){
    const innerHeight = window.innerHeight / 5 * 4;
    // console.log(innerHeight);
    boxes.forEach(box=>{
        // console.log(box);

        const boxtop = box.getBoundingClientRect().top;
        // console.log(boxtop);

        if(boxtop < innerHeight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}



checkboxes();

window.addEventListener('scroll',checkboxes);