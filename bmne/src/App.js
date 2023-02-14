import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import AppProvider from './context/AppContext';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <AppProvider>
        <Header></Header>
        <div className="flex align-middle items-center justify-between">
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/register' element={<Register/>}></Route>
          </Routes>
        </div>
      </AppProvider>
      
    </Router>
  );
}

export default App;
