import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel() {
  const CarouselData = [
    {
      id: 1,
      imgaes: "./bighand.png",
      heading: "Wizkid made in lagos tour",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 2,
      imgaes: "./bighand.png",
      heading: "Hablu Programmer",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 3,
      imgaes: "./bighand.png",
      heading: "We are learning Front in development",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlider = CarouselData[currentIndex];

  const handelPrev = () => {
    setCurrentIndex((prevIndex)=>(
      prevIndex === 0 ? CarouselData.length -1: prevIndex - 1
    ))
  };
  const handelNext=()=>{
    setCurrentIndex((prevIndex)=>(
      prevIndex === CarouselData.length -1 ? 0 : prevIndex + 1
    ))
  };

  const TagData = [
    {
      id: 1,
      imgs: "./Calendar.png",
      title: "Dec 12 2022",
    },
    {
      id: 2,
      imgs: "./Mark.png",
      title: "TBS  Lagos",
    },
    {
      id: 3,
      imgs: "./Clock.png",
      title: "9:00 PM ",
    },
    {
      id: 4,
      imgs: "./Tag.png",
      title: "N20,000",
    },
  ];

  return (
    <section>
      <h1 className="text-center text-[#26395C] text-xl md:text-3xl lg:text-4xl font-bold py-4 mb-4">
        See How People are Chilling On Chillsbay
      </h1>

      <div className=" relative w-full max-w-screen-2xl mx-auto ">
        <div className="flex items-center justify-between">
          <button
            onClick={handelPrev}
            className=" absolute left-5 transform -translate-x-6 flex items-center justify-center bg-gray-700 text-white w-10 h-10 rounded-full "
          >
            <FaArrowLeft />
          </button>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full px-12 gap-6">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[#26395C] text-[15px] md:text-2xl lg:text-3xl xl:text-4xl font-semibold py-4">
                {" "}
                Upcoming events this weekend
              </h2>
              <img
                className="object-cover w-full h-auto"
                src={currentSlider.imgaes}
                alt=""
              />
            </div>
            {/* right site carousel */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-md lg:text-5xl font-bold lg:w-[50%] text-start leading-tight py-5 mb-6">
                {currentSlider.heading}
              </h2>
              <p className=" text-gray-700 text-justify lg:w-[70%] mb-10">
                {" "}
                {currentSlider.des}{" "}
              </p>

              <div className="grid grid-cols-2 lg:w-[70%]">
                {TagData.map((data, i) => (
                  <div key={i} className="flex items-center gap-2  mb-5">
                    <img src={data.imgs} alt="" />
                    <p className=" text-xs lg:text-lg font-semibold">
                      {data.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:w-[60%]">
                <Button color="primary" variant="bordered">
                  {" "}
                  Add to cart
                </Button>
                <Button color="primary"> Book Now</Button>
              </div>
              <div className="flex gap-2 items-center mt-4 mb-5">
                <p>Connect with us on:</p>
                <img src="./Twitter.png" alt="" />
                <img src="./Instagram.png" alt="" />
              </div>
            </div>
          </div>

          <button
            onClick={handelNext}
            className=" absolute right-0 transform -translate-x-6 flex items-center justify-center bg-gray-700 text-white w-10 h-10 rounded-full "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
