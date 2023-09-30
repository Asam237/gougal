import AppLayout from "./layout/app";
import {Box, Card, Flex, Text, TextField} from "@radix-ui/themes";
import {FaGithub, FaGitlab, FaLinkedin, FaLocationArrow, FaSearch} from "react-icons/fa";
import Link from "next/link";
import {getLocalData} from "../hooks/useLocalData";
import {ProfileType} from "../utils";
import {useState} from "react";

export default function Index({localData}: any) {
    const [filteredList, setFilteredList] = useState(localData);
    const filterBySearch = (event: any) => {
        const query = event.target.value;
        let updatedList = [...localData];
        updatedList = updatedList.filter((item: any) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
        setFilteredList(updatedList);
    };

    return (
        <AppLayout>
            <div className={"py-8"}>
                <div className="container mx-auto">
                    <div
                        className={
                            "flex flex-col xl:flex-row xl:justify-between items-center space-y-4 xl:space-y-0"
                        }
                    >
                        <h4 className={"text-center text-3xl font-semibold"}>
                            Trouver la <span className={"bg-gray-600 text-white px-2 py-1"}>perle rare</span> ne vous
                            coûtera pas une fortune.
                        </h4>
                        <Flex direction="column" gap="3" style={{maxWidth: 400}}>
                            <TextField.Root size="3">
                                <TextField.Slot>
                                    <FaSearch size={16} color="gray"/>
                                </TextField.Slot>
                                <TextField.Input onChange={filterBySearch} placeholder="Rechercher un profile ..."/>
                            </TextField.Root>
                        </Flex>
                    </div>
                    <div
                        className={
                            "my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        }
                    >


                        {
                            filteredList.map((item: ProfileType, index: number) => {
                                return (
                                    <Card key={index} className={"h-64 bg-red-400 shadow-xl"}>
                                        <Flex ml="3" gap="3" align="center">
                                            <Box>
                                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                                    {item.name}
                                                </Text>
                                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                                    <FaLocationArrow className={'mr-2'}/> {item.city}
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <Box p={"3"}>
                                            <hr/>
                                            <div className={'pt-4 flex flex-col space-y-2'}>
                                                {
                                                    item?.developer_type?.map((item: any, index: number) => {
                                                        return (
                                                            <button
                                                                key={index}
                                                                className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                                                className={'font-medium text-gray-700 pl-1'}>{item}</span>
                                                            </button>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <hr className={'my-4'}/>
                                            <div className={'flex space-x-6 justify-center items-center my-4'}>
                                                <Link href={"#"}>
                                                    <FaLinkedin size={30} className={'text-blue-700'}/>
                                                </Link>
                                                <Link href={"#"}>
                                                    <FaGithub size={30} className={'text-gray-700'}/>
                                                </Link>
                                                <Link href={"#"}>
                                                    <FaGitlab size={30} className={'text-red-600'}/>
                                                </Link>
                                            </div>
                                        </Box>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export async function getStaticProps() {
    const localData = await getLocalData();
    return {
        props: {localData}
    }
}


