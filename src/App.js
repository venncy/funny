import picture from './zz.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="picture" alt="pic" />
        <h1>
          holy moly
        </h1>
        <form>
          <label for="quote">im malding i cant figure out backend what do i do</label><br></br>
          <input type="text" placeholder="quote" name="quote" /><br></br>
          <input type="submit" value="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
