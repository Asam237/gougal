import {Avatar, Box, Button, Card, Dialog, Flex, Text, TextField} from "@radix-ui/themes";
import {FaMailBulk, FaMapMarker, FaPhone} from "react-icons/fa";
import Link from "next/link";
import {useEffect, useState} from "react";
import Success from "../Success";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {findAllServices, newService} from "../../hooks/api";

const Profiles = () => {

    const [path, setPath] = useState("");
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [marker, setMarker] = useState("");
    const dataService: any = {name, position, phone, mail, marker};

    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    const {data} = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await findAllServices();
            return res.data;
        }
    });

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
        <div className={'py-8 md:py-12 bg-[#FFEBF1]'}>
            <div className="container mx-auto">
                <div className={"flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0"}>
                    <h4 className={'text-center text-3xl font-semibold'}>Ils <span
                        className={'bg-red-500 text-white px-2 py-1'}>répondent</span> à vos demandes
                    </h4>
                    <Link
                        href={"/services"}
                        className={"rounded-full font-semibold underline underline-offset-4 text-red-500 text-base"}>Voir
                        tous les services
                    </Link>
                </div>
                <div className={'my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}>
                    {
                        data?.service?.content.map((item: any, index: number) => {
                            return (
                                path !== "/services" ?
                                    index < 4 && (<Card key={index}>
                                            <Flex gap="3" align="center">
                                                <Avatar
                                                    size="3"
                                                    radius="full"
                                                    fallback={item.sex === "M" ? "M" : "F"}
                                                />
                                                <Box>
                                                    <Text as="div" size="2" weight="bold">
                                                        {item.name}
                                                    </Text>
                                                    <Text as="div" size="2" color="gray">
                                                        {item.position}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                            <Box p={"3"}>
                                                <hr/>
                                                <Flex pt={"4"} justify="between" align="center">
                                                    <Flex>
                                                        <FaPhone color="gray" size={14}/>
                                                        <Text as="div" size="2" ml={"2"} color="gray">
                                                            {item.phone}
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                                <Flex pt={"4"} justify="between" align="center">
                                                    <Flex>
                                                        <FaMailBulk color="gray" size={14}/>
                                                        <Text as="div" size="2" ml={"2"} color="gray">
                                                            {item.mail}
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                                <Flex pt={"4"} justify="between" align="center">
                                                    <Flex>
                                                        <FaMapMarker color="gray" size={14}/>
                                                        <Text as="div" size="2" ml={"2"} color="gray">
                                                            {item.marker}
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                            </Box>
                                        </Card>
                                    ) : (
                                    <Card key={index}>
                                        <Flex gap="3" align="center">
                                            <Avatar
                                                size="3"
                                                radius="full"
                                                fallback={item.sex === "M" ? "M" : "F"}
                                            />
                                            <Box>
                                                <Text as="div" size="2" weight="bold">
                                                    {item.name}
                                                </Text>
                                                <Text as="div" size="2" color="gray">
                                                    {item.position}
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <Box p={"3"}>
                                            <hr/>
                                            <Flex pt={"4"} justify="between" align="center">
                                                <Flex>
                                                    <FaPhone color="gray" size={14}/>
                                                    <Text as="div" size="2" ml={"2"} color="gray">
                                                        {item.phone}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Flex pt={"4"} justify="between" align="center">
                                                <Flex>
                                                    <FaMailBulk color="gray" size={14}/>
                                                    <Text as="div" size="2" ml={"2"} color="gray">
                                                        {item.mail}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Flex pt={"4"} justify="between" align="center">
                                                <Flex>
                                                    <FaMapMarker color="gray" size={14}/>
                                                    <Text as="div" size="2" ml={"2"} color="gray">
                                                        {item.marker}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                    </Card>
                                )
                            )
                        })
                    }
                </div>
                <div className={'w-full flex justify-center'}>
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <button
                                className={"rounded-full text-white px-6 py-2 bg-red-500 text-base"}>Ajouter un service
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
                </div>
            </div>
            {success && <Success valid={() => setSuccess(false)}/>}
        </div>
    );
}
export default Profiles;