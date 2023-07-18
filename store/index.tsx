"use client"

import { ReactNode, createContext, useCallback, useContext, useState } from "react";

import { v4 as uuidv4 } from 'uuid';



export type Todo={
    id:string;
    name:string;
    description:string;
    createdAt:Date;
    editRequested:Boolean,
}


export type TodoContext={
    todos:Todo[];
    handleOnAddTodos:(title:string,description:string)=>void;
    deleteTodo:(id:string)=>void;
    setEditRequested:(val:Boolean,id:string)=>void;
    updateTodo:(id:string,name:string,description:string)=>void;


}
export const todosContext = createContext<TodoContext|null>(null);


export const useTodo = ()=>{
    const todoCont = useContext(todosContext);
    if(!todoCont){
        throw new Error("Context not available");
    }
    return todoCont;
}

export const TodosProvider = ({children}:{children:ReactNode})=>{


    const [todos,setTodos] = useState<Todo[]>(
    
    ()=>{
        if(localStorage.getItem("todo")){
            return JSON.parse(localStorage.getItem('todo')||'[]') as Todo[];
        }
        return [];
    }
    );


    function handleOnAddTodos (title:string,description:string):void{
        setTodos((prev)=>{
            const newTodo = [
              {
                    id:uuidv4(),
                    name:title,
                    description:description,
                    createdAt:new Date(),
                    editRequested:false
                },
                ...prev
            ]

            localStorage.setItem("todo",JSON.stringify(newTodo));

            return newTodo;
        });
      
    }

    function deleteTodo(id:string):void{
        const filter = todos.filter((t)=>{
            return t.id!==id
        });
        setTodos(filter);
        localStorage.setItem("todo",JSON.stringify(filter));

    }

    function setEditRequested(val:Boolean,id:string):void{

        // const notes = todos.findIndex((t)=>t.id===id);
        // const updated = todos[notes].editRequested=true;

        const updated = todos.map((val,index)=>{
             if(val.id===id){
                val.editRequested = true;
            }
            return val;

        });

        setTodos(updated);
        
        // console.log(notes);
    }
    function updateTodo(id:string,name:string,description:string){
        const index = todos.findIndex((t)=>t.id===id);
        // console.log(todo);

       
        const newTodo = [...todos];
        newTodo[index].name=name;
        newTodo[index].description=description;
        setTodos(newTodo);
        localStorage.setItem("todo",JSON.stringify(newTodo));


    }


    return <todosContext.Provider value={{todos,handleOnAddTodos,deleteTodo,setEditRequested,updateTodo}}>
        {children}
    </todosContext.Provider>
}
