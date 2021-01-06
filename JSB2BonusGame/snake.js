import React from 'react';

function Snake() {
  return (
    <div className="Games">
		<canvas id="game-canvas" width="800" height="500" onLoad={this.game}></canvas>
    </div>
  );
}

export default Snake;