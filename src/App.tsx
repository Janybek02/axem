import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/Hooks';
import { Add } from './components/start/add/Add';
import { Home } from './components/home/Home';

const Link = () => {
  return (<>
      <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/add"} element={<Add/>}/>
      </Routes>
  </>)
}

function App() {
  const {main, modal} = useAppSelector(state => state.main)
  return (
    <div className="App ">
        
        <Link/>
    </div>
  );
}

export default App;
