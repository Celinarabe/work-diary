import React, { useState } from "react";
import { ListItem } from "@chakra-ui/react";

function TaskItem(props) {
  const [showEditForm, setShowEditForm] = useState(false);
  return (
    <ListItem key={idx}>
      <Input
        size="sm"
        onChange={handleTaskBodyChange}
        placeholder={placeholderText}
        value={task}
        mr={2}
        onKeyDown={checkforEnterKey}
      />
    </ListItem>
  );
}

export default TaskItem;
