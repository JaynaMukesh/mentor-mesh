import React, { useState } from 'react';
import { Icons } from '../components/icons';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import {writeContract, waitForTransactionReceipt} from "@wagmi/core"
// import {useAccount} from "wagmi";
import {Loader} from "lucide-react";
import {eth_config} from "../config/ethconfig.ts";
import {eduPlatformABI, eduPlatformAddress} from "../constants/contract_details.ts";
import {SUBJECTS} from "../constants/subjects.ts";

const subjects = [
  { id: 'React', name: 'React', icon: Icons.Code2 },
  { id: 'PHP', name: 'PHP', icon: Icons.FileCode2 },
  { id: 'DSA', name: 'DSA', icon: Icons.Binary },
  { id: 'Python', name: 'Python', icon: Icons.Database },
  { id: 'AI/ML', name: 'AI/ML', icon: Icons.BrainCircuit },
] as const;

export const StudentOnboarding: React.FC = () => {
  const [name, setName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const navigate = useNavigate();
  // const {address} = useAccount();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && selectedSubject) {
      setLoading(true);
      writeContract(eth_config, {
        abi: eduPlatformABI,
        address: eduPlatformAddress,
        functionName: 'registerStudent',
        args: [
            name,
            selectedSubject,
        ]
      }).then(r => {
        waitForTransactionReceipt(eth_config, {
          hash: r
        }).then(res => {
          console.log(res);
          const subjectIndex = SUBJECTS.indexOf(selectedSubject);
          navigate(`${ROUTES.quiz}/${subjectIndex}`);
        }).catch(err => {
            console.log(err);
            alert(err.message || "Something went wrong");
        }).finally(() => {
            setLoading(false);
        })
      }).catch(err => {
        alert(err.message || "Something went wrong");
        console.log(err);
        setLoading(false);
      })
    } else {
        alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Tell us about yourself</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Choose your subject</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {subjects.map((subject) => {
                const Icon = subject.icon;
                return (
                  <button
                    key={subject.id}
                    type="button"
                    onClick={() => setSelectedSubject(subject.id)}
                    className={`p-4 rounded-xl border-2 transition duration-200 ${selectedSubject === subject.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-200'
                      }`}
                  >
                    <div className="flex flex-col items-center">
                      <Icon className="w-8 h-8 mb-2 text-indigo-600" />
                      <span className="font-medium">{subject.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            disabled={!name || !selectedSubject || loading}
            className="flex items-center justify-center mt-8 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading && <Loader className={'size-4 mr-2 animate-spin'} />} Continue to Assessment
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentOnboarding;