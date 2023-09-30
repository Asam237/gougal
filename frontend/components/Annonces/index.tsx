import {Avatar, Box, Button, Card, Dialog, Flex, Text, TextArea, TextField} from "@radix-ui/themes";
import {FaMailBulk, FaPhone} from "react-icons/fa";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {findAllAnnonces, newAnnonce} from "../../hooks/useApi";

const Annonces = () => {
    const [path, setPath] = useState("");
    const queryClient = useQueryClient();

    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    const {data} = useQuery({
        queryKey: ["annonces"],
        queryFn: async () => {
            const res = await findAllAnnonces();
            return res.data;
        }
    });

    const addAnnonceMutation = useMutation({
        mutationKey: ["annonces"],
        mutationFn: async () => {
            await newAnnonce(dataAnnonce);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['annonces']})
        },
        onError: () => {
        }
    });

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [marker, setMarker] = useState("");
    const [sex, setSex] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const dataAnnonce: any = {name, position, phone, mail, marker, title, description};
    const handleAnnonce = (e: any) => {
        e.preventDefault();
        addAnnonceMutation.mutate(dataAnnonce);
    }

    return (

        <div className={'py-8 bg-[#eeffeb]'}>
            <div className="container mx-auto">
                <div className={"flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0"}>
                    <h4 className={'text-center text-3xl font-semibold'}>Les dernières <span
                        className={'bg-green-500 text-white px-2 py-1'}>annonces</span></h4>
                    <Link href={"/annonces"}
                          className={"rounded-full font-semibold underline underline-offset-4 text-green-500 text-base"}>Voir
                        tous les annonces</Link>
                </div>
                <div className={'my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}>
                    {
                        data?.annonce?.content?.map((item: any, index: number) => {
                            return (
                                path !== "/annonces" ?
                                    index < 4 && (<Card className={'h-64'} key={index}>
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
                                                        {item.marker}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                            <Box p={"3"}>
                                                <hr/>
                                                <Flex direction="column">
                                                    <Text as="div" size="4" my="4">
                                                        {item.title}
                                                    </Text>
                                                    <Text as="div" size="2" color="gray">
                                                        {item.description}
                                                    </Text>
                                                </Flex>
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
                                            </Box>
                                        </Card>
                                    ) : (
                                    <Card key={index} className={'h-4'}>
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
                                                    {item.marker}
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <Box p={"3"}>
                                            <hr/>
                                            <Flex direction="column">
                                                <Text as="div" size="4" my="4">
                                                    {item.title}
                                                </Text>
                                                <Text as="div" size="2" color="gray">
                                                    {item.description}
                                                </Text>
                                            </Flex>
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
                                className={"rounded-full text-white px-6 py-2 bg-green-500 text-base"}>Ajouter une
                                annonce
                            </button>
                        </Dialog.Trigger>
                        <Dialog.Content style={{maxWidth: 450}}>
                            <Dialog.Title>Ajouter une annonce</Dialog.Title>
                            <form onSubmit={handleAnnonce}>
                                <Flex direction="column" gap="3">
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Title
                                        </Text>
                                        <TextField.Input
                                            defaultValue="title"
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Title"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Description
                                        </Text>
                                        <TextArea
                                            defaultValue="descripton"
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="description"
                                        />
                                    </label>
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
                                            Telephone
                                        </Text>
                                        <TextField.Input
                                            defaultValue="691 84 69 22"
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Telephone"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Position
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
                                            onChange={(e) => setMarker(e.target.value)}
                                            defaultValue="Maroua"
                                            placeholder="Entrez votre position"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Email
                                        </Text>
                                        <TextField.Input
                                            defaultValue="mail@example.com"
                                            onChange={(e) => setMail(e.target.value)}
                                            placeholder="Entrez votre email"
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
        </div>
    );
}
export default Annonces;