import React, { useState } from 'react';

import Button from './Button';

import "./components_style/AddTask.css";


const AddTask = ({ handleTaskAddition }) => {


    const [inputData, setInputData] = useState("");
         
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };
    
    const handleTaskClick = () =>{
        const data ={title: inputData, completed:"false", taskDetail:""};
        
        fetch('http://localhost:2707/checklist/insere',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
            }).then(()=> {
            console.log('task-added');
            console.log(data)
        
            
        })
         
        handleTaskAddition(inputData);
        
        setInputData(""); 
    };

    return (
        <div className="add-task-container">
            <input
                onChange={handleInputChange}
                value={inputData}
                 
                className="add-task-input"
                type="text"
            />
            
            <div className="add-task-button-container">
                <Button onClick={handleTaskClick}> Adicionar</Button>
            </div>
        </div>
    );
}

export default AddTask;