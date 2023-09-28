import {AiOutlineLoading3Quarters} from "react-icons/ai";

const Success = ({valid}: any) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-green-700 rounded-lg p-6 text-green-600 w-1/3 flex justify-center items-center flex-col">
                <AiOutlineLoading3Quarters size={40} color="white"/>
                <h1 className={`text-xl text-white font-medium py-4 text-center`}>Ajout de l&apos;annonce en
                    cours</h1>
                <p className={'text-center text-gray-300'}>Votre annonce est en cour d&apos;examination. Bien vouloir
                    attendre
                    l&apos;approbation d&apos;un
                    administrateur.</p>
                <button
                    onClick={valid}
                    className={"rounded-full text-gray-900 px-6 py-2 bg-white text-base my-4"}>Retour
                </button>
            </div>
        </div>
    );
}

export default Success;