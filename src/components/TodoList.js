import React, { useCallback, useEffect, useState } from "react";
import { TODO_API } from "../utils/API";
import TodoScreen from "./TodoScreen";

const TodoList = () => {
  const [data, setData] = useState("");
  const getTodo = () => {
    TODO_API.get("/todos")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  getTodo()
  return (
    <div className="h-100 w-full flex items-center justify-start bg-teal-500 font-sans text-2xl">
      <div className="bg-white rounded shadow p-6 m-4 w-full flex flex-col text-gray-700 font-mono divide-y-4 divide-green-100">
        {data.length > 0 &&
          data.map((e) => (
            <TodoScreen key={e.id} id={e.id} title={e.title} content={e.content} data={data}/>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
