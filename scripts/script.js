let addNoteBtn = document.querySelector('#addNoteBtn');
let title = document.querySelector('#title');
let content = document.querySelector('#content');

const createElementAndAppend = ( type , className , textContent , parent )=>{
    let element = document.createElement(type);
    element.className = className;
    element.textContent = textContent;
    parent.appendChild(element);
    return element;
}

addNoteBtn.addEventListener('click' , ()=>{
    if(title.value && content.value){

        let newNote = document.createElement('div');
        newNote.className = 'noteCard';

        createElementAndAppend( 'div' , 'cardHeader' , title.value , newNote )
        createElementAndAppend( 'div' , 'cardContent' , content.value , newNote )
        
        let deleteBtnContainer = createElementAndAppend('div', 'deleteBtnContainer', "", newNote);
        let deleteBtn = createElementAndAppend('div', 'deleteBtn', "Delete", deleteBtnContainer);

        document.querySelector('.cardsSection').appendChild(newNote);
        title.value = '';
        content.value = '';

        deleteBtn.addEventListener( 'click' , ()=>{
            newNote.remove();
        })
    }
})

