import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import useConversation from '../../zustand/useConversation.js';
import useGetConversations from '../../hooks/useGetConversation.js'
import { toast } from 'react-hot-toast';

export default function SearchInput() {
  const [search,setSearch]=useState('')
  const { setSelectedConversation }=useConversation()
  const {conversations}=useGetConversations()

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!search) return
    if(search.length<3){
      toast.error('Search term must be at least 3 characters long')
    }
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    }else{
      toast.error('No conversation found')
      setSearch('')
    }

  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center w-full p-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full'
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}/>
        <button type="submit" className='btn btn-circle ml-2 bg-blue-800 hover:bg-gray-600'>
            <IoMdSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}
