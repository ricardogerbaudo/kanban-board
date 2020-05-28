import React from 'react';

function Card(props) {
    return (
        <div className="card" draggable="true">
            <div className={`status ${props.statusColor}`}></div>
            <div className="content">{props.content}</div>
        </div>
    );
}

export default Card;