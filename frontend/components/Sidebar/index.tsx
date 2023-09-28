import {FaAd, FaHome, FaUsers} from "react-icons/fa";
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
        icon: <FaAd size={30} className={"md:mr-4"}/>,
        link: "/dashboard/annonces",
        text: "Annonces"
    },
    {
        icon: <FaUsers size={30} className={"md:mr-4"}/>,
        link: "/dashboard/services",
        text: "Services"
    },
]

const Sidebar = () => {
    const [mylocation, setMylocation] = useState("");
    useEffect(() => {
        setMylocation(window?.location?.pathname);
        console.log("location", window?.location);
    }, []);

    return (
        <div className={'bg-blue-900 h-screen border-r-2'}>
            <div className={'h-14 flex px-12 border-gray-500'} />
            <div className="py-4 px-8">
                <div className="flex flex-col md:items-start items-center justify-start">
                    {
                        mains.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`md:w-full rounded-xl px-4 ${mylocation === item.link ? 'bg-blue-700' : ''}`}>
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