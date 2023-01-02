import './App.css';
import Appbar from './components/appbar';
import Home from './pages/home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/login';
import Signup from './pages/signup';
import Footer from './components/footer';
import Feedbacks from './pages/feedbacks';

function App() {
  return (
  <BrowserRouter>
  <Appbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/feedbacks" element={<Feedbacks/>} />
  </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
