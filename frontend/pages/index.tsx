import Head from "next/head";

export default function Index() {
    return (
        <div className={"bg-gradient-to-r from-blue-500 to-blue-800 h-screen"}>
            <Head>
                <title>Gougal Index</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis laboriosam, sed. Deleniti,
                exercitationem expedita fuga incidunt ipsum magnam, nisi non nulla placeat quisquam recusandae
                repudiandae rerum sit temporibus voluptates voluptatibus!</p>
        </div>
    )
}