import React, { useCallback, useEffect, useState } from "react";
import { TODO_API } from "../utils/API";

const TodoList = () => {
  const [data, setData] = useState("");

  const getTodo = () => {
    TODO_API.get("/todos")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTodo()
  }, []);
  console.log(data);
  const id=0
  const updateTodos = (e) => {
    console.log(e);
    // const newTitle=
    // const newContent=
    TODO_API.put(`/todos/:${id}`, {

    });
  };
  const removeTodos = () => {
    TODO_API.delete(`/todos/:${id}`,{

    })
  };
  console.log(data);
  return (
    <div className="h-100 w-full flex items-center justify-start bg-teal-500 font-sans text-2xl">
      <div className="bg-white rounded shadow p-6 m-4 w-full flex flex-col text-gray-700 font-mono divide-y-4 divide-green-100">
        {data.length > 0 &&
          data.map((e) => (
            <div key={e.id}>
              <div className="flex mb-4 items-center mt-10">
                <p className="text-xl ">Title : </p>
                <p className="text-green-700">{e.title}</p>
                <p className="text-xl ml-10">Content : </p>
                <p className="text-green-700">{e.content}</p>
                <div className="ml-5 space-x-5">
                  <button
                    onClick={updateTodos}
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green-700 border-green-600 hover:bg-green"
                  >
                    수정하기
                  </button>
                  <button
                    onClick={removeTodos}
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red-400 hover:text-red-500 hover:bg-red"
                  >
                    제거하기
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
