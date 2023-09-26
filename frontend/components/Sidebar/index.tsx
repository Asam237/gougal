import {FaDesktop, FaHome, FaUsers} from "react-icons/fa";
import {AiFillDatabase} from "react-icons/ai";
import {BiBadgeCheck} from "react-icons/bi";
import {Heading, Text} from "@radix-ui/themes"
import Link from "next/link";
import {useEffect, useState} from "react";

const mains = [
    {
        icon: <FaHome size={30} className={"md:mr-4"}/>,
        link: "/dashboard",
        text: "Home"
    },
    {
        icon: <AiFillDatabase size={30} className={"md:mr-4"}/>,
        link: "/organisations",
        text: "Organisations"
    },
    {
        icon: <FaDesktop size={30} className={"md:mr-4"}/>,
        link: "/offices",
        text: "Offices"
    },
    {
        icon: <FaUsers size={30} className={"md:mr-4"}/>,
        link: "/employees",
        text: "Employees"
    },
]

const Sidebar = () => {
    const [mylocation, setMylocation] = useState("");
    useEffect(() => {
        setMylocation(window?.location?.pathname);
        console.log("location", window?.location);
    }, []);

    return (
        <div className={'bg-blue-800 h-screen border-r-2'}>
            <div className={'h-14 flex justify-center items-center border-gray-500 pt-8'}>
                <BiBadgeCheck size={30} className={"text-white"}/>
                <Heading size={"4"} style={{color: "white", paddingLeft: "4px"}} className={"hidden md:flex"}>Badge
                    IN</Heading>
            </div>
            <div className="py-4 px-8 mt-4">
                <div className="flex flex-col md:items-start items-center justify-start">
                    {
                        mains.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`md:w-full rounded-xl px-2 ${mylocation === item.link ? 'bg-blue-900' : ''}`}>
                                    <Link href={item.link} className={'flex items-center text-white my-4'}>
                                        {item.icon}
                                        <Text className={'hidden md:flex'}>{item.text}</Text>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;