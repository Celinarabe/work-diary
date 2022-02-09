import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import Entry from './Entry'

const API_URL = "http://localhost:5000/api/v1/entries"


function EntryList() {
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

const getAllEntries = () => {
  console.log('trying')
  return axios.get(API_URL).then((response) => {
    console.log('RESPONSE',response)
    return response.data
})}


export default EntryList

