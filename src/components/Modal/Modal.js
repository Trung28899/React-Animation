import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

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
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
        appear: "",
        appearActive: "",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
