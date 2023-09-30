import {FaBars, FaGithub, FaHome, FaTimes} from "react-icons/fa";
import {Button, Dialog, Flex, Text, TextField} from "@radix-ui/themes";
import {useRouter} from "next/router";
import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {newService} from "../../hooks/useApi";
import Link from "next/link";

const Header = () => {
    const router = useRouter();
    const toHome = () => {
        router.push("/");
    }

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [marker, setMarker] = useState("");
    const dataService: any = {name, position, phone, mail, marker};
    const [open, setOpen] = useState(false);

    const queryClient = useQueryClient();
    const addServiceMutation = useMutation({
        mutationKey: ["services"],
        mutationFn: async () => {
            await newService(dataService);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['services']})
        },
        onError: () => {
        }
    });
    const handleService = (e: any) => {
        e.preventDefault();
        addServiceMutation.mutate(dataService);
    }


    return (
        <header className={"bg-white h-16 sticky left-0 top-0 z-50 border-b"}>
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
                        <FaBars onClick={() => setOpen(!open)} className={`flex md:hidden`} size={26}/>
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
                                <form onSubmit={handleService}>
                                    <Flex direction="column" gap="3">
                                        <label>
                                            <Text as="div" size="2" mb="1" weight="bold">
                                                Nom
                                            </Text>
                                            <TextField.Input
                                                defaultValue="Abba Sali"
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Entrez votre nom"
                                            />
                                        </label>
                                        <label>
                                            <Text as="div" size="2" mb="1" weight="bold">
                                                Email
                                            </Text>
                                            <TextField.Input
                                                defaultValue="abbasali@example.com"
                                                onChange={(e) => setMail(e.target.value)}
                                                placeholder="Entrez votre email"
                                            />
                                        </label>
                                        <label>
                                            <Text as="div" size="2" mb="1" weight="bold">
                                                Profile
                                            </Text>
                                            <TextField.Input
                                                defaultValue="Software Developer"
                                                onChange={(e) => setPosition(e.target.value)}
                                                placeholder="Profile"
                                            />
                                        </label>
                                        <label>
                                            <Text as="div" size="2" mb="1" weight="bold">
                                                Position
                                            </Text>
                                            <TextField.Input
                                                defaultValue="Maroua"
                                                onChange={(e) => setMarker(e.target.value)}
                                                placeholder="Entrez votre position"
                                            />
                                        </label>
                                        <label>
                                            <Text as="div" size="2" mb="1" weight="bold">
                                                Telephone
                                            </Text>
                                            <TextField.Input
                                                defaultValue="691 84 69 22"
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Entrez votre numero"
                                            />
                                        </label>
                                    </Flex>
                                    <Flex gap="3" mt="4" justify="end">
                                        <Dialog.Close>
                                            <Button variant="soft" color="gray">
                                                Annuler
                                            </Button>
                                        </Dialog.Close>
                                        <Dialog.Close>
                                            <Button type="submit" color={"red"}>Enregistrer</Button>
                                        </Dialog.Close>
                                    </Flex>
                                </form>
                            </Dialog.Content>
                        </Dialog.Root>
                        <Link href={"http://github.com/Asam237"}>
                            <FaGithub size={26}/>
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
                            <Link href={"/services"}>
                                <button
                                    className={"rounded-full text-gray-200 px-6 py-1 border-2 border-gray-200 text-base mt-6"}>Je
                                    propose mes
                                    services
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;