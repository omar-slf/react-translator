import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [meanings, setmeanings] = useState([]);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );

      console.log(data);
      setmeanings(data.)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, []);

  return <div className="App"></div>;
}

export default App;
