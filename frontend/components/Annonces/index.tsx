import {Avatar, Box, Button, Card, Dialog, Flex, Text, TextField} from "@radix-ui/themes";
import {FaMailBulk, FaMapMarker, FaPhone} from "react-icons/fa";
import Link from "next/link";
import {useEffect, useState} from "react";

const Annonces = () => {
    const [path, setPath] = useState("");

    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    const annonces = [
        {
            name: "Abba Sali",
            position: "Software Developer",
            phone: "691 84 69 22",
            mail: "abbasaliaboubakar@gmail.com",
            marker: "Maroua",
            sex: "M",
            title: "Cherche Femme de Ménage",
            description: "Bonjour, recherche personne pour faire du ménage 1 fois par semaine idéalement dans l'après midi jeudi ou vendredi sur Hambye 1 à 2H de travail/semaine"
        },
        {
            name: "Abba Sali",
            position: "Software Developer",
            phone: "691 84 69 22",
            mail: "abbasaliaboubakar@gmail.com",
            marker: "Maroua",
            sex: "M",
            title: "Cherche Femme de Ménage",
            description: "Bonjour, recherche personne pour faire du ménage 1 fois par semaine idéalement dans l'après midi jeudi ou vendredi sur Hambye 1 à 2H de travail/semaine"
        },
        {
            name: "Abba Sali",
            position: "Software Developer",
            phone: "691 84 69 22",
            mail: "abbasaliaboubakar@gmail.com",
            marker: "Maroua",
            sex: "M",
            title: "Cherche Femme de Ménage",
            description: "Bonjour, recherche personne pour faire du ménage 1 fois par semaine idéalement dans l'après midi jeudi ou vendredi sur Hambye 1 à 2H de travail/semaine"
        },
        {
            name: "Abba Sali",
            position: "Software Developer",
            phone: "691 84 69 22",
            mail: "abbasaliaboubakar@gmail.com",
            marker: "Maroua",
            sex: "M",
            title: "Cherche Femme de Ménage",
            description: "Bonjour, recherche personne pour faire du ménage 1 fois par semaine idéalement dans l'après midi jeudi ou vendredi sur Hambye 1 à 2H de travail/semaine"
        },
        {
            name: "Abba Sali",
            position: "Software Developer",
            phone: "691 84 69 22",
            mail: "abbasaliaboubakar@gmail.com",
            marker: "Maroua",
            sex: "F",
            title: "Cherche Femme de Ménage",
            description: "Bonjour, recherche personne pour faire du ménage 1 fois par semaine idéalement dans l'après midi jeudi ou vendredi sur Hambye 1 à 2H de travail/semaine"
        },
        {
            name: "Abba Sali",
            position: "Software Developer",
            phone: "691 84 69 22",
            mail: "abbasaliaboubakar@gmail.com",
            marker: "Maroua",
            sex: "F",
            title: "Cherche Femme de Ménage",
            description: "Bonjour, recherche personne pour faire du ménage 1 fois par semaine idéalement dans l'après midi jeudi ou vendredi sur Hambye 1 à 2H de travail/semaine"
        },
        {
            name: "Abba Sali",
            position: "Software Developer",
            phone: "691 84 69 22",
            mail: "abbasaliaboubakar@gmail.com",
            marker: "Maroua",
            sex: "M",
            title: "Cherche Femme de Ménage",
            description: "Bonjour, recherche personne pour faire du ménage 1 fois par semaine idéalement dans l'après midi jeudi ou vendredi sur Hambye 1 à 2H de travail/semaine"
        },
    ];
    return (
        <div className={'py-8 md:py-12'}>
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
                        annonces.map((item, index) => {
                            return (
                                path !== "/annonces" ?
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
                                                            Telephone
                                                        </Text>
                                                    </Flex>
                                                    <Text as="div" size="2" color="gray">
                                                        {item.phone}
                                                    </Text>
                                                </Flex>
                                                <Flex pt={"4"} justify="between" align="center">
                                                    <Flex>
                                                        <FaMailBulk color="gray" size={14}/>
                                                        <Text as="div" size="2" ml={"2"} color="gray">
                                                            Mail
                                                        </Text>
                                                    </Flex>
                                                    <Text as="div" size="2" color="gray">
                                                        {item.mail}
                                                    </Text>
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
                                                    {item.marker}
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <Box p={"3"}>
                                            <hr/>
                                            <Flex pt={"4"} justify="between" align="center">
                                                <Flex>
                                                    <FaPhone color="gray" size={14}/>
                                                    <Text as="div" size="2" ml={"2"} color="gray">
                                                        Telephone
                                                    </Text>
                                                </Flex>
                                                <Text as="div" size="2" color="gray">
                                                    {item.phone}
                                                </Text>
                                            </Flex>
                                            <Flex pt={"4"} justify="between" align="center">
                                                <Flex>
                                                    <FaMailBulk color="gray" size={14}/>
                                                    <Text as="div" size="2" ml={"2"} color="gray">
                                                        Mail
                                                    </Text>
                                                </Flex>
                                                <Text as="div" size="2" color="gray">
                                                    {item.mail}
                                                </Text>
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
                                    <Button color={"green"}>Save</Button>
                                </Dialog.Close>
                            </Flex>
                        </Dialog.Content>
                    </Dialog.Root>
                </div>
            </div>
        </div>
    );
}
export default Annonces;