import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <br />
        {
          // The 'in' property if the component is shown or not
          // There are 4 states of this Transition component:
          /*
            'entering'
            'entered'
            'exiting'
            'exited'
          */
          /* timeout determine how long it takes from 'entering' to 'entered' and
           from 'exiting' to 'exited' */
          /*
             mountOnEnter will mount the wrapped JSX when the state is entered
             unmountOnExit will unmount the wrapped JSX when the state is 
             exited so it (the red box) won't take up any space
           */
        }
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("OnEnter")}
          onEntering={() => console.log("OnEntering")}
          onEntered={() => console.log("OnEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {(state) => (
            <div>
              {/* state is the state of <Transition> which is 'entering', 'entered'
                    'exiting', 'exited' */}
              <p>{state}</p>
              <div
                style={{
                  backgroundColor: "red",
                  width: 100,
                  height: 100,
                  margin: "auto",
                  opacity: state === "exiting" ? 0 : 1,
                  transition: "opacity 1s ease-out",
                }}
              />
            </div>
          )}
        </Transition>

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
