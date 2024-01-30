import { useState } from "react";

const todo = [
  // {
  //   todo: "Pack Your clothes",
  //   date: "",
  // },
  // {
  //   todo: "Done home Work",
  //   date: "",
  // },
  // {
  //   todo: "Go to market and purchase some vegetables",
  //   date: "12/sep/2023",
  // },
];

function App() {
  return (
    <>
      <h1 className="text-white text-center py-5 font-mono text-4xl">
        Todo App
      </h1>
      <div className="w-[60%] mx-auto bg-slate-800 rounded-sm p-4">
        <InputForm />
        <List />
      </div>
    </>
  );
}

function InputForm() {
  
  const addItem = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <form className="flex justify-between text-l">
      <input
        className="font-sans rounded-md w-[40%] text-white bg-slate-700 text-center text-l p-2"
        type="text"
        placeholder="Enter todo here.."
      />
      <input
        className="font-sans rounded-md w-[40%] text-white bg-slate-700 text-center text-l p-2"
        type="date"
      />

      <button
        onClick={() => addItem()}
        className=" text-white bg-Green px-10 bg-purple-600 rounded-xl hover:bg-purple-700 "
      >
        Add
      </button>
    </form>
  );
}

function List() {
  return (
    <div
      className="w-[100%]  rounded-sm text-base
    py-2 text-white flex flex-col"
    >
      {todo.map((data) => (
        <Item todo={data.todo} date={data.date} />
      ))}
    </div>
  );
}
export default App;

function Item({ todo, date }) {
  return (
    <div
      className="flex justify-around my-2  text-base bg-slate-700 
    py-2 text-white rounded-md"
    >
      <div className="font-sans w-1/2 text-white text-left text-sl p-2 rounded-md">
        {todo}
      </div>
      <div className="font-sans rounded-sm w-1/4 text-white text-center  p-2">
        {date ? date : "No due date"}
      </div>
      <button className=" text-white px-4 py-2 bg-red-600 rounded-xl hover:bg-red-700 text-l">
        Del
      </button>
    </div>
  );
}
