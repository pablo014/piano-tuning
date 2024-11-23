import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    className?: string;
    hoverable?: boolean;
}

export default function Card({children, className, hoverable}: Props) {
    return (
        <div className={`bg-gray-700 border rounded border-gray-500 w-full ${className} ${hoverable ? "hover:scale-105 transition duration-700 cursor-pointer" : ""} p-2`}>
            {children}
        </div>
    )
}