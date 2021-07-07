import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from './Button';
import "./components_style/TaskDetails.css";

const TaskDetails = () => {
    const history = useHistory();
    const detail = history.location.state.detail;


    const handleBackButtonClick = () => {
        history.goBack();
    };
    
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <p><h2>{detail.title}</h2></p>
                <p>
                    {detail.taskDetail}
                </p>
                
            </div>

        </>
    );
}

export default TaskDetails;