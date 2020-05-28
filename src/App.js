import React from 'react';

function App() {
  return (
<div class="boards">
        <div class="board">
            <h3>To do</h3>
            <div class="dropzone">
                <div class="card" draggable="true">
                    <div class="status red"></div>
                    <div class="content">Record videos</div>
                </div>
            </div>
        </div>
        <div class="board">
            <h3>In progress</h3>
            <div class="dropzone">
                <div class="card" draggable="true">
                    <div class="status green"></div>
                    <div class="content">Forum</div>
                </div>
            </div>
        </div>
        <div class="board">
            <h3>Done</h3>
            <div class="dropzone">
                <div class="card" draggable="true">
                    <div class="status blue"></div>
                    <div class="content">Next Level Week</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
