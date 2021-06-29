import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';
import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <p><h2>{params.taskTitle}</h2></p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur non ea maxime officia ipsam quia? In expedita sed minus deleniti, aperiam pariatur illum corrupti magni inventore veniam esse magnam.
                </p>
            </div>

        </>
    );
}

export default TaskDetails;