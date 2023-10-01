"use client";
import AppLayout from "./layout/app";
import {Box, Card, Flex, Text, TextField, Tooltip} from "@radix-ui/themes";
import {FaChartLine, FaGithub, FaGitlab, FaLinkedin, FaLocationArrow, FaSearch, FaUser} from "react-icons/fa";
import Link from "next/link";
import {getLocalData} from "../hooks/useLocalData";
import {ProfileType} from "../utils";
import {useEffect, useState} from "react";
import {cleanText} from "../utils/helpers";
import * as Chartjs from "chart.js";
import {Chart} from "chart.js";
import {Bar} from "react-chartjs-2";

export default function Index({localData}: any) {
    const [filteredList, setFilteredList] = useState(localData);
    const [chart, setChart] = useState(true);
    const names: any = [];
    const developerTypes: any = [];
    const developerNumberSkrill: any = [];
    const [myRatio, setMyRation]: any = useState(null);
    const filterBySearch = (event: any) => {
        const query = event.target.value;
        let updatedList = [...localData];
        updatedList = updatedList.filter((item: any) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
        setFilteredList(updatedList);
    };

    filteredList.forEach((i: any) => {
        developerTypes.push(i.developer_type);
        names.push(i.name);
    });
    let listOfDeveloperTypes = [...developerTypes]
    listOfDeveloperTypes.forEach((i: any) => {
        developerNumberSkrill.push(i.length);
    });


    const controllers = Object.values(Chartjs).filter(
        (chart: any) => chart.id !== undefined
    );

    Chart.register(
        ...controllers
    );

    useEffect(() => {
        if (window.innerWidth < 700) {
            setMyRation(1 / 1.5);
        } else {
            setMyRation(2.6/ 1)
        }
    }, []);


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
                    <div className={"w-full mt-4 justify-center flex xl:justify-start items-center"}>
                        <button
                            onClick={() => setChart(!chart)}
                            className={
                                "rounded-full bg-white px-6 py-1 border-2 font-[500] border-gray-700 text-base text-gray-700 items-center hover:bg-gray-700 hover:text-white w-full md:w-1/3 xl:w-1/5 flex justify-center"
                            }
                        >
                            {chart ?
                                <span className={'flex items-center'}><FaChartLine
                                    className={"mr-2"}/>Voir le graphe</span> :
                                <span className={'flex items-center'}><FaUser
                                    className={"mr-2"}/>Voir les profiles</span>
                            }
                        </button>
                    </div>

                    {chart && (
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
                                                    <Tooltip content={(item.name)}>
                                                        <Text as="div" size="6" weight="bold"
                                                              className={'text-gray-700'}>
                                                            {cleanText(item.name, 16)}
                                                        </Text>
                                                    </Tooltip>
                                                    <Text as="div" size="2" color="gray"
                                                          className={'flex items-center'}>
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
                                                    <Link href={`https://www.linkedin.com/in/${item.linkedin_handle}`}>
                                                        <FaLinkedin size={30} className={'text-blue-700'}/>
                                                    </Link>
                                                    <Link href={`https://www.github.com/${item.github_handle}`}>
                                                        <FaGithub size={30} className={'text-gray-700'}/>
                                                    </Link>
                                                    <Link href={`https://www.gitlab.com/${item.gitlab_handle}`}>
                                                        <FaGitlab size={30} className={'text-red-600'}/>
                                                    </Link>
                                                </div>
                                            </Box>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    )}
                    {!chart &&
                        (
                            <div className={'my-6'}>
                                <Bar
                                    options={{responsive: true, aspectRatio: myRatio}}
                                    data={{
                                        labels: [
                                            ...names
                                        ],
                                        datasets: [
                                            {
                                                label: 'Tech Stack',
                                                data: [...developerNumberSkrill],
                                                backgroundColor: 'rgb(75, 85, 99)',
                                            }
                                        ],
                                    }}
                                />
                            </div>)}
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


