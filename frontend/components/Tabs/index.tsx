import {Text} from "@radix-ui/themes";
import {useState} from "react";
import Annonces from "../Annonces";
import Profiles from "../Profiles";
import AppLayout from "../../pages/layout/app";

const Tabs = () => {
    const [select, setSelect] = useState("annonces");
    return (
        <AppLayout>
            <div
                className={'flex justify-center items-center space-x-4 flex-row my-10'}>
                <div onClick={() => setSelect("annonces")}
                     className={`px-6 py-2 cursor-pointer rounded-md ${select === 'annonces' ? 'bg-green-500 text-white' : ''}`}>
                    <Text>Annonces</Text></div>
                <div onClick={() => setSelect("demandes")}
                     className={`px-6 py-2 rounded-md cursor-pointer ${select === 'demandes' ? 'bg-red-500 text-white' : ''}`}>
                    <Text>Demandes</Text></div>
            </div>
            <div>
                {select === "annonces" ? <Annonces/> : <Profiles/>}
            </div>
        </AppLayout>
    );
}

export default Tabs;