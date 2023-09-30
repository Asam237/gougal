import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-4 border-t bg-white md:fixed md:bottom-0 md:right-0 md:left-0">
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