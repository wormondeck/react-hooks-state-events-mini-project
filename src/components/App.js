import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(text) {

    let filteredTask = tasks.filter(task => {
      return task.text !== text
    })
    setTasks(filteredTask)
  }

  function handleTaskFormSubmit(formData) {
    setTasks([...tasks, formData]);
  }

  if (!categories) {
    return <h1>loading</h1>
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} categories={categories} onCategorySelect={setSelectedCategory} />
      <NewTaskForm  categories={categories} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList categories={categories} tasks={tasks} handleDelete={handleDelete} selectedCategory={selectedCategory} />
      
    </div>
  );
}

export default App;
