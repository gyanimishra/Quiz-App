
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {
  return (
    <>
    <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>

      <Header/>

     <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/quiz'  element={<Quiz/>}/>
      <Route path='/result'  element={<Result/>}/>
     </Routes>




     
      
    </div>
    <Footer/>
    </>
  );
}

export default App;
