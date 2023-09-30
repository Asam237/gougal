import {FaBars, FaDesktop, FaGithub, FaTimes} from "react-icons/fa";
import {useRouter} from "next/router";
import {useState} from "react";
import Link from "next/link";
import {Text} from "@radix-ui/themes";

const Header = () => {
        const router = useRouter();
        const toHome = () => {
            router.push("/");
        };

        const [open, setOpen] = useState(false);


        return (
            <header className={"bg-white h-16 sticky left-0 top-0 z-50 border-b"}>
                <div className="container mx-auto h-full bg-white">
                    <div className={"flex justify-between items-center h-full"}>
                        <div onClick={toHome} className={"bg-white cursor-pointer"}>
                            <h2 className={"text-black font-bold text-xl flex items-center"}>
                                <FaDesktop size={25} className={"text-gray-700"}/>
                                <div className={'ml-2'}>
                                    <Text className={'text-gray-700'}>Gougal</Text>
                                </div>
                            </h2>
                            <h4 className={"uppercase text-xs text-gray-700"}>
                                Engagez les meilleurs.
                            </h4>
                        </div>
                        <div className={"flex justify-center items-center space-x-4"}>
                            <FaBars
                                onClick={() => setOpen(!open)}
                                className={`flex md:hidden`}
                                size={26}
                            />
                            <Link
                                href={
                                    "https://github.com/Asam237/gougal/issues/new?assignees=&labels=&template=take-the-announcement.yaml&title=DO+NOT+EDIT+-+takes+the-profile.yaml&title=DO+NOT+EDIT+-+takes+the+profile"
                                }
                                className={
                                    "rounded-full bg-gray-700 px-6 py-1 border-green-500 text-base hidden md:flex text-white"
                                }
                            >
                                J&apos;ajoute mon profile
                            </Link>
                            <Link href={"http://github.com/Asam237"}>
                                <FaGithub size={26} className={"text-gray-700"}/>
                            </Link>
                        </div>
                    </div>
                </div>
                {open && (
                    <div className={"flex md:hidden"}>
                        <div
                            className="fixed right-0 top-0 z-[1035] h-full w-60 overflow-hidden bg-gray-500 py-8 justify-between">
                            <div className="h-screen flex items-center flex-col aside-link">
                                <FaTimes
                                    size={30}
                                    color="white"
                                    className="cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                />
                                <Link
                                    href={"https://github.com/Asam237/gougal/issues/new?assignees=&labels=&template=take-the-announcement.yaml&title=DO+NOT+EDIT+-+takes+the-announcement.yaml&title=DO+NOT+EDIT+-+takes+the+announcement"}>
                                    <button
                                        className={
                                            "rounded-full text-gray-200 px-6 py-1 border-2 border-gray-200 text-base mt-6"
                                        }
                                    >
                                        Je propose mes services
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        );
    }
;

export default Header;

