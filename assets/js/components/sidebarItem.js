import React from "react"

export default function SidebarItem({ icon, text, isActive, isExpanded }) {
    return (
        <li
            className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${isActive
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
                }
    `}
        >
            <span className={`inline-block ${icon} ${isExpanded ? "ml-1 w-6 h-6" : ""}`}></span>
            {isExpanded ? <span className="overflow-hidden transition-all w-52 ml-3">{text}</span> : null}
        </li>
    )
}