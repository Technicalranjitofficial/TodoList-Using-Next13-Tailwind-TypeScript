"use client"

import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodoListCard";
import { useTodo } from "@/store";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {

  const [todoText,setTodo] = useState("");
  
  return (
    <>
      <div
        className="w-full flex justify-center items-center flex-col h-auto
        min-h-screen
    "
      >

        <h1 className=" text-xl text-center md:text-2xl mb-10 mt-10 md:mt-0 font-bold">TODO LIST: Using Next-13 & TYPESCRIPT</h1>
       <InputTodo/>

       
        <TodoList/>

    

      </div>
    </>
  );
}
