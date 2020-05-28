import React from 'react';
import Card from './Card';

function Board(props) {
    const cards = document.querySelectorAll('.card');
    const dropzones = document.querySelectorAll('.dropzone');

    cards.forEach(card => {
        card.addEventListener('dragstart', dragstart);
        card.addEventListener('dragend', dragend);
    });

    function dragstart() {
        dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
        this.classList.add('isDragging');
    }

    function dragend() {
        dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
        this.classList.remove('isDragging');
    }

    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragover', dragover);
        dropzone.addEventListener('dragleave', dragleave);
    });

    function dragover() {
        this.classList.add('isOver');
        const draggingCard = document.querySelector('.isDragging');
        this.appendChild(draggingCard);
    }

    function dragleave() {
        this.classList.remove('isOver');
    }

    return (
        <div className="board">
            <h3>{props.name}</h3>
            <div className="dropzone">
                <Card statusColor="green" content="Learn HTML" />
                <Card statusColor="red" content="Learn CSS" />
                <Card statusColor="blue" content="Learn JavaScript" />
            </div>
        </div>
    );
}

export default Board;