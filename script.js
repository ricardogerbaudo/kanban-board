/** helpers */
function log(message) {
    console.log(`> ${message}`);
}

/** app */
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

function dragstart() {
    dropzones.forEach(dropzone=>dropzone.classList.add('highlight'));
    this.classList.add('isDragging');
}

function dragend() {
    dropzones.forEach(dropzone=>dropzone.classList.remove('highlight'));
    this.classList.remove('isDragging');
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

function dragenter(){
}

function dragover(){
    this.classList.add('isOver');
    const draggingCard = document.querySelector('.isDragging');
    this.appendChild(draggingCard);
}

function dragleave(){
    this.classList.remove('isOver');
}

function drop(){
}