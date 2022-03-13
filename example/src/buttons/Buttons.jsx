import React from "react";

function Buttons({ goToPreviousVideo, goToNextVideo, params }) {
  return (
    <>
      <div className="btnsContainer">
        <button className="btn" onClick={() => goToPreviousVideo(params)}>
          Previous
        </button>
        <button className="btn" onClick={() => goToNextVideo(params)}>
          Next
        </button>
        <button className="btn" onClick={() => params.vidRef.current.pause()}>
          Pause
        </button>
        <button className="btn" onClick={() => params.vidRef.current.play()}>
          Play
        </button>
      </div>
    </>
  );
}

export default Buttons;
