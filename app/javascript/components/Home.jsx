import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Text, Heading, Center, Container } from "@chakra-ui/react";
import EntryList from "./EntryList";
import EntryForm from "./EntryForm";

const heroku_prefix = "https://shrouded-retreat-86547.herokuapp.com/";

const local_prefix = "http://localhost:3000/";

const API_URL = `${heroku_prefix}api/v1/entries`;
console.log(API_URL);

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);

  //fetch entries on component mount
  useEffect(() => {
    let mounted = true;
    getAllEntries().then((items) => {
      {
        mounted ? setEntries(items) : "";
      }
    });
    return () => (mounted = false); //component will unmount
  }, []);

  return (
    <div className="App">
      <Box h="100%" px={10} py={5}>
        <Center>
          <Heading mb={5}>Work Diary</Heading>
        </Center>
        {showForm ? (
          <EntryForm setShowForm={setShowForm} />
        ) : (
          <EntryList entries={entries} setShowForm={setShowForm} />
        )}
      </Box>
    </div>
  );
};

//calls API
const getAllEntries = () => {
  return axios.get(API_URL).then((response) => {
    console.log("RESPONSE", response);
    return response.data;
  });
};

export default Home;
