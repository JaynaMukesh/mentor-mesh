import { ROUTES } from "../constants/routes.tsx";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { readContract } from "@wagmi/core";
import { eth_config } from "../config/ethconfig.ts";
import { mentorRegistryABI, mentorRegistryAddress } from "../constants/contract_details.ts";
import { IMentor } from "../shared/types.ts";
import { useNavigate } from "react-router-dom";
import NavStudent from "../components/nav-student.tsx";

const Mentors = () => {
    // const {address} = useAccount()
    const isMounted = useRef(false)
    const [mentors, setMentors] = useState<IMentor[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            readContract(eth_config, {
                abi: mentorRegistryABI,
                address: mentorRegistryAddress,
                functionName: 'getAllMentors',
            }).then(r => {
                const response = r as IMentor[]
                setMentors(response)
                console.log("Mentors:", response);
            }).catch(err => {
                alert(err.message || "Something went wrong!")
                console.error(err)
            })
        }
    }, []);

    return (
        <div>
            <NavStudent />
            <div className={'min-h-screen bg-gray-50'}>
                <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-2 gap-8">
                    {
                        mentors.map((mentor, index) => (
                            <motion.button
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => navigate(`/app/mentor/${mentor.mentorAddress}`)} // Now you can navigate to the mentor's page
                            >
                                <div className="flex flex-col items-center">
                                    <div className="bg-indigo-100 p-4 rounded-full mb-4">
                                        <User />
                                    </div>
                                    <h2 className="text-2xl font-semibold mb-2">{mentor.name}</h2>
                                    <p className="text-gray-600 text-center">
                                        {mentor.skills?.join(' , ')} - {parseInt((mentor.pricePerSession))} $EDU / session
                                    </p>
                                    <p className="text-xs mt-2 text-gray-500">
                                        {mentor.mentorAddress.substring(0, 6)}...{mentor.mentorAddress.substring(mentor.mentorAddress.length - 4)}
                                    </p>
                                </div>
                            </motion.button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Mentors;