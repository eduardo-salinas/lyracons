import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import GlobalStyles from './GlobalStyles';
import { useState, useEffect } from 'react';

function App() {
  const [grilla, setGrilla] = useState(true);

  var color = () => {
    var origin = document.getElementById("real-winter");
    var destiny = document.getElementById("title");
    if (origin) {
      origin.addEventListener("mouseover", () => {
        destiny.className = "destiny";
      }, false)
      origin.addEventListener("mouseout", () => {
        destiny.className = "";
      }, false)
    }
  }
  useEffect(() => {
    color();
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header />
      <NavBar setGrilla={setGrilla} />
      <Home grilla={grilla} setGrilla={setGrilla} />
      <Footer />
    </>
  );
}

export default App;
