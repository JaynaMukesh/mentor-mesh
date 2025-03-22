import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../components/icons';

const subjects = [
  { id: 'react', name: 'React', icon: Icons.Code2 },
  { id: 'php', name: 'PHP', icon: Icons.FileCode2 },
  { id: 'dsa', name: 'DSA', icon: Icons.Binary },
  { id: 'python', name: 'Python', icon: Icons.Database },
  { id: 'ai', name: 'AI/ML', icon: Icons.BrainCircuit },
] as const;

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

const mockQuestions: Record<string, Question[]> = {
  react: [
    {
      id: 1,
      question: "What is a React Hook?",
      options: [
        "A way to hang clothes",
        "A function that lets you use state in functional components",
        "A type of component",
        "A JavaScript library"
      ],
      correctAnswer: 1
    },
    // Add more questions...
  ],
  // Add more subjects...
};

export const StudentDashboard: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (answerIndex: number) => {
    setAnswers([...answers, answerIndex]);
    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, calculate score and show mentors
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome back!</h1>
          <p className="text-xl text-gray-600">Choose a subject to get started</p>
        </motion.div>

        {!selectedSubject ? (
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {subjects.map((subject, index) => (
              <motion.button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-indigo-100 p-4 rounded-full mb-4">
                    <subject.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{subject.name}</h2>
                  <p className="text-gray-600 text-center">
                    Start your journey in {subject.name}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        ) : !quizStarted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Ready to start?</h2>
            <p className="text-gray-600 mb-8">
              Take a quick assessment to help us find the perfect mentor for you.
            </p>
            <button
              onClick={handleStartQuiz}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Start Assessment
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          >
            {/* Quiz questions will go here */}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;