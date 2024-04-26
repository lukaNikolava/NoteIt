let addNoteBtn = document.querySelector('#addNoteBtn');
let title = document.querySelector('#title');
let content = document.querySelector('#content');

addNoteBtn.addEventListener('click' , ()=>{
    if(title.value && content.value){

        let newNote = document.createElement('div');
        newNote.className = 'noteCard';

        let cardHeader = document.createElement('div');
        cardHeader.className = 'cardHeader';
        cardHeader.textContent = title.value;
        newNote.appendChild(cardHeader);

        let cardContent = document.createElement('div');
        cardContent.className = 'cardContent';
        cardContent.textContent = content.value;
        newNote.appendChild(cardContent);

        document.querySelector('.cardsSection').appendChild(newNote);
        title.value = '';
        content.value = '';
    }
})

