import {Outlet, useNavigate} from "react-router-dom";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useAccount} from "wagmi";
import {useEffect} from "react";
import {ROUTES} from "../constants/routes.tsx";

const UserLayout = () => {
    const {address, isConnected} = useAccount();
    const navigate = useNavigate();
    useEffect(() => {
        if(!address && !isConnected){
            navigate(ROUTES.landing);
        }
    }, [address, isConnected, navigate]);
    return (
        <div>
            <div className={'absolute right-0 top-0 m-4'}>
                <ConnectButton />
            </div>
            <Outlet />
        </div>
    );
};

export default UserLayout;