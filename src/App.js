import React, {useState} from 'react';
import './App.css';
import AppFeature from './Components/Appfeature';

//array of quotes
// const quoteData = ["Jai Shree Ram","hindu","Abc"] 
const quoteData = ["Jai Shree Ram","Believe you can and you're halfway there.",  "The only limit to our realization of tomorrow will be our doubts of today.",  "Don't watch the clock; do what it does. Keep going.",  "It does not matter how slowly you go as long as you do not stop.",  "The only way to do great work is to love what you do.",  "The greatest glory in living lies not in never falling, but in rising every time we fall.",  "There is no substitute for hard work.",  "The only limit to our future is the doubts of today.",  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",  "The only thing stopping you from reaching your goals is yourself.",  "If you can dream it, you can do it.",  "You are never too old to set another goal or to dream a new dream.",  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",  "The secret of getting ahead is getting started.",  "It always seems impossible until it's done.",  "You miss 100% of the shots you don't take.",  "Hardships often prepare ordinary people for an extraordinary destiny."]


function App() {
  //make state

  const[quote, setQuote] = useState(quoteData[0]);

  //func to radomize Quote
  function quoteRandomizer(){
    const quoteRandom = quoteData[Math.floor(Math.random() * quoteData.length)]
    setQuote(quoteRandom)
  }

  

  return (
    <div className="App">
      <h1>HomePage</h1>

      <AppFeature feature={"Generate Quote"}/>
      
      <button onClick={quoteRandomizer}>Click to Show</button>
      <h1>{quote}</h1>
    </div>
  );
}

export default App;
