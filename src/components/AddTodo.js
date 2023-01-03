import React, { useState } from "react";
import { TODO_API } from "../utils/API";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandlder = (e) => {
    setContent(e.target.value);
  };
  const createTodo = () => {
    TODO_API.post("/todos", {
      title: title,
      content: content,
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-500 font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full">
        <h1 className="text-4xl text-gray-700">AddTodo</h1>
        <div className="flex flex-row mt-4">
          <div>
            <label htmlFor="title" className="text-lg font-medium">
              Title
            </label>
            <input
              className="px-5 py-1 ml-5 border-2 border-blue-500 rounded-xl"
              type="text"
              onChange={titleHandler}
            />
          </div>
          <div className="ml-5">
            <label className="text-lg font-medium">Content</label>
            <input
              className="px-5 py-1 ml-5 border-2 border-blue-500 rounded-xl"
              type="text"
              onChange={contentHandlder}
            />
          </div>
          <button
            className="text-blue-500 px-5 py-1 ml-5 border-2 border-blue-500 rounded-xl"
            onClick={createTodo}
          >
            생성
          </button>
          <button
            className="text-teal-500 px-5 py-1 ml-5 border-2 border-teal-500 rounded-xl"
            onClick={()=>{
              console.log('hi');
              window.location.reload();
            }}
          >
            새로고침
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
