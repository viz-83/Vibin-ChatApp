import React from 'react'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { toast } from 'react-hot-toast'


function useLogin() {
  const [loading,setLoading] = useState(false)
  const {setAuthUser} =useAuthContext()

  const login = async (userName, password) => {

      const success=handleInputErrors({userName,password})
      if(!success) return;
    setLoading(true)
    try{
        const res=await fetch("/api/auth/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({userName,password})
          })
          if (!res.ok) {
            const errorData = await res.json().catch(() => ({})) // avoid JSON error
            throw new Error(errorData.error || "Login failed.")
          }
          const data = await res.json()
          if(data.error) throw new Error(data.error)

          localStorage.setItem("chat-user",JSON.stringify(data))
          setAuthUser(data)
    }catch(error){
       toast.error(error.message)
    }finally{
        setLoading(false)
    }
  }

  return {login, loading}
}

export default useLogin

function handleInputErrors({userName,password}) {
  if (!userName || !password) {
      toast.error("Please fill all fields")
      return false;
  }
  return true;
}