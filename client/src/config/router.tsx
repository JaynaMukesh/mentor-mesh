import {createBrowserRouter} from "react-router-dom";
import {ROUTES} from "../constants/routes.tsx";
import LandingPage from "../pages/LandingPage.tsx";
import UserLayout from "../layouts/userlayout.tsx";
import Onboarding from "../pages/Onboarding.tsx";
import MentorDashboard from "../pages/MentorDashboard.tsx";
import MentorOnboarding from "../pages/MentorOnboarding.tsx";
import StudentOnboarding from "../pages/StudentOnboarding.tsx";
import StudentDashboard from "../pages/StudentDashboard.tsx";
import QuizComp from "../pages/quiz.tsx";
import Mentors from "../pages/mentors.tsx";
import MentorPreview from "../pages/mentor-preview.tsx";

export const Router = createBrowserRouter([
    {
        path: ROUTES.landing,
        element: <LandingPage />
    },
    {
        path: ROUTES.loginRoutes._base,
        element: <UserLayout />,
        children: [
            {
                path: ROUTES.onboarding,
                element: <Onboarding />
            },
            {
                path: ROUTES.mentorDashboard,
                element: <MentorDashboard />
            },
            {
                path: ROUTES.mentorOnboarding,
                element: <MentorOnboarding />
            },
            {
                path: ROUTES.studentOnboarding,
                element: <StudentOnboarding />
            },
            {
                path: ROUTES.studentDashboard,
                element: <StudentDashboard />
            },
            {
                path: `${ROUTES.quiz}/:token`,
                element: <QuizComp />
            },
            {
                path: ROUTES.mentorsSuggestions,
                element: <Mentors />
            },
            {
                path: `${ROUTES.mentor}/:token`,
                element: <MentorPreview />
            }
        ]
    }
]);