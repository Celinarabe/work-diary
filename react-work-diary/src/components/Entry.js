import React from 'react';

function Entry(props) {
  return <div>
    <h1>here are ur tasks ho</h1>
    {props.entries.map((entry) => {
      return <h2>{entry.author}</h2>
    })}
  </div>;
}

export default Entry;
