// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //     const navItems =
// //         <>
// //             <li><Link to='/'>Home</Link></li>
// //             <li><Link to='/Skills'>Skills</Link></li>
// //             <li><Link to='/projects'>Projects</Link></li>
// //             <li><Link to='/Contact'>Contact</Link></li>
// //         </>
// //     return (
// //         <div>
// //             <div className="navbar bg-base-100">
// //                 <div className="navbar-start">
// //                     <div className="dropdown">
// //                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
// //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
// //                         </label>
// //                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
// //                             {navItems}
// //                         </ul>
// //                     </div>
// //                     <a className=" normal-case text-xl">Amit</a>
// //                 </div>
// //                 <div className="navbar-end hidden lg:flex">
// //                     <ul className="menu menu-horizontal px-1">
// //                         {navItems}
// //                     </ul>
// //                 </div>
// //                 {/* <div className="navbar-end">
// //                     <a className="btn">Button</a>
// //                 </div> */}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Navbar;

// import React from "react";
// import { Link } from "react-scroll"; // Import from react-scroll

// const Navbar = () => {
//   const navItems = (
//     <>
//       <li>
//         <Link
//           to="home" // Matches the ID of the section
//           smooth={true} // Enables smooth scrolling
//           duration={500} // Scroll duration in milliseconds
//           offset={-60} // Adjust for fixed navbar height
//           className="cursor-pointer hover:text-blue-500"
//         >
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="skills"
//           smooth={true}
//           duration={500}
//           offset={-60}
//           className="cursor-pointer hover:text-blue-500"
//         >
//           Skills
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="projects"
//           smooth={true}
//           duration={500}
//           offset={-60}
//           className="cursor-pointer hover:text-blue-500"
//         >
//           Projects
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="contact"
//           smooth={true}
//           duration={500}
//           offset={-60}
//           className="cursor-pointer hover:text-blue-500"
//         >
//           Contact
//         </Link>
//       </li>
//     </>
//   );

//   return (
//     <div>
//       <div className="navbar bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {navItems}
//             </ul>
//           </div>
//           <a className="normal-case text-xl">Amit</a>
//         </div>
//         <div className="navbar-end hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navItems}</ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-scroll"; // Import from react-scroll

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link
          to="home" // Matches the ID of the section
          smooth={true} // Enables smooth scrolling
          duration={500} // Scroll duration in milliseconds
          offset={-60} // Adjust for fixed navbar height
          activeClass="text-blue-500 font-bold border-b-2 border-blue-500" // Tailwind classes for active link
          className="cursor-pointer hover:text-blue-500 transition duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-60}
          activeClass="text-blue-500 font-bold border-b-2 border-blue-500" // Tailwind classes for active link
          className="cursor-pointer hover:text-blue-500 transition duration-300"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-60}
          activeClass="text-blue-500 font-bold border-b-2 border-blue-500" // Tailwind classes for active link
          className="cursor-pointer hover:text-blue-500 transition duration-300"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-60}
          activeClass="text-blue-500 font-bold border-b-2 border-blue-500" // Tailwind classes for active link
          className="cursor-pointer hover:text-blue-500 transition duration-300"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md">
      {" "}
      {/* Fixed navbar with shadow */}
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          {/* Logo or Brand Name */}
          <a className="normal-case text-xl">Amit</a>
        </div>
        {/* Desktop Navbar Links */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
