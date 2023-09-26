'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState,FormEvent } from 'react';

 

export default function Home() {
  const [inputVal,setInputVal]=useState(" ");
  const handleSubmit =(event:FormEvent)=>{
    event.preventDefault();
    push(`/name/${inputVal}`);
  };
  const {push}=useRouter()
  return (
    <main >
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-4 shadow-md bg-white rounded-md">
            
            <h1 className='text-black text-2*l font-semibold mb-4'>enter your name</h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" placeholder="enter your name" onChange={(e)=>setInputVal(e.target.value)} className="w-full p-2 border border-gray-300 rounded text-black"/>
                <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">submit</button>              
                  </form></div>
    </main>
  )
}
