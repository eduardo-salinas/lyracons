import { Grid } from '@material-ui/core';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Grid className="body">
      <Header />
      <NavBar />
      <Home />
      <Footer />
    </Grid>
  );
}

export default App;
