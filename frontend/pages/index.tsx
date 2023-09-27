import Annonces from "../components/Annonces";
import Profiles from "../components/Profiles";
import AppLayout from "./layout/app";

export default function Index() {
    return (
        <AppLayout>
            <main style={{background: '#eeffeb'}}>
                <Annonces/>
                <Profiles/>
            </main>
        </AppLayout>
    );
}