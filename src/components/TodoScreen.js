import React, { useState } from "react";
import { TODO_API } from "../utils/API";

const TodoScreen = ({ id, title, content, data }) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const updateTitle = (e) => {
    setNewTitle(e.target.value)
  };
  const updateContent = (e) => {
    setNewContent(e.target.value)
  };
  const updateTodos = (e) => {
    e.preventDefault();
    setEdit(true);
  };
  const sendUpdatedInfo=(e)=>{
    e.preventDefault()
    setEdit(false)
    TODO_API.put(`/todos/${id}`, {
      title:newTitle,
      content:newContent
    })
    .then((res)=>console.log(res))
    .catch((err) => console.log(err))
  }
  const removeTodos = (e) => {
    e.preventDefault()
    TODO_API.delete(`/todos/${id}`,{
    })
    .then((res)=>console.log(res))
    .catch((err) => console.log(err))
  };
  return (
    <div>
      <div key={id}>
        <div className="flex mb-4 items-center mt-10">
          <p className="text-xl ">Title : </p>
          {edit ? (
            <input
              className="px-2 py-1 ml-2 border-2 border-blue-300 rounded-xl"
              type="text"
              onChange={updateTitle}
            />
          ) : (
            <p className="text-green-700">{newTitle}</p>
          )}
          <p className="text-xl ml-10">Content : </p>
          {edit ? (
            <input
              className="px-2 py-1 ml-2 border-2 border-blue-300 rounded-xl"
              type="text"
              onChange={updateContent}
            />
          ) : (
            <p className="text-green-700">{ newContent }</p>
          )}
          <div className="ml-5 space-x-5">
            {edit ? (
              <button
                onClick={sendUpdatedInfo}
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green-700 border-green-600 hover:bg-green"
              >
                수정완료
              </button>
            ) : (
              <button
                onClick={updateTodos}
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green-700 border-green-600 hover:bg-green"
              >
                수정하기
              </button>
            )}
            <button
              onClick={removeTodos}
              className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red-400 hover:text-red-500 hover:bg-red"
            >
              제거하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoScreen;
