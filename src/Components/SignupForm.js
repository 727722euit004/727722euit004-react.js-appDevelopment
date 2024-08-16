import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("customer");

    const [formData, setFormData] = useState({
        userName: "",
        number: "",
        address: "",
        email: "",
        password: "",
        
    })
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, [event.target.name]: event.target.value
            }
        ))
    }

    const [showPassword, setShowPassword] = useState(false)

    // function submitHandler(event) {
    //     event.preventDefault();
    //     if (formData.password !== formData.confirmPassword) {
    //         toast.error("Password do not match");
    //         return;
    //     }
    //     setIsLoggedIn(true);
    //     toast.success("Account Created");
    //     const accountData = {
    //         ...formData
    //     };

    //     const finalData = {
    //         ...accountData, accountType
    //     }

    //     console.log("printing final account data");
    //     console.log(finalData);
    //     navigate("/menu");
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hi');
        try {
          const response = await fetch('http://localhost:8080/api/postusers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          const data = await response.json();
          if (response.ok) {
            console.log('Registration successful:', data);
            navigate('/login')
          } else {
            console.error('Registration failed:', data);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-z-1 my-6 rounded-full max-w-max'>
                <button
                    className={`${accountType === "customer"
                        ?
                        "bg-pink-600 text-pink-100"
                        : "bg-transparent text-pink-200"} py-2 px-5 rounded-full
                    transition-all duration-200`}
                    onClick={() => {
                        setAccountType("customer")
                    }}
                >
                    Customer
                </button>
                <button
                    className={`${accountType === "seller"
                        ?
                        "bg-pink-600 text-pink-200"
                        : "bg-transparent text-pink-200"} py-2 px-5 rounded-full
                 transition-all duration-200`}
                    onClick={() => {
                        setAccountType("seller")
                    }}
                >
                    Seller
                </button>
            </div>

            <form onSubmit={handleSubmit} className=''>
                <div className='flex flex-row gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p
                            className='text-[0.875rem] text-richblack-5 mb-1  leading-[1.375rem]'
                        >First Name<sup
                            className='text-red-400'
                        >*</sup></p>
                        <input required type='text' name='userName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.userName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p
                            className='text-[0.875rem] text-richblack-5 mb-1  leading-[1.375rem]'
                        >Number<sup
                            className='text-red-400'
                        >*</sup></p>
                        <input required
                            type="number"
                            name='number'
                            onChange={changeHandler}
                            placeholder='Enter number'
                            value={formData.number}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                <div className='mt-[20px]'>
                    <label className='w-full mt-4'>
                        <p
                            className='text-[0.875rem] text-richblack-5 mb-1  leading-[1.375rem]'
                        >Email Address<sup
                            className='text-red-400'
                        >*</sup></p>
                        <input required type='email' name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                <div className='flex flex-row gap-x-4 mt-[20px]'>
                    <label className=' w-full relative'>
                        <p
                            className='text-[0.875rem] text-richblack-5 mb-1  leading-[1.375rem]'
                        >Create Password<sup
                            className='text-red-400'
                        >*</sup></p>
                        <input required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className=' w-full relative'>
                        <p
                            className='text-[0.875rem] text-richblack-5 mb-1  leading-[1.375rem]'
                        >address<sup
                            className='text-red-400'
                        >*</sup></p>
                        <input required
                            name='address'
                            onChange={changeHandler}
                            placeholder='address'
                            value={formData.address}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {/* {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)} */}
                        </span>
                    </label>
                </div>


                <button className='bg-yellow-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7 w-full'>
                    Create Account
                </button>


            </form>
        </div>
    )
}

export default SignupForm