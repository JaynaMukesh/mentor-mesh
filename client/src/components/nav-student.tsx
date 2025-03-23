import { Link } from "react-router-dom";
import logo from "../assets/Logomark.svg";
import { ROUTES } from "../constants/routes";

const NavStudent = () => {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img src={logo} alt="logo" className="w-10 h-10" />
                                <h1 className="text-white text-2xl font-bold">MentorMesh</h1>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <Link to={ROUTES.mentorsSuggestions} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Personalized Mentors</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavStudent;