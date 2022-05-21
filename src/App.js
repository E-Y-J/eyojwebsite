import '../src/stylesheets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import ImpossibleTTT from './components/ImpossibleTTT';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/impossiblettt" element={<ImpossibleTTT />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
