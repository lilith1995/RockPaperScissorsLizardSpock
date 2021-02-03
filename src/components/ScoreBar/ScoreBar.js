import React from "react";

import "./ScoreBar.scss";

function ScoreBar({ userScore, computerScore }) {
  return (
    <div className="scorebar">
      <div className="scorebar__title">Score</div>
          {userScore}
          {computerScore}
    </div>
  );
}

export default ScoreBar;
