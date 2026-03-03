import React from "react";

interface pageProps {
    onBack: () => void
}

const Ff7: React.FC<pageProps> = ({onBack}) => {
    return (
        <div className="">
            <div className="w-full bg-[#c9a890] h-[5em]">
                <button className="py-2 px-7 bg-white text-black font-bold rounded-md mt-5 ml-5 hover:cursor-pointer hover:bg-gray-600 hover:text-white" onClick={onBack}>Back</button>
                <p className="text-5xl font-bold text-white text-center pt-3">Ff7</p>
            </div>
        </div>
    )
}
export default Ff7;