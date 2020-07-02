1. Tools used
$ npm install react-transition-group --save
$ npm update react react-dom

- Docs: 
https://reactcommunity.org/react-transition-group/

2. Core Concepts: 

3. Guide to code: 

VER 1: Using Css Transition
-----------------------------------------------
Code in 2nd commit

Step 1: read code in src/components/Modal/Modal.Css
Step 2: Notice the use of Transition, Transform and opacity
Step 3: See Modal.js, Backdrop.js and App.js to see how we 
apply the animation

VER 2: Using Css animation (Using @keyframes)
-----------------------------------------------
Code in 3rd commit

- see Modal.css for: @keyframes and animation property
you will see the differences compare to previous version

VER 3: Using React Transition Group
-----------------------------------------------
Code in 4rd commit

- Video 401
- See App.js to understand how <Transition> work. 
See the imports and its properties

VER 4: Wrapping Transition components
Animation Timing
Transition Event
-----------------------------------------------
Code in 5th Commit

Step 1: See Modal.js to see how <Transition> is 
also used in the component itsSelf

Step 2: See animationTiming object in Modal.js to 
understand how animationTiming is used

Step 3: See App.js within <Transition>, look for 
properties onEnter event and such