import '../src/stylesheets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import EasterEgg from './components/EasterEgg';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/easteregg" element={<EasterEgg />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
