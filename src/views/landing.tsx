import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useEffect, useState} from "react";
import { readContract } from '@wagmi/core'
import {eth_config} from "../config/ethconnector-config.ts";
import {CONSTANTS} from "../config/constants.ts";
import { writeContract } from '@wagmi/core'

const Landing = () => {
    const [count, setcount] = useState(0);
    const getValue = () => {
        readContract(eth_config, {
            abi: CONSTANTS.CONTRACT_ABI,
            address: CONSTANTS.CONTRACT_ADDRESS,
            functionName: 'storedInteger',
        }).then((resp) => {
            setcount(parseInt(String(resp as number)));
        }).catch(err => {
            alert(err.message || "err")
        })
    }

    const increment = () => {
        writeContract(eth_config, {
            abi: CONSTANTS.CONTRACT_ABI,
            address: CONSTANTS.CONTRACT_ADDRESS,
            functionName: 'increment',
        }).then(resp => {
            console.log(resp);
        })
    }

    useEffect(() => {
        getValue();
    }, []);
    return (
        <div className={'mx-4'}>
            <ConnectButton />
            <div className={'font-semibold text-xl'}>
                {count}
            </div>
            <button onClick={increment} className={'border p-3 rounded-md bg-blue-500 text-white'}>
                Increment
            </button>
        </div>
    );
};

export default Landing;