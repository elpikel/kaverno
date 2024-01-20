import React, { useState } from "react"
import SidebarItem from "./sidebarItem"

export default function Sidebar() {
    [expanded, setExpanded] = useState(true)

    function toggle() {
        setExpanded((expanded) => !expanded)
    }

    return (
        <aside className="h-screen">
            <nav className={`h-full flex flex-col bg-white border-r shadow-sm ${expanded ? "" : "w-16"}`}>
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        src="/images/logo.svg"
                        className={`overflow-hidden transition-all ${expanded ? "w-8" : "hidden"}`}>
                    </img>
                    <span class={`flex-1 text-lg font-semibold text-indigo-600 ml-5 ${expanded ? "" : "hidden"}`}>Kaverno</span>
                    <button onClick={toggle} className="p-1.5 rounded-lg hover:bg-indigo-50">
                        {expanded ? <span className="hero-chevron-left w-6 h-6"></span> : <span className="hero-chevron-right w-6 h-6"></span>}
                    </button>
                </div>

                <ul className="flex-1 px-3">
                    <SidebarItem icon="hero-chart-bar" to="/analytics" text="Analytics" isExpanded={expanded} />
                    <SidebarItem icon="hero-cog" to="/settings" text="Settings" isExpanded={expanded} />
                    <SidebarItem icon="hero-users" to="/users" text="Users" isExpanded={expanded} />
                </ul>

                <div className="border-t flex p-3">
                    <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" className="w-10 h-10 rounded-md"></img>
                    <div className="flex justify-between items-center overflow-hidden transition-all w-52 ml-3">
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <div className="text-xs text-gray-600">johndoe@gmail.com</div>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    )
}