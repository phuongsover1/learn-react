import React, { useMemo } from 'react';

// PERFORMANCE INTENSIVE COMPONENT
const DemoList = props => {
  const { items } = props;
  console.log('IN DEMO LIST');
  const sortedList = useMemo(() => {
    console.log('IN SORTED LIST');
    return items.sort((a, b) => a - b); // performance intensive
  }, [items]);

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoList;
