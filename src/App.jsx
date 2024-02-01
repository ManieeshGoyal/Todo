import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
      <h1 className="text-white text-center py-5 font-mono text-4xl">
        Todo App
      </h1>
      <div className="w-[60%] mx-auto bg-slate-800 rounded-md p-4">
        <InputForm addTodo={setTodo} todo={todo} />
        <List todo={todo} removeTodo={setTodo} />
      </div>
    </>
  );
}

function InputForm({ addTodo, todo }) {
  const [date, setDate] = useState();
  const [task, setTask] = useState();

  const newTask = {
    date,
    task,
  };

  const addItem = (e) => {
    e.preventDefault();

    if (task == null || task == "") return;
    addTodo([...todo, newTask]);
  };

  return (
    <form className="flex justify-between text-l">
      <input
        className="font-sans rounded-md w-[40%] text-white bg-slate-700 text-center text-l p-2"
        type="text"
        placeholder="Enter todo here.."
        required
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        className="font-sans rounded-md w-[40%] text-white bg-slate-700 text-center text-l p-2"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        onClick={addItem}
        className=" text-white bg-Green px-10 bg-purple-600 rounded-xl hover:bg-purple-700 "
      >
        Add
      </button>
    </form>
  );
}

function List({ todo, removeTodo }) {
  return (
    <div
      className="w-[100%]  rounded-sm text-base
     text-white flex flex-col"
    >
      {todo.map((data, index) => (
        <Item
          key={index}
          todo={data.task}
          date={data.date}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}
export default App;

function Item({ todo, date, removeTodo }) {
  return (
    <div
      className="flex justify-around my-2  text-base bg-slate-700 
    py-2  text-white rounded-md last:mb-0 first:mt-4"
    >
      <div
        className={`font-sans w-1/2 text-white text-left text-sl p-2 rounded-md`}
      >
        {todo}
      </div>
      <div className="font-sans rounded-sm w-1/4 text-white text-center  p-2">
        {date ? date : "No due date"}
      </div>
      <button
        onClick={removeTodo}
        className=" text-white h-12 px-4 py-2 bg-red-600 rounded-xl hover:bg-red-700 text-l"
      >
        Delete
      </button>
    </div>
  );
}
