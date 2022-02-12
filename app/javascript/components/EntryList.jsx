import React, { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import EntryPreview from "./EntryPreview";

const EntryList = (props) => {
  return (
    <>
      <SimpleGrid columns={1} spacing={5}>
        {props.entries.map((entry) => (
          <EntryPreview entry={entry} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default EntryList;
