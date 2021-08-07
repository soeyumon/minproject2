const userList = document.querySelector('.userList');
const filter = document.getElementById('filter');
const url = 'https://randomuser.me/api/?results=';
const userNum = 50;
const listitems = [];

async function getUser(){

    let res = await fetch(`${url}${userNum}`);
    // console.log(res);
    userList.innerText = "";

    const {results} =await res.json();
    // console.log(results);

    results.forEach(result=>{
        // console.log(result);

        const li = document.createElement('li');
        li.innerHTML = `<li>
                <img src="${result.picture.large}" alt="${result.name.first}"/>
                <div class="userinfo">
                    <h4>${result.name.first} ${result.name.last}</h4>
                    <p>${result.location.city}, ${result.location.country}</p>
                </div>
            </li>
        `;
        userList.appendChild(li);
        listitems.push(li);
    })
}

getUser();
filter.addEventListener('input',(e)=>getfilter(e.target.value));

function getfilter(search){
    // console.log(search);
    listitems.forEach(listitem=>{
        if(listitem.innerText.toUpperCase().includes(search.toUpperCase())){
            listitem.classList.remove('hide');
        }else{
            listitem.classList.add('hide');
        }
    })
}