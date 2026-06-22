export default function FooterBottom() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
                <p className="text-sm text-description">
                    © {currentYear} Philip Droubi. All rights reserved.
                </p>

                <p className="text-sm text-description">
                    Built with
                    <span className="inline-block animate-bounce">
                        ❤️
                    </span>
                    using React, TypeScript & Tailwind CSS
                </p>
            </div>
        </>
    )
}
