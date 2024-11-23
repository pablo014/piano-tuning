
import { ReactNode, useState } from "react"

interface Props {
    header: string;
    children: ReactNode;
    className?: string;
    toggle?: boolean;
    onToggle?: () => void;
    maxHeight?: number;
}

export default function Card({children, className, toggle, maxHeight, header}: Props) {
    const [isToggled, setIsToggled] = useState<boolean>(toggle ? toggle : false)
    return (
        <div className={className}>
            <div className="w-full flex justify-between cursor-pointer" onClick={() => {setIsToggled((t) => !t)}}>{header}</div>
            <div className={`w-full overflow-hidden transition transition-all duration-700 ${isToggled ? `h-${maxHeight}` : "h-0"}`}>
                {children}
            </div>
        </div>
    )
}