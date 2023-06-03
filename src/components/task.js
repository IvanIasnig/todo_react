import React from "react";

function Task({ task, handleDelete, onCheckboxChange, disabled, showDelete }) {
  return (
    <tr>
      <td>{task.taskName}</td>
      <td>
        <input
          className="ms-4"
          type="checkbox"
          aria-label="Checkbox for following text input"
          checked={task.isCompleted}
          onChange={onCheckboxChange}
          disabled={disabled}
        />
      </td>
      {showDelete && (
        <td>
          <button className="btn btn-danger btn-sm" onClick={handleDelete}>
            Delete
          </button>
        </td>
      )}
    </tr>
  );
}

export default Task;
