import React from "react";
import Image from "next/image";

interface buttonProps {
    iconImg: string
}

const TaskButton: React.FC<buttonProps> = ({iconImg}) => {
    return (
        <div>
            <Image
                className="pb-1 mx-auto"
                src={iconImg}
                width={32}
                height={32}
                alt={""} 
            />
        </div>
    )
}
export default TaskButton;