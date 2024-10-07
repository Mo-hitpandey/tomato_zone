import React from 'react'
import Img2 from "../../assets/biryani2.png"

const ServiceData =[
    {
        id:1,
        img:Img2,
        name:"Biryani",
        description:
        "lorem lipsum dolar sit amer ipsun fdjf ni dmdo dodjf dkddsldkd jiodjf  fkldfmdkl "
    },
    {
        id:2,
        img:Img2,
        name:"Chiken Kari",
        description:
        "lorem lipsum dolar sit amer ipsun fdjf ni dmdo dodjf dkddsldkd jiodjf  fkldfmdkl "
    },
    {
        id:3,
        img:Img2,
        name:"Cold cofee",
        description:
        "lorem lipsum dolar sit amer ipsun fdjf ni dmdo dodjf dkddsldkd jiodjf  fkldfmdkl "
    },
]

const Services = () => {
  return (
    <>
        <div className="py-10 dark:bg-gray-800">
            <div className="container ">
                {/* header section */}
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>
                    <h1 className="text-3xl font-bold">Services</h1>
                    <p className='text-xs text-gray-400'>
                        {/*  */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla repellat quae quia repudiandae quisquam ab incidunt voluptate iure, tenetur fugit maxime tempore corporis ex beatae non magni facilis inventore deserunt!
                   </p>
                </div>
                {/* card sectionn */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-14 md:gap-5 place-items-center'>
                   {ServiceData.map(({id,img,name,description})=>{
                    return(
                     <div
                     data-aos="zoom-in"
                     data-aos-duration="300" 
                     key={id}
                       className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-500
                    hover:bg-primary hover:text-white duration-300 p-4 shadow-xl '>
                        <div className='h-[100px]'>
                            <img src={img} alt=""
                            className='max-w-[200px] mx-auto block transform -translate-y-14
                            group-hover:scale-105
                            group-hover:rotate-6 duration-300' />
                        </div>
                        <div className='p-4 text-center '>
                            <h1 className="text-xl font-bold">{name}</h1>
                            <p className='text-gray-400 group-hover:text-white dark:group-hover:text-white duration-300 text-sm line-clamp-2'>
                                {description}</p>
                        </div>
                    </div> 
                   )})

                   } 
                </div>
            </div>
        </div>
    </>
  )
}

export default Services
