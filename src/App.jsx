import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from './components/TaskDetails';

import "./components/components_style/App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    // {
    //   id: "1",
    //   title: "Estudo",
    //   completed: false,
    // },
    // {
    //   id: "2",
    //   title: "Ler Livros",
    //   completed: true,
    // },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('http://localhost:2707/');
      console.log(data)
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
        taskDetail: ""
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks);
  }

  return (
    <Router>

      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />

            </>
          )}
        />
        <Route path="/:TaskTitle" exact component={TaskDetails} />

      </div>
    </Router>
  );
};

export default App;