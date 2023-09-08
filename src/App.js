import './App.css';
import {ReactComponent as Dice} from "./assests/images/icon-dice.svg"
import { useState } from 'react';

function App() {
  const [quote, setQuote] = useState("Click the dice to start generating advice and please wait for 2 seconds before generating again")
  const [id, setId] = useState("")
  

  function handleClick(){
    fetch("	https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => handleRender(data))
      .catch(() => handleError())
  }

  function handleRender(data){
    setQuote(`"${data.slip.advice}"`)
    setId(data.slip.id)
  }

  function handleError(){
    setQuote(<span className='error-msg'>"There was a problem. Please try again Later."</span>);
    setId("")
  }


  return (
    <div className="container">
      <div className="App">
        <h5 className="heading">ADVICE #{id}</h5>
        <p className="advice">
          {quote}
        </p>
        <hr className="divider" color="CEE3E9" />
      </div>
      <div className="dice-container">
        <div className="dice" onClick={handleClick}>
          <Dice />
        </div>
      </div>
    </div>
  );
}

export default App;
