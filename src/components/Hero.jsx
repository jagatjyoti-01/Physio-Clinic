import React from "react";

const Hero = () => {
  return (
    <div className=" relative hero-section  p-4 pt-1 bg-gray-100  ">
      <img
        src="https://www.orthoneurophysioclinic.com/wp-content/uploads/2021/07/ortho-physio.jpg"
        alt="Hero"
        className="hero-image h-full w-full object-cover max-h-[470px] "
      />
      {/* Transparent Overlay */}
      <div className="absolute flex items-center justify-center  top-0 left-0 md:w-2/3 w-full h-full bg-slate-100 bg-opacity-30 ">
      <div className="flex flex-col items-center justify-center ">
      <h1 className=" capitalize text-xl md:text-5xl font-bold text-[rgb(22 127 84)] w-full max-w-3xl line-clamp-2 md:leading-tight px-4 " style={{color: 'rgb(22 127 84)'}}>
            Transforming Lives with Personalized Physiotherapy
          </h1>
          <p className=" font-medium font-sans text-xs md:text-lg text-slate-700 w-full md:max-w-3xl md:line-clamp-3 mt-2 px-4  line-clamp-2 md:mt-8">
                We are a team of highly skilled and experienced physiotherapists who are
                dedicated to providing personalized care to each and every one of our 
                patients. Our goal is to help you achieve your health and fitness goals
            </p>
      </div>
      {/* <div className="   flex-col border border-red-200  items-center justify-center w-full md:mix-w-3/5    h-full p-4 ml-8">
          
            <p className=" text-lg text-slate-500 w-full max-w-2xl line-clamp-3 mt-4">
                We are a team of highly skilled and experienced physiotherapists who are
                dedicated to providing personalized care to each and every one of our


            </p>
        </div> */}
      </div>


      
        
        {/* <div className=" text-left  flex-col border border-red-200  items-center justify-center w-full md:mix-w-3/5    h-full p-4 ml-8">
          <h1 className=" text-5xl font-bold text-slate-700 w-full max-w-2xl line-clamp-2 leading-tight">
            Transforming Lives with Personalized Physiotherapy
          </h1>
            <p className=" text-lg text-slate-500 w-full max-w-2xl line-clamp-3 mt-4">
                We are a team of highly skilled and experienced physiotherapists who are
                dedicated to providing personalized care to each and every one of our


            </p>
        </div> */}
      </div>
   
  );
};

export default Hero;
