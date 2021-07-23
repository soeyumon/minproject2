// // UI
const ripples = document.querySelectorAll('.ripple');


let clicktimes = 0;

ripples.forEach(function(ripple){
    ripple.addEventListener('click',function(e){
       createclick(e,ripple);
    })
})

function createclick(e,ripple){
    const circle = document.createElement('span');
        circle.classList.add('circle');
        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cx,cy);

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        // console.log(btntop,btnleft);

        const xinside = cx - btnleft;
        const yinside = cy - btntop;
        // console.log(xinside,yinside);

        circle.style.top = yinside + "px";
        circle.style.left = xinside + "px";

        ripple.appendChild(circle);
}


