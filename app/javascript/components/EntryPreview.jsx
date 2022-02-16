import React from "react";
import { DateTime } from "luxon";
import {
  SimpleGrid,
  Divider,
  ListItem,
  UnorderedList,
  Text,
  Link,
  Box,
  Button,
} from "@chakra-ui/react";

const EntryPreview = (props) => {
  console.log(props.entry.date);
  return props.entry.tasks.length > 0 ? (
    <Box>
      <Link>{formatDate(props.entry.date)}</Link>
      <Text style={{ whiteSpace: "pre-line" }}>{props.entry.tasks[0]}</Text>
    </Box>
  ) : (
    ""
  );
};

const formatDate = (date) => DateTime.fromISO(date).toLocaleString();

export default EntryPreview;
