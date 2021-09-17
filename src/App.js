import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header />
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
