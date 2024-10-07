import React from 'react';
import Slider from "react-slick";
import Food1 from '../../assets/biryani2.png';
import Food2 from '../../assets/biryani3.png';
import Food3 from '../../assets/biryani5.png';

const TestimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor in reprehenderit in voluptate velit esse cillum dolore.",
    img: Food1,
  },
  {
    id: 2,
    name: "Alex",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor in reprehenderit in voluptate velit esse cillum dolore.",
    img: Food2,
  },
  {
    id: 3,
    name: "Jessica",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris",
    img: Food3
  },
  {
    id: 4,
    name: "Michael",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore dolor in reprehenderit in voluptate velit esse cillum dolore.",
    img: Food2,
  },
];

const Testomonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="300"
    className='py-10'>
      <div className="container">
        {/* header section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla repellat quae quia repudiandae quisquam ab incidunt voluptate iure, tenetur fugit maxime tempore corporis ex beatae non magni facilis inventore deserunt!
          </p>
        </div>
        {/* testimonial section */}
        <div
        data-aos="zoom-in"
        data-aos-duration="300"
         className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
          <Slider {...settings}>
            {TestimonialData.map(({ id, name, text, img }) => (
              <div key={id} className='my-6'>
                <div className='flex flex-col justify-center items-center
                gap-4 text-center shadow-lg mx-4 rounded-xl dark:bg-gray-800
                bg-primary/10 relative'>
                  <img src={img} alt={name} className='w-25 h-24 rounded-full mx-auto' />
                  <p className='text-gray-600'>{text}</p>
                  <h3 className='text-xl font-semibold'>{name}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
