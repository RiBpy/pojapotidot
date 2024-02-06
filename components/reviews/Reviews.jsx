"use client";

import React, { useEffect, useState } from "react";
import { size } from "lodash";
import { ChevronLeft, ChevronRight, Star } from "react-feather";
import { reviewData } from "@/components/reviews/uidata";

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHOvered] = useState(false);
  const reviewAmount = size(reviewData);

  const showNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewAmount);
  };

  const showPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviewAmount) % reviewAmount
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) showNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex,isHovered]);

  const renderStars = (rating) => {
    const stars = [];
    let fullStars = Math.floor(rating);
    for (let i = 1; i <= fullStars; i++) {
      stars.push(<Star className="w-5 h-5 fill-blue" />);
    }
    return stars;
  };

  return (
    <section>
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="left_section max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't just take our word for it...
            </h2>

            <p className="mt-4 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex items-center justify-center lg:gap-4">
              <div
                className="w-10 h-10 rounded-full ring-1 ring-red-900 text-red-900 bg-white flex items-center justify-center"
                onClick={showPrevSlide}
              >
                <ChevronLeft />
              </div>
              <div
                className="w-10 h-10 rounded-full ring-1 ring-red-900 text-red-900 bg-white flex items-center justify-center"
                onClick={showNextSlide}
              >
                <ChevronRight />
              </div>
            </div>
          </div>
          <div className="right_section lg:col-span-2 lg:mx-0">
            <div
              className="review-slider"
              onMouseEnter={() => setIsHOvered(true)}
              onMouseLeave={() => setIsHOvered(false)}
            >
              {reviewData?.map((review, index) => (
                <div
                  key={review?.id}
                  className={`shadow-lg h-[30vh] border border-gray rounded-lg  ${
                    currentIndex === index ? "block" : "hidden"
                  }`}
                >
                  <blockquote className="flex h-full flex-col justify-between bg-white w-full rounded-lg p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {renderStars(review?.rating)}
                      </div>
                      <p className="mt-4 text-2xl font-bold text-rose-600 sm:text-3xl">
                        {review?.title}
                      </p>
                      <div className="mt-4 max-h-[10vh] overflow-y-auto">
                        <p className="mt-4 leading-relaxed text-gray-700">
                          {review?.description}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; {review?.username}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
