import { useState, useEffect } from "react";
import Form from "./components/Form";
import Gif from "./components/Gif";

function App() {
  const [image, setImage] = useState(null);

  return (
    <div className="App">
      <Gif />
      <Form />
    </div>
  );
}

// Example api call.
// https://api.giphy.com/v1/gifs/random?api_key=process.env.REACT_APP_API_KEY
export default App;
