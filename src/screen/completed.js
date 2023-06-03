import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/navbar";
import Task from "../components/task";
import TaskContext from "../context/taskContext";

function Completed() {
  const { taskArray } = useContext(TaskContext);
  const [isLoading, setIsLoading] = useState(true); 

  const completedTasks = taskArray.filter(task => task.isCompleted);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []); 

if (isLoading) {
    return (
      <div class="spinner-container">
        <div class="text-center">
          <p>Recupero task...</p>
          <svg
            class="spinner"
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="path"
              fill="none"
              stroke-width="6"
              stroke-linecap="round"
              cx="33"
              cy="33"
              r="30"
            ></circle>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar></Navbar>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
        {completedTasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            disabled={true}
            showDelete={false}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Completed;

