"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const slidesData = [
    {
      image: '/assets/slider/one.jpg',
      title: 'Product One',
      description: 'Description for product one. Add more details here.',
      price: '$49.99',
    },
    {
      image: '/assets/slider/two.jpg',
      title: 'Product Two',
      description: 'Description for product two. Add more details here.',
      price: '$79.99',
    },
    {
      image: '/assets/slider/three.jpg',
      title: 'Product Three',
      description: 'Description for product three. Add more details here.',
      price: '$99.99',
    },
    {
        image: '/assets/slider/four.jpg',
        title: 'Product Three',
        description: 'Description for product Four. Add more details here.',
        price: '$99.99',
      },
  ];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesData?.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData?.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[50vh] overflow-hidden my-20 rounded-lg shadow-lg flex items-center">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full opacity-0 transition-opacity ease-in-out duration-1000 ${
            index === currentSlide ? 'opacity-100' : ''
          }`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Card Over Image */}
          <div className="absolute left-[20%] w-[20vw] top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{slide.title}</h2>
            <p className="text-gray-600 mb-4">{slide.description}</p>
            <p className="text-gray-800 font-bold mb-2">{slide.price}</p>
            <button className="bg-brand-secondary text-white px-4 py-2 rounded-full">Buy Now</button>
          </div>
        </div>
      ))}

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white font-bold text-2xl"
        onClick={prevSlide}
      >
       <ChevronLeft/>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white font-bold text-2xl"
        onClick={nextSlide}
      >
        <ChevronRight/>
      </button>

      <div className="absolute bg-gray px-5 py-1 rounded-full bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slidesData.map((_, index) => (
          <a
            key={index}
            href={`#${index}`}
            onClick={(e) => {
              e.preventDefault();
              goToSlide(index);
            }}
          >
            <div
              className={`h-4 w-4 rounded-full cursor-pointer ${
                index === currentSlide ? 'bg-brand-secondary' : 'bg-gray-deep'
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Slide;
