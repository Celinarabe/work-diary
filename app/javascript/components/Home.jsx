import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, Heading, Center, Container } from "@chakra-ui/react";
import EntryList from "./EntryList";

const API_URL = "http://localhost:5000/api/v1/entries";

const Home = () => {
  const [entries, setEntries] = useState([]);

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
      <Container>
        <Center>
          <Heading>Work Diary</Heading>
        </Center>
        <EntryList entries={entries} />
      </Container>
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
