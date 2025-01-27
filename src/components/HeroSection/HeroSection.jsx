// import React from "react";
// import Typewriter from "typewriter-effect";
// import resumePdf from "../../../public/Amit Sen Gupta33.pdf";
// import { HiOutlineDownload, HiDownload } from "react-icons/hi";
// export const HeroSection = () => {
//   return (
//     <div id="home" className="mt-5 flex flex-wrap justify-center">
//       <div className="w-full lg:w-1/2" data-aos="fade-up-right">
//         <div className="flex justify-center items-center h-full">
//           <div data-aos="fade-down-left" data-aos-duration="1000">
//             <h1 className="text-5xl">
//               Hello, <br />
//               <span className="text-4xl font-bold mb-4">
//                 I'm Amit Sen Gupta
//               </span>
//             </h1>
//             <h2 className="text-3xl">
//               <Typewriter
//                 options={{
//                   strings: [
//                     "Specialized In FrontEnd Developer",
//                     "MERN STACK DEVELOPER",
//                   ],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </h2>
//             <p className="text-lg mt-4 text-justify">
//               I'm a self-taught web developer with a strong desire to create
//               memorable digital experiences. I specialize in the MERN stack
//               (MongoDB, Express.js, React.js, and Node.js) and place a strong
//               emphasis on clean code, intuitive designs, and seamless
//               functionality. Let's work together to make your ideas a reality
//               and create creative online applications. Learn more about my
//               talents and knowledge by exploring my portfolio and downloading my
//               resume.
//             </p>
//             <div className="mt-6">
//               <a
//                 href={resumePdf}
//                 className="btn btn-info text-ellipsis hover:bg-blue-600 hover:text-white"
//                 download="AmitsenguptaResume.pdf"
//               >
//                 Download Resume{" "}
//                 <HiDownload className="w-5 inline-block"></HiDownload>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="w-full lg:w-1/2"
//         data-aos="fade-up-left"
//         data-aos-easing="ease-out-cubic"
//         data-aos-duration="1000"
//       >
//         <div className="flex justify-center items-center">
//           <img
//             src="https://i.ibb.co/zSwtzRK/99312-developer-skills.gif"
//             alt="Developer Skills"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import Typewriter from "typewriter-effect";
import resumePdf from "../../../public/Amit Sen Gupta33.pdf";
import { HiOutlineDownload, HiDownload } from "react-icons/hi";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="mt-20 flex flex-col lg:flex-row justify-center items-center px-4 lg:px-16"
    >
      {/* Left Section (Text) */}
      <div
        className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-start items-center"
        data-aos="fade-up-right"
      >
        <div
          className="text-center lg:text-left"
          data-aos="fade-down-left"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Hello, <br />
            <span className="text-3xl lg:text-4xl text-blue-500">
              I'm Amit Sen Gupta
            </span>
          </h1>
          <h2 className="text-xl lg:text-3xl">
            <Typewriter
              options={{
                strings: [
                  "Specialized In FrontEnd Developer",
                  "MERN STACK DEVELOPER",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-base lg:text-lg mt-4 text-justify">
            I'm a self-taught web developer with a strong desire to create
            memorable digital experiences. I specialize in the MERN stack
            (MongoDB, Express.js, React.js, and Node.js) and place a strong
            emphasis on clean code, intuitive designs, and seamless
            functionality. Let's work together to make your ideas a reality and
            create creative online applications. Learn more about my talents and
            knowledge by exploring my portfolio and downloading my resume.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href={resumePdf}
              className="btn btn-info text-white bg-blue-500 hover:bg-blue-600 flex items-center gap-2 px-4 py-2 rounded-lg"
              download="AmitsenguptaResume.pdf"
            >
              Download Resume <HiDownload className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div
        className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center mb-6 lg:mb-0"
        data-aos="fade-up-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <img
          src="https://i.ibb.co/zSwtzRK/99312-developer-skills.gif"
          alt="Developer Skills"
          className="w-full max-w-xs lg:max-w-md"
        />
      </div>
    </div>
  );
};
