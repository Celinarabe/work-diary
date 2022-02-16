import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Textarea,
  Button,
  ButtonGroup,
  Input,
  IconButton,
  Circle,
  UnorderedList,
  ListItem,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import { CalendarIcon, CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";
import axios from "axios";

import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { eventListeners } from "@popperjs/core";

const API_URL = "http://localhost:5000/api/v1/entries";

function EntryForm(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [newTask, setNewtask] = useState("");
  // const [taskList, setTaskList] = useState([]);
  const [currentTaskIdx, setCurrentTaskIdx] = useState();

  let placeholderText = "- Take over the world\n- Pet the dog";

  // const handleAddTask = () => {
  //   console.log("added");
  //   setTaskList(taskList.concat(newTask));
  //   setNewtask("");
  // };

  // const setTaskFocus = (e) => {
  //   console.log(e.target.value);
  //   let index = taskList.findIndex((item) => item == e.target.value);
  //   setCurrentTaskIdx(index);
  // };

  // const handleEditTask = (nextValue) => {
  //   let updated = taskList.slice();
  //   updated[currentTaskIdx] = nextValue;
  //   setTaskList(updated);
  // };

  // const checkforEnterKey = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     handleAddTask();
  //   }
  // };

  useEffect(() => {
    console.log("list", newTask);
  }, [newTask]);

  const handleTaskBodyChange = (event) => {
    setNewtask(event.target.value);
  };

  const setParams = () => {
    return {
      author: "celina",
      date: startDate.toISOString(),
      tasks_attributes: [{ body: newTask }],
    };
  };

  const handleSubmit = () => {
    axios.post(API_URL, setParams()).then(function (response) {
      console.log(response);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={5} width="50%">
        <Box display="flex" alignItems="center" my={2}>
          <CalendarIcon mr={2} />
          <DatePicker
            style={{ border: "1px solid red" }}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Box>
        {/* <UnorderedList>
          {taskList.map((task, idx) => (
            <ListItem key={idx}>
              <Editable
                defaultValue={task}
                key={idx}
                onFocus={setTaskFocus}
                onSubmit={handleEditTask}
                // onChange={handleTaskEdit}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </ListItem>
          ))}
        </UnorderedList> */}
        <Box display="flex" alignItems="center" mt={7} mb={2}>
          <Textarea
            size="sm"
            onChange={handleTaskBodyChange}
            placeholder={placeholderText}
            value={newTask}
            mr={2}
          />
          {/* 
          <IconButton
            borderRadius={50}
            size="sm"
            colorScheme="blue"
            aria-label="Search database"
            icon={<CheckIcon />}
            onClick={handleAddTask}
          /> */}
        </Box>

        <ButtonGroup variant="outline" size="sm" my={3} spacing="3">
          <Button colorScheme="blue" type="submit">
            Save
          </Button>
          <Button onClick={() => props.setShowForm(false)}>Cancel</Button>
        </ButtonGroup>
      </Box>
    </form>
  );
}

export default EntryForm;
