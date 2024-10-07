import React from 'react'
import Food from '../../assets/biryani5.png'





const Banner = () => {
  return (
    <>
    <div className='min-h-[550px]'>
        <div>
            <div 
            data-aos="slide-up"
            data-aos-duration="500"
            className='container'
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div>
                        <img src={Food} alt=""
                        className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]' 
                        />
                    </div>
                    {/* text-content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>
                            lorem lipsum sachin
                            </h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, doloremque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, doloremque!
                            <br />
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, quae excepturi 
                            minima harum a nesciunt quam aliquid dicta, consequuntur nulla velit aliquam. Qui
                             vitae aliquam harum incidunt quaerat labore, optio quibusdam facilis! Dolorum aut
                              quam, velit voluptatibus culpa harum suscipit.
                        </p>
                        <div className='flex gap-6'>
                            <div>
                               <a href=""
                                className='text-4xl h-20 w-20 shadow-sm p-1 rounded-full
                               bg-gray-100 dark:bg-gray-400'>
                                    <i class="fa-solid fa-truck-fast"></i></a>
                            </div>
                            
                            <div>
                               <a href=""
                                className='text-4xl h-20 w-20 shadow-sm p-1 rounded-full
                                bg-orange-100 dark:bg-orange-400'>
                                    <i class="fa-solid fa-truck-fast"></i></a>
                            </div>
                            <div>
                               <a href=""
                                className='text-4xl h-20 w-20 shadow-sm p-1 rounded-full
                                bg-green-100 dark:bg-green-400'>
                                    <i class="fa-solid fa-truck-fast"></i></a>
                            </div>
                            
                        </div>
                        <div>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white 
                            px-6 py-3 rounded-full hover:scale-105 duration-200
                            '>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner