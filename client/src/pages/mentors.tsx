import {useAccount} from "wagmi";

const Mentors = () => {
    const {address} = useAccount()
    return (
        <div>
            Hello world mentors:!
        </div>
    );
};

export default Mentors;