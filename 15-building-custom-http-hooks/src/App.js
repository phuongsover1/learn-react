import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = useCallback((data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      if (data.hasOwnProperty(taskKey)) {
        const element = data[taskKey];
        loadedTasks.push({ id: taskKey, text: element.text });
      }
    }
    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(getTasks);

  useEffect(() => {
    fetchTasks({
      url: "https://react-http-d373b-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
    });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
