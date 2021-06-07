const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    // console.log("hay");
    search.classList.toggle("active");
    input.focus();
});

// 5FOCUS WDP1043


