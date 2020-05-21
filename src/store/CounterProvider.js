import React, { createContext, useReducer } from "react";

export const CounterContext = createContext({});

const initialState = {
  counter: 0,
  favitemlist: [],
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return {
        ...state, // copy state
        counter: state.counter + action.payload, // set state counter
      };
    case "SUB_COUNTER":
      return {
        ...state, // copy state
        counter: state.counter - action.payload, // set state counter
      };
    case "ADD_FAVORITE":
      const cloneState = [...state.favitemlist];
      cloneState.push(action.payload);
      //   console.log("cloneState", cloneState);
      return {
        ...state,
        favitemlist: cloneState,
      };
  }
};

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    initialState
  );

  const { counter, favitemlist } = counterState;

  const addCounter = (payload) =>
    counterDispatch({ type: "ADD_COUNTER", payload }); // ส่ง type ADD_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ
  const subCounter = (payload) =>
    counterDispatch({ type: "SUB_COUNTER", payload }); // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ
  const addFavorite = (payload) => {
    if (payload) {
    //   console.log("typeof payload", typeof(payload));
      let clonepayload = { ...payload };
      favitemlist.push(clonepayload);
      console.log('=============================================')
      console.log("clonepayload.path", clonepayload.path);
      console.log("clonepayload", clonepayload);
      console.log('=============================================')
      console.log('favitemlist', favitemlist);
      return counterDispatch({ type: "ADD_FAVORITE", clonepayload });
    }
  };

  return (
    <CounterContext.Provider
      value={{ counter, favitemlist, addCounter, subCounter, addFavorite }}
    >
      {children}
    </CounterContext.Provider>
  );
};
