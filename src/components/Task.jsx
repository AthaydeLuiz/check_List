import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import './components_style/Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push({
            pathname: `/${task.id}`,
            state: { detail: task },
          });
    }
    return (
        <div
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid chartreuse " } : {}}
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-container">
                <button
                    className="remote-task-button"
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose />
                </button>
                <button
                    className="see-task-detail-button" onClick={handleTaskDetailsClick}
                >
                    <CgInfo />
                </button>

            </div>
        </div>
    );

}

export default Task;