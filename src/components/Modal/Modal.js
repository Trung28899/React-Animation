import React from "react";
import Transition from "react-transition-group/Transition";

import "./Modal.css";

const modal = (props) => {
  /*
    this is created due to the timing in <Transition> and
    timing in css file are different
  */
  const animationTiming = {
    enter: 400,
    exit: 1000,
  };

  return (
    <Transition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClose"
            : null,
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
