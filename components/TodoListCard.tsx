import { useTodo } from "@/store";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import EditDialog from "./EditDialog";
import { convertDate } from "@/lib";

const TodoList = () => {
  const [edit, setEdit] = useState(false);


  interface TodoEditType {
    name:string;
    description:string;
    id:string;
  }

  const TodoEditInitData:TodoEditType = {
    name:"",
    description:"",
    id:""
  }
 
 

  const [todoEdit,setTodoEdit] = useState(TodoEditInitData);
  const { todos, deleteTodo } = useTodo();

  

  return (
    <>
      {edit && <EditDialog setEdit={setEdit}  TodoItem={todoEdit} />}

      <div className="grid mt-3 grid-cols-1  md:grid-cols-3 gap-8">
        {todos.map((val, index) => {
          return (
            <div key={index} className="overflow-hidden rounded-md min-h-full border border-slate-600 bg-slate-900 justify-center relative">
              <div className="absolute flex gap-2 right-5 bottom-5">
                <button
                  onClick={() =>{ 
                   setTodoEdit({
                    name:val.name,
                    description:val.description,
                    id:val.id
                   })
                    setEdit(true)}}
                  className=" border
                        px-2 py-1 border-green-800 rounded-md hover:bg-red-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(val.id)}
                  className=" border
                        px-2 py-1 border-red-800 rounded-md hover:bg-red-800"
                >
                  Delete
                </button>
              </div>

              <div
                className=" sm:w-[20rem] lg:w-[25rem]
            w-[20rem] md:w-[25rem] flex justify-center  items-center md:h-52 h-64 relative overflow-y-auto p-2 text-slate-400 "
              >

                  
                 { val.description}
              
              </div>
              <h1 className="font-semibold text-slate-300 text-lg md:text-2xl line-clamp-2 pl-2 pt-2 font-Roboto">
                {val.name}
              </h1>
              <h1 className="items-center ml-2 mt-1 text-sm text-slate-400 font-bold">
                Ranjit Das
              </h1>
              <span className="items-center ml-2 mt-1 text-xs text-slate-400 font-bold">
                {convertDate(val.createdAt)}
              </span>

              <div className="mb-4"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
