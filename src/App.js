import React from "react";
import "./App.css";
import counterReducer from './reducers/counterReducer';
import { INCREMENT, DECREMENT, INCREMENT_STEP, DECREMENT_STEP } from './actions/counterActions';

const initialState = {
  counter: 0,
  step: 1,
};

export default function App() {
  const [state, dispatch] = React.useReducer(counterReducer, initialState);

  return (
    <div className="App">
      <h1>Counter with useReducer</h1>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      <button onClick={() => dispatch({ type: INCREMENT_STEP })}>Incrémenter le pas</button>
      <button onClick={() => dispatch({ type: DECREMENT_STEP })}>Décrémenter le pas</button>
      <h2>Step: {state.step}</h2>
    </div>
  );
}
