import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AppLayout = ({children}: any) => {
    return (
        <>
            <Head>
                <title>Trouvez des employés qui répondent à vos critères de recrutement</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default AppLayout;