import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'
import { AddTask } from './components/AddTask';
function App() {
  const [showAddTask,setShowAddTask]=useState(false)

  const[tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctors appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'Doctors appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:3,
        text:'Doctors appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true
    }
    ])

    const addTask=(task)=> {
      const id=Math.floor(Math.random()*10000)+1
      const newTask={id,...task}
      setTasks([...tasks,newTask])
    }

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
const toggleReminder=(id)=>{
  setTasks(
    tasks.map((task)=>
    task.id===id?{...task,reminder:
      !task.reminder}:task))
}
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask&&<AddTask onAdd={addTask}></AddTask>}
      {tasks.length==0?'No tasks to show':<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />}
    </div>
  );
}

export default App;
