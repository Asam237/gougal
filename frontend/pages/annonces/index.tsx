import AppLayout from "../layout/app";
import Annonces from "../../components/Annonces";

const AnnoncePage = () => {
    return (
        <AppLayout>
            <main style={{background: '#eeffeb'}}>
                <Annonces/>
            </main>
        </AppLayout>
    );
}

export default AnnoncePage;