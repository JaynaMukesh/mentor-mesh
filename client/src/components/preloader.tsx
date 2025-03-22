import {Loader} from "lucide-react";

const Preloader = ({className}: {className: string}) => {
    return (
        <div className={'flex items-center justify-center ' + className}>
            <Loader className={'animate-spin'}/>
        </div>
    );
};

export default Preloader;