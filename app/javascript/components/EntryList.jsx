import React, { useState, useEffect } from "react";
import { SimpleGrid, Divider, Button } from "@chakra-ui/react";
import EntryPreview from "./EntryPreview";
import EntryForm from "./EntryForm";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

const EntryList = (props) => {
  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="blue"
        size="sm"
        my={5}
        onClick={() => props.setShowForm(true)}
      >
        New Entry
      </Button>

      <SimpleGrid columns={1} spacing={5}>
        {props.entries.map((entry) => {
          return (
            <>
              <EntryPreview entry={entry} />
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default EntryList;
