// UI
const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach((panel)=>{
    // console.log(panel);
    panel.addEventListener('click',()=>{
        // console.log('hay');

        removeactiveprevclass();
        panel.classList.add('active');
    })
});
function removeactiveprevclass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}