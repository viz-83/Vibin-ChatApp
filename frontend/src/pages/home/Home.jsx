import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white/5 bg-clip-padding backdrop-blur-lg border border-gray-100 shadow-lg'>
    <Sidebar/>
    <MessageContainer/>
    </div>
  )
}

export default Home