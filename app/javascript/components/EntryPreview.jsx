import React from "react";
import { DateTime } from "luxon";
import { SimpleGrid, Divider, ListItem, UnorderedList } from "@chakra-ui/react";

const EntryPreview = (props) => {
  console.log(props.entry.date);
  return props.entry.tasks.length > 0 ? (
    <div>
      <p>{formatDate(props.entry.date)}</p>
      <UnorderedList>
        {props.entry.tasks.map((task) => (
          <ListItem>{task}</ListItem>
        ))}
      </UnorderedList>
    </div>
  ) : (
    ""
  );
};

const formatDate = (date) => DateTime.fromISO(date).toLocaleString();

export default EntryPreview;
