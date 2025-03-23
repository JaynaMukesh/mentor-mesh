const loginRouteBase = "/app";
export const ROUTES = {
    landing: "/",
    mentorDashboard: loginRouteBase + "/mentor-dashboard",
    mentorOnboarding: loginRouteBase + "/mentor-onboarding",
    onboarding: loginRouteBase + "/onboarding",
    studentDashboard: loginRouteBase + "/student-dashboard",
    studentOnboarding: loginRouteBase + "/student-onboarding",
    loginRoutes: {
        _base: loginRouteBase,
    },
    quiz: loginRouteBase + "/quiz",
    mentorsSuggestions: loginRouteBase + "/personalized-mentors",
    mentor: loginRouteBase + "/mentor",
}

export const API_ROUTES = "https://alan.webxspark.com/hackverse-25/test"