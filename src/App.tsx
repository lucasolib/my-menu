import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header';
import MyMenu from './myMenu';

function App() {
  return (
      <Routes>
        <Route path='/' element={ <Header/> }/> 
        <Route path='/myMenu' element={ <MyMenu /> }/>
      </Routes>
  )
 };

export default App;
