const panels = document.querySelectorAll('.panel');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('show-nav');
})

panels.forEach((panel)=>{
    panel.addEventListener('mouseenter',()=>{
        removepreflexclass();
        panel.className = "panel active";
    });
    panel.addEventListener('mouseleave',()=>{
        removepreflexclass();
    });
})
function removepreflexclass(){
    panels.forEach((panel)=>{
        panel.className = "panel";
    })
}