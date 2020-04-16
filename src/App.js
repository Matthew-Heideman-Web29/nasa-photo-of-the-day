import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import NasaCardContainer from './components/NasaCardContainer.js'


function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    const apiKey = 'PuK5ryfBfKZ0Ebrg7Ue6BQSJyR2oLuBjyA8ZFW0e';
    const url = 'https://api.nasa.gov'
    axios
      .get(`${url}/planetary/apod?api_key=${apiKey}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error, 'Data was not retrieved')
      })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaCardContainer data = {data} />
    </div>
  );
}

export default App;
