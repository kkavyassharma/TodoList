
import './App.css';
import {useState} from "react";
import {Task} from "./Task"

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // const newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList);
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== " " ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };


  const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
      if(task.id === id) {
        return {...task, completed: true};
      }
      else{
        return task;
      }
    })
    );
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
      {todoList.map((task) => {
        return (
           <Task taskName={task.taskName} 
           id={task.id} 
           completed={task.completed} completeTask={completeTask}deleteTask={deleteTask}/>
        );
      })}
      </div>
    </div>
  );
}
export default App;














// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <button onClick = {() => {
//           setCount(count+1);
//       }}>Increase</button>
//       <button onClick={() => {
//         setCount(count-1);
//       }}>Decrease</button>
//       <button onClick={() => {
//         setCount(0);
      
//       }}
//       >Set to Zero</button>
//       {count}
//     </div>
//   )
// }
// export default App;





// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   return (
//     <div className="App">
//       <input type="text" onChange={handleInputChange} />
//       {inputValue}

//     </div>
//   );
// }
// export default App;







// function App() {
//   const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     setAge(age+1);
//   };

//   return (
//     <div className="App">
//       {age}
//       <button onClick={increaseAge}> Increase </button>
//     </div>
//   )
// }
// export default App;




















// function App() {
//   const planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true},
//     { name: "Venus", isGasPlanet: false},
//     { name: "Neptune", isGasPlanet: true},
//     { name: "Uranus", isGasPlanet: true},
    
//   ];
//   return (
//   <div className="App">
//   {planets.map((planet, key) => {
//       if(planet.isGasPlanet)
//       return <h1 key = {key}> {planet.name} </h1>;
      

//     }
  
//     )}
//     </div>
//   );
// }
// export default App;









// function App() {
//   const isGreen = false;
//   const names = ["kavya", "sonali", "harsh", "divya", "jitu"];
  
//   return (
//   <div className='App'>
//       <h1 className='Name'>Kavya</h1>
//       <h1 style={{ color: isGreen ? "green" : "pink" }}>Hii</h1>
//       {names.map((name, key) => {
//         return <h1 key={key}> {name} </h1>;
//       }
//       )}
//   </div>
//   )
// }
// export default App;









// function App() {
//   const name = "kavya";
//   const surname = <h2>sharma</h2>;
//   const age = 22;
//   const user = (
//     <div>
//     <h1>{name}</h1>
//     <h2>{surname}</h2>
//     <h3>{age}</h3>
//     </div>
//   );
//   return (
//     <div className="App">
//       < User salary = "50000" company = "Google"/>
//        < User salary = "10000" company = "Amazon"/>
//     </div>
//   );
// }
// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   );
// }
// export default App;
