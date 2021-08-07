// UI
const filter = document.getElementById('filter');
const ulresult = document.getElementById('result');
const url = 'https://randomuser.me/api/?results=';
const totalusers = 50;
const listitems = [];

// AJAX request
// First Way
async function getdata(){
    const res =await fetch(`${url}${totalusers}`);
    // console.log(res);

    // const data =await res.json();
    // console.log(data);

    const {results} = await res.json();

    ulresult.innerText = '';
    // console.log(results);
    results.forEach(result=>{
        // console.log(result);
        const li = document.createElement('li');
        li.innerHTML=`<img src="${result.picture.large}" alt="${result.name.first}" />
                    <div class="userInfo">
                        <h4>${result.name.first} ${result.name.last}</h4>
                        <p>${result.location.city} , ${result.location.country}</p>
                    </div>
        `;
        // console.log(li);
        ulresult.appendChild(li);
        listitems.push(li);
    })
}

// Second Way
// function example(){
//     fetch(`${url}${totalusers}`)
//         .then(res=>res.json())
//         .then(data=>{
//             ulresult.innerText = '';
//             const results = data.results;
//             results.forEach(result=>{
//                 const li = document.createElement('li');
//                 li.innerHTML = `<img src="${result.picture.large}" alt="${result.name.first}" />
//                     <div class="userInfo">
//                         <h4>${result.name.first} ${result.name.last}</h4>
//                         <p>${result.location.city} , ${result.location.country}</p>
//                     </div>
//                 `;
//                 ulresult.appendChild(li);
//                 listitems.push(li);
//             });
//         });
// }
// example();

getdata();

// Event Listener
// filter.addEventListener('input',function(e){
//     filterdata(e.target.value);
// })
filter.addEventListener('input',(e)=>filterdata(e.target.value));

function filterdata(search){
    // console.log(search);
    listitems.forEach(listitem=>{
        // console.log(listitem);
        if(listitem.innerText.toLocaleLowerCase().includes(search.toLowerCase())){
            listitem.classList.remove('hide');
        }else{
            listitem.classList.add('hide');
        }
    })
}
