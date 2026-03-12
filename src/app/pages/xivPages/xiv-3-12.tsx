import React, { useState } from "react";

const Xiv312: React.FC = () => {
    const [page, setPage] = useState(0);

    const content = [
        "03/12/2026",
        "dwa",
        "way",
    ]

    const PER_PAGE = 1;
    const totalPages = Math.ceil(content.length / PER_PAGE);
    const visibleContent = content.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

    return (
        <div className="bg-neutral-800 w-full h-full mt-5 relative">
            <div className="bg-white w-10 h-5 absolute rotate-45 z-1 opacity-50 bottom-11 translate-x-3" />
            <div className="bg-white w-10 h-5 absolute rotate-45 z-1 opacity-50 right-4" />
            <div className="mask-[url(/page.png)] mask-cover bg-[#e4c789] w-[95%] max-w-[475px] h-[92%] mx-auto overflow-y-hidden">
                <div className="w-full h-full pl-7 pt-4 space-y-2 leading-relaxed">
                    {visibleContent.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-10">
                <button onClick={() => setPage(page - 1)} disabled={page === 0} className="text-4xl cursor-pointer">←</button>
                <button onClick={() => setPage(page + 1)} disabled={page === totalPages - 1} className="text-4xl cursor-pointer">→</button>
            </div>
        </div>
    )
}

export default Xiv312;
