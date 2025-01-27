import React from "react";

const Projects = () => {
  const projectDetails = [
    {
      name: "Tandoori Time",
      image: "https://i.ibb.co/TPQKBDW/Tandoori.png",
      technology: "React, Node.js",
      description:
        "A website where users can explore master chefs and their recipes, add them to favorites, and access special features like blog downloads and food artisan highlights. Built with React and Node.js, incorporating CRUD operations, Context API for state management, and Firebase Authentication for secure access.",
      tools: "Tailwind CSS, Firebase, Express",
      clientLink: "https://github.com/Amitsengupta332/Tandori_Time-Client",
      serverLink: "https://github.com/Amitsengupta332/Tandori_Time-Server",
      liveSiteLink: "https://chef-recipe-hunter-9c5cf.web.app/",
    },
    {
      name: "Star Sports",
      image: "https://i.ibb.co/9HbCbVv/star-sport.png",
      technology: "React, Node.js, MongoDb",
      tools: "Tailwind CSS, Firebase, Express",
      description:
        " A website for exploring and adding children's toys to the cart. Built with React, Node.js, and MongoDB, featuring Firebase Authentication, seamless product loading from MongoDB, and search and sorting functionality for an improved user experience.",
      clientLink: "https://github.com/Amitsengupta332/Star-sports",
      serverLink: "https://github.com/Amitsengupta332/Star-sports-server",
      liveSiteLink: "https://toy-marketplace-5ed0a.web.app/",
    },
    {
      name: "Shutterbug Academy",
      image: "https://i.ibb.co/xJ0Ptw5/Shutterberg-Academy.png",
      technology: "React, Node.js, MongoDb",
      tools: "Tailwind CSS,Daisy Ui,Firebase, Express",
      description:
        " A role-based website for administrators, instructors, and students interested in photography. Built with React, Node.js, and MongoDB, utilizing Tailwind CSS and Daisy UI for styling, and integrating Firebase and Express for authentication and server-side APIs. Provides an immersive online learning experience for photography enthusiasts.",
      clientLink:
        "https://github.com/Amitsengupta332/Shutterbug-Academy-Client",
      serverLink:
        "https://github.com/Amitsengupta332/Shutterbug-Academy-Server",
      liveSiteLink:
        "https://summer-camp-school-7bd49.web.app/?fbclid=IwAR3BZdVhwbz_sQutaPH6LcYGeOVhn7c8LJD0URfP1VouaicHYR2Uiuv8aMs",
    },
  ];
  return (
    <div>
      {/* <h1 className='text-center text-4xl mt-8'>My Projects</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {projectDetails.map((project, index) => (
          <div
            key={index}
            className="border border-gray-100 overflow-hidden shadow-md hover:shadow-lg transition duration-300 shadow-pink-100 rounded-lg"
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="relative bg-gray-900 hover:bg-opacity-80 transition duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full transition duration-300 transform hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-50 ">
                <h3 className="text-xl text-white font-bold mb-2">
                  {project.name}
                </h3>
                <p className="text-white">Technology:{project.technology}</p>
              </div>
            </div>

            <div className="p-4">
              <p className="  text-justify text-md mb-4">
                {project.description}
              </p>
              <p className=" font-semibold mb-2">Tools: {project.tools}</p>
              <div className="flex justify-between align-middle">
                <div className="space-x-2 pt-2">
                  <a
                    target="_blank"
                    className="btn btn-outline btn-info"
                    href={project.clientLink}
                  >
                    Client
                  </a>
                  <a
                    target="_blank"
                    className="btn btn-outline btn-info"
                    href={project.serverLink}
                  >
                    Server
                  </a>
                  <a
                    target="_blank"
                    className="btn btn-outline btn-info"
                    href={project.liveSiteLink}
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
