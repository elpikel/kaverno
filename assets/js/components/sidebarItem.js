import React from "react"
import { NavLink } from "react-router-dom"

export default function SidebarItem({ icon, to, text, isActive, isExpanded }) {
    return (
        <li>
            <NavLink className="flex items-center py-2 px-3 my-1 font-medium rounded-md hover:bg-indigo-50 text-gray-600" to={to}>
                <span className={`${icon} ${isExpanded ? "ml-1 w-6 h-6" : "h-4"}`}></span>
                {isExpanded ? <span className="overflow-hidden transition-all w-52 ml-3">{text}</span> : null}
            </NavLink>
        </li>

    )
}