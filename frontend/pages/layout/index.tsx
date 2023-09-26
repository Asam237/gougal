import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import {FaSignOutAlt} from "react-icons/fa";
import {Text} from "@radix-ui/themes";
import Link from "next/link";

const Layout = ({children}: any) => {
    return (
        <div
            className={"bg-gray-100"}>
            <Head>
                <title>Dashboard </title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={'flex flex-row'}>
                <div className={'w-1/5'}>
                    <Sidebar/>
                </div>
                <div className={'w-4/5'}>
                    <header className={'border-b-2 py-4 border-gray-200 bg-white'}>
                        <div className="container mx-auto">
                            <div className={'flex justify-end'}>
                                <FaSignOutAlt className={'text-blue-900 mr-2'} size={25}/>
                                <Link href={"/login"} className={'text-blue-900 font-semibold'}>
                                    <Text>Deconnexion</Text>
                                </Link>
                            </div>
                        </div>
                    </header>
                    <div>
                        {children}
                    </div>
                    <footer className={'fixed bottom-0 right-0 w-4/5'}>
                        <div className={'border-t-2 w-full'}>
                            <p className={'text-center p-4 text-xs font-semibold text-gray-700'}>© {new Date().getFullYear()} -
                                Abba Sali</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Layout;