import './App.css';

function App() {
  const dictionaryApi = async() => {
    try{
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/<word>')
    } catch(error){
      console.log(error);
    }
  } 

  return (
    <div className="App">
    </div>
  );
}

export default App;
