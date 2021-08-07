const addbtn = document.getElementById('add');

addbtn.addEventListener('click',()=>addnewnote());

function addnewnote(text=''){
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i> </button>
            <button class="delete"><i class="fas fa-trash-alt"></i> </button>
        </div>

        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
    `;
    // console.log(note);
    // UI
    const editbtn = note.querySelector('.edit');
    const deletebtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const txtarea = note.querySelector('textarea');

    editbtn.addEventListener('click',()=>{
        main.classList.toggle('hidden');
        txtarea.classList.toggle('hidden');
    });

    deletebtn.addEventListener('click',()=>{
        note.remove();
        updatelocalstorage();
    });

    txtarea.value = text;
    main.textContent = text;

    txtarea.addEventListener('keyup',(e)=>{
        // console.log(e.target.value);
        // main.innerText = e.target.value;
        const {value} = e.target;
        main.textContent = value;

        updatelocalstorage();
    });

    document.body.appendChild(note);
}

function updatelocalstorage(){
    const notetexts = document.querySelectorAll('textarea');

    let notes = [];

    notetexts.forEach(notetext=>notes.push(notetext.value));

    localStorage.setItem('notes',JSON.stringify(notes));

    // console.log(notes);
}
const getnotes = JSON.parse(localStorage.getItem('notes'));
if(getnotes){
    getnotes.forEach(getnote=>addnewnote(getnote));
}
