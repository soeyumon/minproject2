const container = document.querySelector('.container');
const url = "https://source.unsplash.com/random/";
const row = 10;

for(let i = 0 ; i < row * 3 ; i++){
    const img = document.createElement('img');
    img.src = `${url}${getrandomnum()}`;
    container.appendChild(img);
}
function getrandomsize(){
    return Math.floor(Math.random()*10) + 300;
}
function getrandomnum(){
    return `${getrandomsize()}x${getrandomsize()}`;

}
// console.log(getrandoomnum());