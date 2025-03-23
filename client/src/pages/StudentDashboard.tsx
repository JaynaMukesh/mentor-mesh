import React from 'react';
import {motion} from 'framer-motion';
import {Icons} from '../components/icons';
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../constants/routes.tsx";

const subjects = [
    {name: 'React', icon: Icons.Code2},
    {name: 'PHP', icon: Icons.FileCode2},
    {name: 'DSA', icon: Icons.Binary},
    {name: 'Python', icon: Icons.Database},
    {name: 'AI/ML', icon: Icons.BrainCircuit},
] as const;


export const StudentDashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome back!</h1>
                    <p className="text-xl text-gray-600">Choose a subject to get started</p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{staggerChildren: 0.1}}
                >
                    {subjects.map((subject, index) => (
                        <motion.button
                            key={index}
                            onClick={() => navigate(ROUTES.quiz + '/' + index)}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                            whileHover={{scale: 1.05}}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.1}}
                        >
                            <div className="flex flex-col items-center">
                                <div className="bg-indigo-100 p-4 rounded-full mb-4">
                                    <subject.icon className="w-8 h-8 text-indigo-600"/>
                                </div>
                                <h2 className="text-2xl font-semibold mb-2">{subject.name}</h2>
                                <p className="text-gray-600 text-center">
                                    Start your journey in {subject.name}
                                </p>
                            </div>
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default StudentDashboard;