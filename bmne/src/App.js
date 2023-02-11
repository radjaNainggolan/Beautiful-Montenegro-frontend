import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import AppProvider from './context/AppContext';


function App() {
  return (
    <Router>
      <AppProvider>
        <Header></Header>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
          </Routes>
        </div>
      </AppProvider>
      
    </Router>
  );
}

export default App;
