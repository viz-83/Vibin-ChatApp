import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

function SignUp() {

    const [inputs,setInputs] =useState({
        fullName:"",
        userName:"",
        password:"",
        confirmPassword:"",
        gender:""
    })

    const {loading,signup} = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender})
          }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await signup(inputs);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full bg-white/5 rounded-md bg-clip-padding backdrop-blur-lg border border-gray-100 shadow-lg p-6'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up
            <span className='text-blue-500'> Vibin!</span>
        </h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label className="label p-2">
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input type="text" 
                placeholder='Enter your name'
                className='w-full input input-bordered h-10'
                value={inputs.fullName}
                onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
            </div>

            <div>
                <label className="label p-2">
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" 
                placeholder='Enter Username'
                className='w-full input input-bordered h-10'
                value={inputs.userName}
                onChange={(e)=>setInputs({...inputs,userName:e.target.value})} />
            </div>

            <div>
                <label className="label p-2">
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type="password" 
                placeholder='Enter Password'
                className='w-full input input-bordered h-10'
                value={inputs.password}
                onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
            </div>

            <div>
                <label className="label p-2">
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type="password" 
                placeholder='Enter Password'
                className='w-full input input-bordered h-10' 
                value={inputs.confirmPassword}
                onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>
            </div>

            {/* GENDER CHECKBOX*/}
            <label className="label p-2">
            <span className='text-base label-text'>Gender</span>
            </label>
            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
            

        <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 px-1 inline-block'>
              Already have an account?
        </Link>
        <div>
            <button className='btn btn-block btn-sm mt-2 bg-blue-800'
            disabled={loading}
            >
            {loading ? <span className='loading loading-spinner loading-xs text-primary'></span> : "Sign Up"}
            </button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default SignUp