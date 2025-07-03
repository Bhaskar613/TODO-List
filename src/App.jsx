import { useState } from 'react'

import './App.css'
import TaskItem from './Components/TaskItem'

function App() {
  const [newTask, setNewTask] = useState("");
  const [myTasks,setMyTasks] = useState(["Writing notes","Reading a book","Attending an event","Attending an class"]);
  const [completedTasks,setCompletedTasks] = useState([]);


  function handleInput(e)
  {
    let newValue = e.target.value;
    setNewTask(newValue);
  }
  
  function addTask()
  {
   
    setMyTasks(prev=>([...prev, newTask]));
    console.log(myTasks)
    setNewTask(""); // Clear the input field after adding the task  
  }
  function deleteTask(taskName){
    let afterDeletion=myTasks.filter(x=>x!=taskName);
    setMyTasks(afterDeletion);
  }
  function completeTask(taskName){
    let CompletedTask=myTasks.filter(x=>x==taskName);
    let afterCompletion=myTasks.filter(x=>x!=taskName);
    setMyTasks(afterCompletion);
    setCompletedTasks(prev=>([...prev, CompletedTask[0]]));
    console.log("completed task:",CompletedTask[0]);
  }


  return (
    <>
    <div className="main-body d-flex justify-content-center align-items-center flex-column">
      <div className="todolist-mainDiv">
        <h3>My Todo List</h3>

        <div>
          <div className='todo-task-input-div'>
            <div className="form-floating w-75">
              <input type="text" className="form-control" id="floatingInput" placeholder="Todo Task" onChange={(e)=>{handleInput(e)}}
              value={newTask}/>
              <label htmlFor="floatingInput">Todo Task </label>
            </div>
          <button className="btn btn-primary btn-sm w-20" id="add-button" onClick={()=>{addTask()}}>+</button>
        </div>
          <h6>To be completed</h6>
          <ul className='task-list mt-3'>
            {
              myTasks.map((task,index) => 
                <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask}/>
              )
            }

          </ul>
          <hr/>
          <h6> Completed Tasks</h6>
          <ul className='task-list mt-3'>
            {
              completedTasks.map((task,index) => 
                <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask}/>
              )
            }

          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
