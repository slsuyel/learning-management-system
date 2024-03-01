import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";
import Blogs from "../pages/blogs";
import Users from "../pages/users";
import "../App.css";
import Students from "../pages/Students/Students";
import Question from "../pages/Question/Question";
import ErrorPage from "../components/ErrorPage";
import EditStudent from "../pages/Students/EditStudent";
import StudentShow from "../pages/Students/StudentShow";
import UserCheck from "./UserCheck";
import Teacher from "../pages/Teacher/Teacher";
import Batches from "../pages/Batches/Batches";
import AddQuestions from "../pages/Question/AddQuestions";
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
                path: "/category/:category/:subcategory",
                element: <CoursesDetails />,
            },


        ],
    },
    {
        path: "/user-db",
        // element: <StudentCheck>  <StudentDashboardLayout /></StudentCheck>,
        element: <StudentDashboardLayout />,
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

                path: "category/:category/:subcategory",
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
                path: 'courses/view/:id',
                element: <ViewCourses />
            },
            {
                path: 'courses/add',
                element: <AddQuestions />
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