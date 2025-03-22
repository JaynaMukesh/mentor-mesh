import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Icons} from '../components/icons';
import {Link, useNavigate} from 'react-router-dom';
import {ROUTES} from '../constants/routes';
import {ConnectButton} from '@rainbow-me/rainbowkit';
import {useAccount} from "wagmi";
import Preloader from "../components/preloader.tsx";
import {readContract} from "@wagmi/core";
import {eth_config} from "../config/ethconfig.ts";
import {
    mentorRegistryABI,
    mentorRegistryAddress,
    studentRegistryABI,
    studentRegistryAddress
} from "../constants/contract_details.ts";
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();

export const LandingPage: React.FC = () => {
    const {isConnected, address} = useAccount();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isConnected && address) {
            setLoading(true);
            readContract(eth_config, {
                abi: mentorRegistryABI,
                address: mentorRegistryAddress as `0x${string}`,
                functionName: 'isMentor',
                args: [
                    address as `0x${string}`
                ]
            }).then(res => {
                const response = res as boolean;
                if (response) {
                    navigate(ROUTES.mentorDashboard);
                } else {
                    console.log("User is not a mentor");
                    readContract(eth_config, {
                        abi: studentRegistryABI,
                        address: studentRegistryAddress as `0x${string}`,
                        functionName: 'isStudent',
                        args: [
                            address as `0x${string}`
                        ]
                    }).then(r => {
                        const response = r as boolean;
                        if(response){
                            navigate(ROUTES.studentDashboard);
                        } else {
                            console.log("User is not a student");
                            navigate(ROUTES.onboarding)
                        }
                    }).catch(err => {
                        console.log(err)
                        alert(err.msg || "Something went wrong");
                        setLoading(false);
                    })
                }
            }).catch(err => {
                alert(err.message || "Something went wrong");
                setLoading(false);
            })
        }
    }, [isConnected, address]);
    return (
        <>
            {
                !loading && <div
                    className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4 overflow-hidden">

                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute inset-0 opacity-30"
                            style={{
                                background: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            initial={{scale: 1.1}}
                            animate={{scale: 1}}
                            transition={{duration: 20, repeat: Infinity, repeatType: "reverse"}}
                        />
                    </div>

                    <motion.div
                        className="max-w-4xl w-full relative"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <div className="text-center mb-12">
                            <motion.h1
                                className="text-6xl font-bold text-white mb-6"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.2}}
                            >
                                Welcome to EduChain
                            </motion.h1>
                            <motion.p
                                className="text-xl text-white/80"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.4}}
                            >
                                Connect with expert mentors and accelerate your learning journey
                            </motion.p>
                        </div>

                        <motion.div
                            className="grid md:grid-cols-3 gap-8 mb-12"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.6}}
                        >
                            {[
                                {
                                    icon: Icons.GraduationCap,
                                    title: "Learn from Experts",
                                    description: "Connect with experienced mentors in your field"
                                },
                                {
                                    icon: Icons.Users,
                                    title: "1-on-1 Sessions",
                                    description: "Personalized learning experience tailored to your needs"
                                },
                                {
                                    icon: Icons.BrainCircuit,
                                    title: "AI-Powered Matching",
                                    description: "Find the perfect mentor based on your skill level"
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white"
                                    whileHover={{scale: 1.05}}
                                    transition={{type: "spring", stiffness: 300}}
                                >
                                    <feature.icon className="w-12 h-12 mb-4"/>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-white/80">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.8}}
                        >
                            <div className='flex justify-center'>
                                <ConnectButton/>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                || <Preloader className={'h-[90dvh]'}/>
            }
        </>
    );
};

export default LandingPage;