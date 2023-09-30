import {Box, Card, Flex, Text} from "@radix-ui/themes";
import {FaMailBulk, FaPhone} from "react-icons/fa";
import Link from "next/link";

const Annonces = () => {
    return (
        <div className={"py-8"}>
            <div className="container mx-auto">
                <div
                    className={
                        "flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0"
                    }
                >
                    <h4 className={"text-center text-3xl font-semibold"}>
                        Les derniers{" "}
                        <span className={"bg-gray-600 text-white px-2 py-1"}>
              profiles
            </span>
                    </h4>
                    <Link
                        href={"/annonces"}
                        className={
                            "rounded-full font-semibold underline underline-offset-4 text-gray-700 text-base"
                        }
                    >
                        Voir tous les annonces
                    </Link>
                </div>
                <div
                    className={
                        "my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    }
                >
                    <Card className={"h-64 bg-red-400"}>
                        <Flex ml="3" gap="3" align="center">
                            <Box>
                                <Text as="div" size="5" weight="bold">
                                    Abba Sali
                                </Text>
                                <Text as="div" size="2" color="gray">
                                    Maroua
                                </Text>
                            </Box>
                        </Flex>
                        <Box p={"3"}>
                            <hr/>
                            <Flex pt={"4"} justify="between" align="center">
                                <Flex>
                                    <FaPhone color="gray" size={14}/>
                                    <Text as="div" size="2" ml={"2"} color="gray">
                                        691846922
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex pt={"4"} justify="between" align="center">
                                <Flex>
                                    <FaMailBulk color="gray" size={14}/>
                                    <Text as="div" size="2" ml={"2"} color="gray">
                                        abbasaliaboubakar@gmail.com
                                    </Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Card>
                </div>
            </div>
        </div>
    );
};
export default Annonces;

