const counters = document.querySelectorAll('.counter');
// console.log(counters);
counters.forEach(counter=>{
    counter.innerText = '0';
    // console.log(counter);

    const updatecounter = ()=>{
        const target = +counter.getAttribute('data-target');
        // console.log(target);
        const ctr = Number(counter.innerText);
        const increment = target / 100;
        if(ctr < target){
            counter.innerText = ctr + increment;
            setTimeout(updatecounter,50);
        }
    }
    updatecounter();
});