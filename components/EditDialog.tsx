import { useTodo } from '@/store';
import React, { useEffect, useState } from 'react'


interface PageProps{
 
   TodoItem:{
    name:string;
    description:string;
    id:string

   };

   setEdit:(val:boolean)=>void

  
}


const EditDialog = ({TodoItem,setEdit}:PageProps) => {

  const [editName,setEditName] = useState(TodoItem.name);
  const [editDescription,setEditDescription] = useState(TodoItem.description);
  const [id,setId] = useState(TodoItem.id);

  const {updateTodo} = useTodo();



  return (
    <div className='w-screen top-0  h-screen fixed flex justify-center items-center bg-black/90 flex-col z-50'>
      <div className='w-3/4 px-5 rounded-md md:w-2/4 lg:w-2/5  md:h-1/3 flex justify-center items-center flex-col bg-slate-900'>
      <h1 className='font-bold text-xl'>Edit Your Notes</h1>
      <br />
        <div className='flex flex-col'>
            <input value={editName}  onChange={(e)=>setEditName(e.target.value)} type="text" className='py-1 rounded-md bg-transparent pl-2 border border-slate-600'  placeholder='Name' name="" id="" />
            <br />
            <input value={editDescription}  onChange={(e)=>setEditDescription(e.target.value)} className='py-3 pl-2 rounded-md  bg-transparent border border-slate-600' type="text" name="" placeholder='description' id="" />
            <br />
            <button onClick={()=>{
              updateTodo(id,editName,editDescription);
              setEdit(false);
            }}  className='border border-slate-600
            py-2 font-bold hover:bg-green-900 rounded-md bg-green-800 '>Done</button>

        </div>

      </div>

    </div>
  )
}

export default EditDialog