import React from "react";
function TaskItem({taskName,deleteTask,completeTask}) {
    return(
        <>
            <li className='task d-flex flex-row justify-content-between'> 
                {taskName}
              <div className='task-buttons w-20'>
                <button className="btn btn-success btn-sm " onClick={()=>{completeTask(taskName)}}>Complete</button>
                <button className="btn btn-danger btn-sm " onClick={()=>{deleteTask(taskName)}}>Delete</button>
              </div>
            </li>
        </>
    )
}
 export default TaskItem;