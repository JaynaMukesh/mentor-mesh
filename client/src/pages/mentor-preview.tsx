import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {IMentor} from "../shared/types.ts";
import {readContract} from "@wagmi/core";
import {eth_config} from "../config/ethconfig.ts";
import {mentorRegistryABI, mentorRegistryAddress} from "../constants/contract_details.ts";
import {useParams} from "react-router-dom";

const MentorPreview = () => {
    const [mentor, setMentor] = useState<IMentor>();
    const [timeslots, setTimeslots] = useState<string[]>([]);
    const {token} = useParams()
    useEffect(() => {
        readContract(eth_config, {
            abi: mentorRegistryABI,
            address: mentorRegistryAddress,
            functionName: "getMentorDetails",
            args: [
                token
            ]
        }).then(r => {
            console.log(r)
            setMentor({
                name: r[0],
                skills: r[1],
                pricePerSession: parseInt(r[2]),
                level: r[3],
            });
        }).catch(err => {
            alert(err.message || "Something went wrong!")
        })
        readContract(eth_config, {
            abi: mentorRegistryABI,
            address: mentorRegistryAddress,
            functionName: 'getMentorTimeSlot',
            args: [
                token, 0
            ]
        }).then(r => {
            setTimeslots(JSON.parse(r as string))
        }).catch(err => {
            alert(err.message || "Something went wrong!")
        })
    }, [token]);
    return (
        <div className={'min-h-screen bg-gray-50'}>
            <div className="max-w-xl mx-auto px-4 py-20 grid grid-cols-1 gap-8">
                <motion.button
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                    whileHover={{scale: 1.05}}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                >
                    Name: {mentor?.name}
                    <div className="flex flex-col items-center">
                        <div className="bg-indigo-100 p-4 rounded-full mb-4">
                            <h2 className="text-2xl font-semibold">{mentor?.name}</h2>
                        </div>
                        <p className="text-gray-600 text-center">
                            {mentor?.skills?.join(' , ')} - {parseInt((mentor?.pricePerSession))} $EDU / session
                        </p>
                        <p className="text-xs mt-2 text-gray-500">
                            {token}
                        </p>
                    </div>
                    <div className={'flex items-start flex-col'}><h2 className={'font-semibold text-lg'}>
                        Available slots
                    </h2>
                        <div className={'flex flex-row flex-wrap gap-2'}>
                            {
                                timeslots.map((slot, index) => (
                                    <div key={index} className={'bg-gray-100 p-2 rounded-lg'}>
                                        {slot}
                                    </div>
                                ))
                            }
                        </div>
                        <button
                            className={'bg-blue-600 text-white rounded-lg p-2 mt-4 hover:bg-blue-700 transition duration-200'}>
                            Book Session
                        </button>
                    </div>
                </motion.button>
            </div>
        </div>
    );
};

export default MentorPreview;