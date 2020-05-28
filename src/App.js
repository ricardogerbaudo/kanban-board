import React from 'react';
import Board from './Board';

function App() {
    return (
        <div className="boards">
            <Board name="To do" />
            <Board name="In progress" />
            <Board name="Done" />
        </div>
    );
}

export default App;
