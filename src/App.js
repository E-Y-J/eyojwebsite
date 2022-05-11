import './App.css';
import call from '../src/call.png';

function App() {
  return (
    <div className="App rowElements centerVer centerHor">

    <div className='container centerVer centerHor'>
      <h1>ELLIJAH JIMENEZ</h1>
    </div>

      <div className='container colElements centerHor'>
        <div className='contactContainer rowElements'>
          <img src={"src\call.png"}/>
          <a className='textContainer'>+63 917 158 6030</a>
        </div>
        <div className='contactContainer rowElements'>
          <a className='icon'>Email</a>
          <a className='textContainer' href = "mailto: ellijahjimenez@outlook.com">ellijahjimenez@outlook.com</a>
        </div>
        <div className='contactContainer rowElements'>
          <a className='icon'>github</a>
          <a className='textContainer' href='https://github.com/E-Y-J'>https://github.com/E-Y-J</a>
        </div>
        <div className='contactContainer rowElements'>
          <a className='icon'>linked in</a>
          <a className='textContainer' href='https://www.linkedin.com/in/ellijah-jimenez-9495071b0/'>https://www.linkedin.com/</a>
        </div>
      </div>

    </div>
  );
}

export default App;
