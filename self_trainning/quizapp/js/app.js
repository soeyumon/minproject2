const quizdata = [
    {
        question: "What does CSS stand for ?",
        a:"Central Style Sheet",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Century System Software",
        e:"Control Style Sheet",
        correct:"b",
    },

    {
        question: "What does HTML stand for ?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hypertext Machine Language",
        d:"Hypertext Technology Modern Language",
        e:"Hypertext Market Language",
        correct:"a",
    },
    {
        question: "What does Javascript Launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"1991",
        e:"None of the above",
        correct:"b",
    },
    {
        question: "What language runs in a browser ?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        e:"Php",
        correct:"d",
    }
]
// UI
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const answerels = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submit = document.getElementById('submit');

let currentquiz = 0;
let score = 0;

function loadquiz(){
    deselect();
    const currentquizdata = quizdata[currentquiz];
    question.innerText = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;
    e_text.innerText = currentquizdata.e;
}

function getseleted(){
    let answer = 0;
    answerels.forEach((answerel)=>{
        if(answerel.checked){
           answer = answerel.id;
        }
    })
    return answer;
}
function deselect(){
    answerels.forEach(answerel=>answerel.checked = false);
}
loadquiz();
submit.addEventListener('click',()=>{
    // console.log(getseleted());
    let answer = getseleted();
    if(answer){

        if(answer === quizdata[currentquiz].correct){
            score++;
        }
        currentquiz++;
        if(currentquiz < quizdata.length){
            loadquiz();
        }else{
            quiz.innerHTML = `
            <h2>You answered correct at ${score} / ${quizdata.length}</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }

    }
})