import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import GifDisplay from "./components/GifDisplay";

function App() {
  const REACT_APP_API_KEY = "RrrhUSrlzps711jseNOeLYhMNFQYl3Ve";

  const [gif, setGif] = useState(null);

  const getGif = async (searchTerm) => {
    // make the api call.
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_API_KEY}`
    );
    // convert response to js object
    const responseGif = await response.json();
    // updating the state to that object
    console.log(responseGif);
    setGif(responseGif);
  };

  return (
    <div className="App">
      <header>Welcome to the Random Gif Generator!</header>
      <GifDisplay gif={gif} />
      <Form getGif={getGif} />
    </div>
  );
}

// Example api call.
// https://api.giphy.com/v1/gifs/random?api_key=process.env.REACT_APP_API_KEY
export default App;
