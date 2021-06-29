// UI
// const container = document.querySelector('.login-container');
const user = document.getElementById('user');
const password = document.getElementById('password');

const login = document.getElementById('loginbtn');


// Event Listener

login.addEventListener('click',function (){
    // console.log("abcd");
    checkrequired([user,password]);
    if(user.value === "soeyu" && password.value ==="123"){
        location.href = "choice.html";
    }else{
        window.alert("Incorrect username Or password");
    }
});
function checkrequired(inputarr){
    inputarr.forEach(function (input){
        if(input.value === ''){
            showerror(input,`Please enter ${getfieldName(input)}`)
        }else{
            showsuccess(input);
        }
    });
}
// Get fieldName
function getfieldName(input){
    // return input.id.toUpperCase();
    return input.name.charAt(0).toUpperCase() + input.id.slice(1);
}
function showerror(input,msg){
    const userparent = input.parentElement;
    const small = userparent.querySelector('small');
    // console.log(userparent);
    userparent.className = "login-container error";

    small.innerText = msg;
}
function showsuccess(input){
    const userparent = input.parentElement;
    const small = userparent.querySelector('small');
    userparent.className = "login-container success";
    small.innerText = '';


}