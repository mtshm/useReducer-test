import React, { VFC, useReducer } from "react";

const initialState = 0;
const reducer = (state: number, action: any) => {
  switch (action) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
};
export const CounterReducer: VFC = () => {
  // stateとsetStateの関係、reducerは実行する関数
  // dispatchに指定した引数がreducerに渡る
  // initialStateはcountの初期値なのでuseStateの初期値と同じ
  // useStateとuseReducerの違いはreducer関数が指定できるところ
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>カウント:{count}</h1>
      <button onClick={() => dispatch("increment")}>インクリメント</button>
    </div>
  );
};
