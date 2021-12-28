import picture from './zz.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="picture" alt="pic" />
        <p>
          funny box moment
        </p>
        <form>
          <label for="quote">funny text moment</label><br></br>
          <input type="text" name="quote" /><br></br>
          <input type="submit" value="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
