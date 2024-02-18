import React from "react";
import Task from "./Task";


function TaskList({ tasks, handleDelete, selectedCategory }) {
    const allTasks = tasks.filter((task) => {
      if (selectedCategory === "All") return true;
      return task.category === selectedCategory;
    });

    
    return (
      <div className="tasks">
  {allTasks.map((task) => (
    <Task
    key={task.text}
    text={task.text}
    category={task.category}
    onDelete={handleDelete}
    />
    ))}
</div>
);

};

TaskList.defaultProps = {
  tasks: [],
  handleDelete: () => {},
  selectedCategory: "All",
};
export default TaskList;
