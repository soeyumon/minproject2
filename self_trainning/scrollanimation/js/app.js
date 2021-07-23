// UI
const boxes = document.querySelectorAll('.box');
// console.log(boxes);

function checkimg(){
    const innerHeight = window.innerHeight;
    // console.log(innerHeight);

    boxes.forEach(box=>{
        // console.log(box);
        const boxTop = box.getBoundingClientRect().top / 5 * 4;
        // console.log(boxTop);

        if(boxTop < innerHeight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}
checkimg();

window.addEventListener('scroll',checkimg);