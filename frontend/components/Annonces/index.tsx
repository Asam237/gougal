import {Box, Card, Flex, Text, TextField} from "@radix-ui/themes";
import {FaGithub, FaGitlab, FaLinkedin, FaLocationArrow, FaSearch} from "react-icons/fa";
import Link from "next/link";
import useSWR from 'swr'


const Annonces = () => {
    const fetcher = (url: any) => fetch(url).then((res) => res.json());
    const {data, error} = useSWR('/api/profiles', fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    console.log("DATA --->", data);
    return (
        <div className={"py-8"}>
            <div className="container mx-auto">
                <div
                    className={
                        "flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0"
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
                            <TextField.Input placeholder="Rechercher un profile ..."/>
                        </TextField.Root>
                    </Flex>
                </div>
                <div
                    className={
                        "my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    }
                >
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                    <Card className={"h-64 bg-red-400 shadow-xl"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="6" weight="bold" className={'text-gray-700'}>
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray" className={'flex items-center'}>
                                    <FaLocationArrow className={'mr-2'}/> Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <div className={'pt-4 flex flex-col space-y-2'}>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Frontend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Backend Developer</span></button>
                                <button
                                    className={`before:content-['➺'] rounded-full flex justify-start items-center px-4 text-gray-700`}><span
                                    className={'font-medium text-gray-700 pl-1'}>Full stack Developer</span></button>
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
                </div>
            </div>
        </div>
    );
};
export default Annonces;

