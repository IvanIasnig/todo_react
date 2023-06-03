import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/navbar";
import Task from "../components/task";
import TaskContext from "../context/taskContext";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [task, setTask] = useState("");
  const { taskArray, setTaskArray } = useContext(TaskContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { taskName: task, isCompleted: false };
    setTimeout(() => {
      setTaskArray([...taskArray, newTask]);
    }, 2000);
    setTask("");
  };

  const handleDelete = (index) => {
    const newTasks = [...taskArray];
    newTasks.splice(index, 1);
    setTaskArray(newTasks);
  };

  const handleCheckboxChange = (index) => {
    const newTasks = [...taskArray];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTaskArray(newTasks);
  };

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
      <Navbar />
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            className="form-control"
            id="task"
            placeholder="Inserisci una task"
            name="task"
            required
            value={task}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-5 mt-1"
          id="submitButton"
        >
          Submit
        </button>
      </form>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Completed</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {taskArray.map((t, i) => (
            <Task
              key={i}
              task={t}
              handleDelete={() => handleDelete(i)}
              onCheckboxChange={() => handleCheckboxChange(i)}
              disabled={false}
              showDelete={true}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
