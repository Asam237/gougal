import Layout from "../layout";
import {Heading} from "@radix-ui/themes";
import {FaUserCheck} from "react-icons/fa";

const Dashboard = () => {
    return (
        <Layout>
            <main className={"md:mt-20 md:mx-40"}>
                <div
                    className={'m-4 rounded-md bg-white border h-2/3 p-6 flex justify-center items-center flex-col md:px-12 md:py-20'}
                >
                    <FaUserCheck size={80} color="gray"/>
                    <Heading size="5" align="center" style={{color: "gray", marginTop: '16px'}}> Abba Sali,
                        nous sommes
                        heureux de
                        vous accueillir à bord !</Heading>
                </div>
            </main>

        </Layout>
    );
}

export default Dashboard;