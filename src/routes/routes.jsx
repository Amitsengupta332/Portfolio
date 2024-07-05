import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";
import ErrorPage from "../components/ErrorPage/ErrorPage";
// import Login from "../components/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/Contact',
                element: <Contact></Contact>
            },
            {
                path: '/Skills',
                element: <Skills></Skills>
            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // }
        ]

    },
    // {
    //     path: "/admin",
    //     element: <AdminLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <h1>Admin Home</h1>
    //         }
    //     ]
    // },
]);

export default router;