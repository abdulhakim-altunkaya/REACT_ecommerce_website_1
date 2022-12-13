import Upperbar from './components/Upperbar';
import Lowerbar from "./components/Lowerbar"
import Footer from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Upperbar />
        <Lowerbar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
