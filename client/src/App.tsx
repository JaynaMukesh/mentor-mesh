import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { MentorDashboard } from "./pages/MentorDashboard";
import { MentorOnboarding } from "./pages/MentorOnboarding";
import { Onboarding } from "./pages/Onboarding";
import { ROUTES } from "./constants/routes";
import StudentDashboard from "./pages/StudentDashboard";
import StudentOnboarding from "./pages/StudentOnboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.landing} element={<LandingPage />} />
        <Route path={ROUTES.mentorDashboard} element={<MentorDashboard />} />
        <Route path={ROUTES.mentorOnboarding} element={<MentorOnboarding />} />
        <Route path={ROUTES.onboarding} element={<Onboarding />} />
        <Route path={ROUTES.studentDashboard} element={<StudentDashboard />} />
        <Route path={ROUTES.studentOnboarding} element={<StudentOnboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;