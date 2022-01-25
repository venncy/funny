import React from "react";
import picture from './zz.png';
import './App.css';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img class="pict" src={picture} className="picture" alt="pic" />
        <h1>
          holy moly
        </h1>
        <form class="funny-form" name="quoteEntry">
          <label for="quote">im malding i cant figure out backend</label><br></br>
          <input class="quote-entry" type="text" placeholder="quote" name="quote" />
          <input class="submit" type="submit" value="submit" />
        </form>
        <p>
          {!data? "ur mom" : data}
        </p>
      </header>
    </div>
  );
}

export default App;
