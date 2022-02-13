import React from "react";
import { DateTime } from "luxon";
import {
  SimpleGrid,
  Divider,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react";

const EntryPreview = (props) => {
  console.log(props.entry.date);
  return props.entry.tasks.length > 0 ? (
    <div>
      <p>{formatDate(props.entry.date)}</p>

      {props.entry.tasks.map((task) => (
        <Text style={{ whiteSpace: "pre-line" }}>{task}</Text>
      ))}
    </div>
  ) : (
    ""
  );
};

const formatDate = (date) => DateTime.fromISO(date).toLocaleString();

export default EntryPreview;
