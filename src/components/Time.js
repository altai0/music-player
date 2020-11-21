import React from "react";
import Timer from "react-compound-timer";

function Time(timeStatus) {
  console.log(timeStatus.timeStatus);
  return (
    <div className={`timer ${timeStatus.timeStatus ? "active-timer" : ""}`}>
      <h2>Timer</h2>
      <div className="timer-content">
        <Timer initialTime={0}>
          {({ start, resume, pause, reset }) => (
            <React.Fragment>
              <div className="timer-clock">
                <Timer.Hours /> :
                <Timer.Minutes /> :
                <Timer.Seconds />
              </div>
              <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={reset}>Reset</button>
              </div>
            </React.Fragment>
          )}
        </Timer>
      </div>
    </div>
  );
}

export default Time;
