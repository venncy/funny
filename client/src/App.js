import React from "react";
import picture from './zz.png';
import './App.css';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://venncy.github.io/funny/api")
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
          <label for="quote">quote submission box!</label><br></br>
          <input class="quote-entry" type="text" placeholder="quote" name="quote" />
          <input class="submit" type="submit" value="submit" />
        </form>
        <p>
          {!data? "loading..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;
