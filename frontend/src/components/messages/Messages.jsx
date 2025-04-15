import React, { useEffect,useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

function Messages() {
  const {messages,loading} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    },100)
  },[messages])
  return (
    
    <div className=' flex-1 overflow-y-auto px-4 h-full pr-1 '>

      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message  message={message}/>
        </div>
      ))}


      {loading && [...Array(3)].map((_,idx)=>( <MessageSkeleton key={idx}/>))}

      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-400 font-semibold'>
          No messages yet. Start the conversation!
        </p>
        )}
        
    </div>
  )
}

export default Messages