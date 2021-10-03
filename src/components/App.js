import React from 'react';
import './App.less'
import {useDispatch, useSelector} from "react-redux";
import reposReducer, {setCount} from "../reducers/reposReducer";

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => (state.repos.count)) //хук позволяет
  // получать данные из state

  const onCountClick = () => {
    dispatch(setCount(5))
  }

  return (
    <div className='app'>
      <button onClick={() => onCountClick()}>COUNT</button>
      <div>{count}</div>
    </div>
  );
};

export default App;
