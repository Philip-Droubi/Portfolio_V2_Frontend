import { useCursor } from "@/context/CursorContext";
import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import FooterName from "./FooterName";
import { useEffect, useRef } from "react";

export default function Footer() {
    const ref = useRef<HTMLDivElement>(null);
    const { registerZone, unregisterZone } = useCursor();

    useEffect(() => {
        registerZone(ref.current);
        return () => unregisterZone(ref.current);
    }, [registerZone, unregisterZone]);

    return (
        <footer ref={ref} className="bg-mobile-navbar">
            <div className="h-3 w-full bg-linear-to-r from-primary to-secondary" />
            <div className="max-w-330 mx-auto px-6 py-8">

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