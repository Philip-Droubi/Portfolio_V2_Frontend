import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import FooterName from "./FooterName";

export default function Footer() {
    return (
        <footer className="bg-mobile-navbar">
            <div className="h-3 w-full bg-linear-to-r from-primary to-secondary" />
            <div className="max-w-330 mx-auto px-6 py-10">

                <div className="flex flex-col items-center gap-6">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full">
                        {/* Footer Name */}
                        <FooterName />

                        {/* Footer Links Section */}
                        <FooterLinks />
                    </div>

                    {/* Footer Bottom Section */}
                    <FooterBottom />
                </div>
            </div>
        </footer>
    );
}