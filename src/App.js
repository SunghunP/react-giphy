import { useState, useEffect } from "react";
import Form from "./components/Form";
import GifDisplay from "./components/GifDisplay";

function App() {
  const [image, setImage] = useState(null);

  const getGif = async (searchTerm) => {
    // make the api call.
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}`
    );
    // convert response to js object
    const gif = await response.json;
    // updating the state to that object
    setImage(gif);
  };

  return (
    <div className="App">
      <GifDisplay />
      <Form />
    </div>
  );
}

// Example api call.
// https://api.giphy.com/v1/gifs/random?api_key=process.env.REACT_APP_API_KEY
export default App;
