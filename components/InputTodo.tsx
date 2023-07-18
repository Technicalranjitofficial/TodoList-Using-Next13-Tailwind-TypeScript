import { useTodo } from "@/store";
import React, { useRef } from "react";

const InputTodo = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const { handleOnAddTodos } = useTodo();

  const handleOnAddTodo = () => {
    if (titleRef.current?.value.length === 0) {
      alert("Title cant be empty");
    }

    if (descriptionRef.current?.value.length === 0) {
      alert("Description cant be empty");
    }

    if (titleRef.current?.value && descriptionRef.current?.value) {
      handleOnAddTodos(titleRef.current.value, descriptionRef.current?.value);

      titleRef.current.value = "";
      descriptionRef.current.value = "";
    }
  };
  return (
    <div
      className="w-full mb-10 mt-5 flex justify-center
    items-center flex-col min-h-[10rem] h-auto"
    >
      <div className="w-4/5 md:w-1/2 flex flex-col">
        <input
          ref={titleRef}
          type="text"
          className="bg-transparent 
           rounded-md outline-none border 
        
           text-center border-slate-500 py-2"
          placeholder="Give a title.."
        />
        <input
          ref={descriptionRef}
          type="text"
          className="w-full
            outline-none
            text-center
            bg-transparent border border-slate-500
            rounded-md
            py-5
            mt-5
            "
          placeholder="Write about your notes..."
        />
        <button
          onClick={handleOnAddTodo}
          className="mt-5 bg-green-700 font-bold hover:bg-green-800 py-2 rounded-md"
        >
          Add todo
        </button>
      </div>
    </div>
  );
};

export default InputTodo;
