const prev = document.getElementById("prev");
const next =document.getElementById('next');
const programphoto = document.getElementById('programphoto');

// next.addEventListener('click')

const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentactive = 1;
next.addEventListener('click',()=>{
    currentactive++;
    // if(currentactive > circles.length){
    //     currentactive = circles.length;
    //     console.log(currentactive);
    // }
    update();
});
prev.addEventListener('click',()=>{
    currentactive--;
    update();
})
function update(){
    circles.forEach((circle,index)=>{
        if(index < currentactive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
        if(currentactive===1){
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

        progress.style.width = ((act/cls) * 100 ) + '%';

        let stylewidth = progress.style.width;

        if(stylewidth === '25%'){
            programphoto.className = "fas fa-file-code fa-3x iconpro";
            document.getElementById('lanname').innerText = "CSS";
        }else if(stylewidth === '50%'){
            programphoto.className = "fab fa-java fa-3x iconpro";
            document.getElementById('lanname').innerText = "Java";
        }else if(stylewidth === '75%'){
            programphoto.className = "fab fa-php fa-3x iconpro";
            document.getElementById('lanname').innerText = "PHP";
        }else if(stylewidth === '100%'){
            programphoto.className = "fas fa-database fa-3x iconpro";
            document.getElementById('lanname').innerText = "Database";
        }else{
            programphoto.className = "fab fa-js fa-3x iconpro";
            document.getElementById('lanname').innerText = "Javascript";
        }

    })
}