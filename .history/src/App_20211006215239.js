import './App.css';
import {useEffect} from 'react'

function App() {
  const dictionaryApi = async() => {
    try{
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane')

      console.log(da);
    } catch(error){
      console.log(error);
    }
  } 

  useEffect(() => {
    dictionaryApi
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
