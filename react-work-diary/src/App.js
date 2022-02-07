import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Entry from './components/Entry'
import { useEffect, useState } from "react"

const API_URL = "http://localhost:3000/entries"

const getAllEntries = () => {
  console.log('trying')
  return axios.get(API_URL).then((response) => {
    console.log('RESPONSE',response)
    return response.data
})}


function App() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    console.log('in effect')
    let mounted = true;
    getAllEntries().then((items) => {
      if(mounted) {
        setEntries(items)
      }
    });
    return () => (mounted = false); //callback
  }, [])


  return (
    <div className="App">
      <h1>
        Hello from React world
      </h1>
      <Entry entries={entries}/>
    </div>
  );
}

export default App;
