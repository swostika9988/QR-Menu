import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import Demo from './pages/Demo';
import Subscription from './pages/Subscription';

function App() {
  return (
    <div className="App">
      <Header />
      <Subscription />
      {/* <Demo /> */}
      <Footer />
    </div>
  );
}

export default App;
