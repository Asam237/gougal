const Footer = () => {
    return (
        <footer className="py-8 md:py-12 border-t">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <p className={"text-base mx-auto"}>
                        {new Date().getFullYear()} - Abba Sali
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer