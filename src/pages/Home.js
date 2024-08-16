import React from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { BiSolidTruck } from 'react-icons/bi';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <header className='flex flex-col items-start ml-20 mt-20'>
        <div className='flex flex-col' style={{marginTop:'0',paddingTop:'0'}}>
          <h1 className='text-5xl font-bold'>Order Your Favourite</h1>
          <h1 className='text-5xl font-bold mt-2'>We deliver food fast and safely. Order right away!</h1>
        </div>
        <div className='relative mt-10'>
        </div>
      </header>

      <section className='mt-10 mx-20'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold mb-4'>Why Choose Us?</h2>
          <p className='text-lg'>
            Our food delivery service offers a seamless and enjoyable experience.
            We take pride in delivering delicious meals quickly and efficiently.
            Here are some reasons why our customers love us:
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-around'>    
        </div>
      </section>

      <section className='mt-10 mx-20'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold mb-4'>Hotel Details</h1>
        </div>

        {/* Flex container for images */}
        <div className='flex flex-wrap justify-around gap-6'>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.8etzcFtv8irDJZQRLaZ7EQHaHZ&pid=Api&P=0&h=180' alt='Featured Dish 1' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>SS Hyderabad</h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse3.mm.bing.net/th?id=OIP.ypI_jz0tkMn7FM6pJqCSPAHaEK&pid=Api&P=0&h=180' alt='Featured Dish 2' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>KFC</h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.Tkc_Nmyss9isNIIXC8uuAgAAAA&pid=Api&P=0&h=180' alt='Featured Dish 3' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>Street Arabia</h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.7xvIGUByIvMeoRBClaMgFwHaHa&pid=Api&P=0&h=180' alt='Featured Dish 4' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>McDonald's</h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.vV7JR7eGaRUwzAbFcYFzkAHaHa&pid=Api&P=0&h=180' alt='Featured Dish 5' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>Starbucks</h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.0m56rfhI8HVo6x5HTdDRewHaHa&pid=Api&P=0&h=180' alt='Featured Dish 6' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>Le Meridien</h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse3.mm.bing.net/th?id=OIP.0IgGc9d2XiCzE-vYWVk8DwHaEK&pid=Api&P=0&h=180' alt='Featured Dish 7' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>Burger King</h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.jXw3lkXWjQvmrisshfTXOAHaEX&pid=Api&P=0&h=180' alt='Featured Dish 8' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>Belgian Waaffle</h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.MjsFh0lbtMSinCNRuM9mrQHaHa&pid=Api&P=0&h=180' alt='Featured Dish 9' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>Biriyani Hut</h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.cXdhGxuzG0dnBJP9aS_ldQHaHa&pid=Api&P=0&h=180' alt='Featured Dish 10' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>Chinese Hut</h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.7otw9e3BmJP8ZcFa5NnCaAAAAA&pid=Api&P=0&h=180' alt='Featured Dish 11' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>Sree Annapoorna Restaurant </h1>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-1/2 md:w-1/4'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.Tc0mtCXKpaRItqciXdp3mwHaEo&pid=Api&P=0&h=180' alt='Featured Dish 12' className='h-40 w-full object-cover rounded-md mb-4' />
            <h1 className='text-xl font-semibold'>Taco Bell</h1>
          </div>
        </div>
      </section>

      <section className='mt-10 mx-20'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold mb-4'>Customer Testimonials</h2>
          <p className='text-lg'>
            Hear from our satisfied customers about their experience with our food delivery service.
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-around'>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg mb-6 md:mb-0'>
            <p className='text-md italic'>
              "The delivery was fast, and the food was absolutely delicious! I will definitely order again."
            </p>
            <p className='font-semibold mt-2'>– Jane D.</p>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
            <p className='text-md italic'>
              "Great service and wide variety of options. The food arrived hot and on time. Highly recommend!"
            </p>
            <p className='font-semibold mt-2'>– John S.</p>
          </div>
        </div>
      </section>

      <section className='mt-10 mx-20'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold mb-4'>How It Works</h2>
          <p className='text-lg'>
            Follow these simple steps to enjoy your favorite meals:
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-around'>
          <div className='flex flex-col items-center mb-6 md:mb-0'>
            <BsBagCheckFill className='text-4xl mb-2' />
            <h3 className='text-xl font-semibold'>1. Choose Your Meal</h3>
            <p className='text-md mt-2'>
              Browse through our menu and select the dishes you want to order.
            </p>
          </div>
          <div className='flex flex-col items-center mb-6 md:mb-0'>
            <IoLocationSharp className='text-4xl mb-2' />
            <h3 className='text-xl font-semibold'>2. Select Delivery Location</h3>
            <p className='text-md mt-2'>
              Enter your address to choose where you want your food to be delivered.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <BiSolidTruck className='text-4xl mb-2' />
            <h3 className='text-xl font-semibold'>3. Enjoy Your Meal</h3>
            <p className='text-md mt-2'>
              Our team will deliver your food on time, so you can enjoy a delicious meal without any hassle.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
