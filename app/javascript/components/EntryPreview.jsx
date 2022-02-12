import React from "react";
import { DateTime } from "luxon";

const EntryPreview = (props) => {
  console.log(props.entry.date);
  return props.entry.tasks.length > 0 ? (
    <div>
      <p>{formatDate(props.entry.date)}</p>
      {props.entry.tasks.map((task) => (
        <p>{task}</p>
      ))}
    </div>
  ) : (
    ""
  );
};

const formatDate = (date) => DateTime.fromISO(date).toLocaleString();

export default EntryPreview;
