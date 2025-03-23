import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {Icons} from '../components/icons';
import {readContract} from "@wagmi/core"
import {useAccount} from "wagmi";
import {IMentor} from "../shared/types.ts";
import {eth_config} from "../config/ethconfig.ts";
import {
    mentorRegistryABI,
    mentorRegistryAddress,
    sessionBookingABI,
    sessionBookingAddress
} from "../constants/contract_details.ts";
import Preloader from "../components/preloader.tsx";

const mockMeetings = [
    {
        id: 1,
        studentName: "John Doe",
        subject: "React",
        timeSlot: "10:00 AM - 11:00 AM",
        date: "2024-03-15",
        meetingLink: "https://meet.google.com/abc-defg-hij"
    },
    // Add more meetings...
];

export const MentorDashboard: React.FC = () => {
    const {address} = useAccount()
    const [mentor, setMentor] = useState<IMentor>({} as IMentor);
    const isMounted = useRef(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            setLoading(true);
            readContract(eth_config, {
                abi: mentorRegistryABI,
                address: mentorRegistryAddress,
                functionName: 'getMentorDetails',
                args: [
                    address as `0x${string}`
                ]
            }).then(r => {
                if (typeof r === "object") {
                    setMentor({
                        name: r[0],
                        skills: r[1],
                        pricePerSession: parseInt(r[2] as bigint),
                        level: r[3],
                        meetingLink: "https://meet.google.com/cey-syrt-cmw"
                    })
                }
            }).catch(err => {
                console.log(err)
                alert(err.msg || "Something went wrong");
            })
            readContract(eth_config, {
                abi: sessionBookingABI,
                address: sessionBookingAddress,
                functionName: 'getMentorSessions',
                args: [
                    address as `0x${string}`
                ]
            }).then(r => {
                console.log(r);
            }).catch(err => {
                console.log(err)
                alert(err.msg || "Something went wrong");
            }).finally(() => setLoading(false));
        }
    }, [address]);
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-1">Welcome back, {mentor.name || "Mentor"}!</h1>
                    <p className=" text-gray-600">
                        {mentor.skills?.length ? `Your skills: ${mentor.skills.join(", ")}` : "You have not set any skills yet."}
                        <br/>
                        {mentor.level ? ` Your level: ${mentor.level}` : ""}
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-6"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{staggerChildren: 0.1}}
                >
                    {
                        loading && <Preloader className={'h-[30dvh]'}/>
                        || <>
                            {mockMeetings.map((meeting, index) => (
                                <motion.div
                                    key={meeting.id}
                                    className="bg-white p-6 rounded-2xl shadow-lg"
                                    initial={{opacity: 0, x: -20}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: index * 0.1}}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">{meeting.subject} Session</h3>
                                            <p className="text-gray-600">with {meeting.studentName}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-600">{meeting.date}</p>
                                            <p className="text-gray-600">{meeting.timeSlot}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <a
                                            href={meeting.meetingLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center space-x-2"
                                        >
                                            <Icons.Code2 className="w-5 h-5"/>
                                            <span>Join Meeting</span>
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </>
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default MentorDashboard;