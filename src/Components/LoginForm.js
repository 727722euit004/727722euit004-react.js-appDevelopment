import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/menu");
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await axios.get('http://localhost:8080/api/getusers');
          const users = response.data;
    
          const user = users.find(
            (user) => user.email === formData.email && user.password === formData.password
          );
    
          if (user) {
            console.log('Login successful:', user);
            
            setIsLoggedIn(true);
            navigate('/menu');
          } else {
            
            console.log('Invalid email or password');
          }
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
    return (
        <form onSubmit={handleSubmit} 
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1  leading-[1.375rem]'>
                Email address <sup className='text-red-400'>*</sup>
                </p>
                <input required type='email' value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email Address' name='email'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>

            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1  leading-[1.375rem]'>
                    Password <sup className='text-red-400'>*</sup>
                </p>
                <input required type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password' name='password'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    ></input>
            
            <span
            className='absolute right-3 top-[38px] cursor-pointer' 
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-400 max-w-max w-full ml-auto'>
                    Forgot Password
                </p>
            </Link>
            </label>

            <button className='bg-yellow-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7' >
                Sign In
            </button>
        </form>
    )
}

export default LoginForm