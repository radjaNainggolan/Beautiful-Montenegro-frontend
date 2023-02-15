import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import AppProvider from './context/AppContext';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import Location from './pages/Location';


function App() {
  return (
    <Router>
      <AppProvider>
        <Header></Header>
        <div className="">
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/register' element={<Register/>}></Route>
            <Route exact path='/login' element={<LogIn/>}></Route>
            <Route exact path='/location/:id' element={<Location/>}></Route>
          </Routes>
        </div>
      </AppProvider>
      
    </Router>
  );
}

export default App;
