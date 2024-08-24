import { useState } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import Box from './components/Box';

function App() {
  const count= useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const passwd = useSelector(state => state.passwd);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: "increase",payload:{num:5}});
  }

  const login = ()=>{
    dispatch({type: "login",payload:{id:"kdg",passwd:"1234jj"}})
  }

  const decrease = () => {
    dispatch({type:"decrease",payload:{num:2}})
  }

  return (
    <div>
      <h1>{id},{passwd}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>로그인</button>
      <button onClick={decrease}>감소</button>
      <Box/>

    </div>
  );
}

export default App;
