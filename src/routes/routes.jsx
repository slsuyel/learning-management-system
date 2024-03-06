import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";

import "../App.css";
import Students from "../pages/Students/Students";

import ErrorPage from "../components/ErrorPage";
import EditStudent from "../pages/Students/EditStudent";
import StudentShow from "../pages/Students/StudentShow";
import UserCheck from "./UserCheck";
import Teacher from "../pages/Teacher/Teacher";
import Batches from "../pages/Batches/Batches";

import StudentsDashboard from "../StudentsDashboard/StudentsDashboard";
import Exam from "../StudentsDashboard/Exam";
import TeacherShow from "../pages/Teacher/TeacherShow";
import TeacherEdit from "../pages/Teacher/TeacherEdit";
import StudentSignin from "../StudentsDashboard/Auth/StudentSignin";
import StudentCheck from "../StudentsDashboard/Auth/StudentCheck";
import HomePage from "../home/HomePage";
import Services from "../home/Services";
import AboutUs from "../home/AboutUs";
import Profile from "../StudentsDashboard/Profile";
import StudentDashboardLayout from "../StudentsDashboard/StuDashboard/StudentDashboardLayout";

import AllCourses from './../StudentsDashboard/Courses/AllCourses';
import CoursesDetails from './../StudentsDashboard/Courses/CoursesDetails';
import PayNow from "../StudentsDashboard/Payment/PayNow";
import MyCourses from "../StudentsDashboard/StuDashboard/MyCourses/MyCourses";
import Affiliate from "../StudentsDashboard/Affiliate/Affiliate";
import SuccessStory from "../pages/SuccessStory/SuccessStory";
import Setting from "../StudentsDashboard/Setting/Setting";
import PaidStudent from "../pages/Students/PaidStudent";
import PaymentAdmin from "../pages/Payment/PaymentAdmin";
import ViewCourses from "../pages/Question/ViewCourses";
import CoursesPage from "../pages/Question/CoursesPage";
import CourseCategory from "../pages/CourseCategory/CourseCategory";
import MyCoursesPage from "../StudentsDashboard/StuDashboard/MyCourses/MyCoursesPage";
import CreateCourse from "../pages/Question/CreateCourse";
import PaymentResult from "../StudentsDashboard/Payment/PaymentResult";
import AddClass from "../pages/Question/Class/AddClass";
import Waiting from "../StudentsDashboard/Payment/Waiting";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <WithOutnavbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'about',
                element: <AboutUs />
            },
            {
                path: "/student/signin",
                element: <StudentSignin />,
            },
            {
                path: "/admin/signin",
                element: <Signin />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "courses",
                element: <AllCourses />,
            },
            {
                path: "courses-details/:id",
                element: <CoursesDetails />,
            },
            {
                path: 'waiting',
                element: <Waiting />
            },
            {
                path: 'success/:paymentID',
                element: <PaymentResult />
            },

        ],
    },
    {
        path: "/user-db",
        element: <StudentCheck>  <StudentDashboardLayout /></StudentCheck>,
        // element: <StudentDashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Profile />,
            },
            {
                path: "courses",
                element: <AllCourses />,
            },

            {
                path: "courses-details/:id",
                element: <CoursesDetails />,
            },

            {
                path: "my-courses",
                element: <MyCoursesPage />,
            },
            {
                path: "my-courses/:courseId",
                element: <MyCourses />,
            },
            {
                path: "affiliate",
                element: <Affiliate />,
            },
            {
                path: "teachers",
                element: <Teacher />,
            },
            {
                path: "success-story",
                element: <SuccessStory />,
            },
            {
                path: "settings",
                element: <Setting />,
            },
            {
                path: "payment/:id",
                element: <PayNow />,
            },
            // {
            //     path: "payment/res/:id",
            //     element: <PaymentResult />,
            // },



        ],
    },
    {
        path: 'dashboard',
        element: <UserCheck><WithNavbar /></UserCheck>,
        children: [
            {
                path: '',
                element: <Home />
            },

            {
                path: 'student',
                element: <Students />
            },
            {
                path: 'paid-student',
                element: <PaidStudent />
            },
            {
                path: 'student/edit/:id',
                element: <EditStudent />
            },
            {
                path: 'student/show/:id',
                element: <StudentShow />
            },
            {
                path: 'courses',
                element: <CoursesPage />
            },
            {
                path: 'courses/create-course',
                element: <CreateCourse />
            },
            {
                path: 'courses/view/:id',
                element: <ViewCourses />
            },

            {
                path: 'teachers',
                element: <Teacher />
            },
            {
                path: 'teacher/show/:id',
                element: <TeacherShow />
            },
            {
                path: 'teacher/edit/:id',
                element: <TeacherEdit />
            },
            {
                path: 'category',
                element: <CourseCategory />
            },
            {
                path: 'add-class',
                element: <AddClass />
            },
            {
                path: 'batches',
                element: <Batches />
            },
            {
                path: 'payment',
                element: <PaymentAdmin />
            },
            {
                path: 'affiliate',
                element: <Affiliate />
            },


        ]
    }

]);