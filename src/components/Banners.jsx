import React from "react";

const Banners = ({ img, title, text, backgroundColor = "hsl(var(--card))" }) => {
  return (
    <div className="relative">
      <div
        className="h-[30vh] lg:h-[70vh] bg-no-repeat bg-center bg-cover relative flex justify-center items-center"
        style={{ backgroundImage: `url(${img})`, backgroundColor }}
      >
        {/* Overlay for darkening the background image */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="w-full lg:w-[70%] text-primary-foreground z-10 px-4 md:px-8">
          <h1 className="text-2xl lg:text-7xl font-medium text-primary mb-2 lg:mb-5">
            {title}
          </h1>
          <h2 className="text-lg md:text-4xl leading-6 md:leading-[55px]">
            {text}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banners;
