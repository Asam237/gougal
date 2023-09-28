import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-4 border-t">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <p className={"text-base mx-auto"}>
                        {new Date().getFullYear()} - <Link href={"https://abbasali.cm"}>Abba Sali</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer