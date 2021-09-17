import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import GlobalStyles from './GlobalStyles';
import { useState } from 'react';

function App() {

  const [grilla,setGrilla] = useState(true);

  var origin = document.getElementById("real-winter");
  var destiny = document.getElementById("title");
  origin && origin.addEventListener("mouseover", () => {
    destiny.className = "destiny";
  }, false)
  origin && origin.addEventListener("mouseout", () => {
    destiny.className = "";
  }, false)

  return (
    <>
      <GlobalStyles />
      <Header />
      <NavBar setGrilla={setGrilla}/>
      <Home grilla={grilla} setGrilla={setGrilla}/>
      <Footer />
    </>
  );
}

export default App;
