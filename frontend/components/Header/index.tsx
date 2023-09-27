import {FaBars, FaGithub, FaHome} from "react-icons/fa";
import {Button, Dialog, Flex, Text, TextField} from "@radix-ui/themes";
import {useRouter} from "next/router";

const Header = () => {
    const router = useRouter();
    const toHome = () => {
        router.push("/");
    }
    return (
        <header className={"bg-white h-16 fixed sticky left-0 top-0 z-50 border-b"}>
            <div className="container mx-auto h-full bg-white">
                <div className={"flex justify-between items-center h-full"}>
                    <div onClick={toHome} className={"bg-white cursor-pointer"}>
                        <h2 className={"text-gray-600 font-bold text-xl flex items-center"}>
                            <FaHome size={25} className={'text-green-500'}/>
                            <span className={"text-green-500 pl-2"}>G</span>ou<span
                            className={"text-green-500 bg-white"}>G</span>al</h2>
                        <h4 className={'uppercase text-xs text-red-400'}>facilitateur de project</h4>
                    </div>
                    <div className={"flex justify-center items-center space-x-4"}>
                        <FaBars className={`flex md:hidden`} size={26}/>
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <button
                                    className={"hidden md:flex rounded-full text-gray-800 px-6 py-1 border-2 border-gray-800 text-base"}>Je
                                    propose mes
                                    services
                                </button>
                            </Dialog.Trigger>
                            <Dialog.Content style={{maxWidth: 450}}>
                                <Dialog.Title>Ajouter un service</Dialog.Title>
                                <Dialog.Description size="2" mb="4">
                                    Make changes to your profile.
                                </Dialog.Description>
                                <Flex direction="column" gap="3">
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Name
                                        </Text>
                                        <TextField.Input
                                            defaultValue="Freja Johnsen"
                                            placeholder="Enter your full name"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Email
                                        </Text>
                                        <TextField.Input
                                            defaultValue="freja@example.com"
                                            placeholder="Enter your email"
                                        />
                                    </label>
                                </Flex>
                                <Flex gap="3" mt="4" justify="end">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">
                                            Cancel
                                        </Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button color={"red"}>Save</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                        <FaGithub size={26}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;