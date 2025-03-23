import {RouterProvider} from "react-router-dom";
import {Router} from "./config/router.tsx";

function App() {
    return (
        // <BrowserRouter>
        //   <Routes>
        //     <Route path={ROUTES.landing} element={<LandingPage />} />
        //     <Route path={ROUTES.mentorDashboard} element={<MentorDashboard />} />
        //     <Route path={ROUTES.mentorOnboarding} element={<MentorOnboarding />} />
        //     <Route path={ROUTES.onboarding} element={<Onboarding />} />
        //     <Route path={ROUTES.studentDashboard} element={<StudentDashboard />} />
        //     <Route path={ROUTES.studentOnboarding} element={<StudentOnboarding />} />
        //   </Routes>
        // </BrowserRouter>
        <RouterProvider router={Router}/>
    );
}

export default App;