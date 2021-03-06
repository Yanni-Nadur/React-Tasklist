import React, { useState } from 'react';
import "./AddTask.css"
import Button from './Button';

const AddTask = () => {
    const[inputData, setInputData] = useState('')

    const handleInputChange = (e) =>{
        console.log(e.target.value);
    }

    return (
        <div className="add-task-container">
            <input onChange={handleInputChange} className='add-task-input' type="text" />
            <div className="add-task-button-container">
                <Button>Adicionar</Button>
            </div>
        </div>
    );
}
 
export default AddTask;