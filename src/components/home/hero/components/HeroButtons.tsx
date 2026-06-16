export default function HeroButtons() {
    return (
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-6 select-none">
            <a
                href="/cv/Philip_Droubi_Resume.pdf"
                download
                className="group relative overflow-hidden
                    px-6 py-3 sm:px-8 sm:py-4
                    rounded-2xl
                    font-semibold
                    text-slate-900
                    bg-linear-to-tr from-secondary to-primary
                    shadow-lg shadow-cyan-500/30
                    transition-all duration-300
                    hover:px-10
                    active:scale-95
                    "
            >
                <span className="relative z-10">
                    ⬇ Download CV
                </span>

                {/* Glass Effect */}
                <span
                    className="absolute inset-0
                bg-white/20
                translate-x-[-120%]
                group-hover:translate-x-[120%]
                transition-transform duration-700
                skew-x-12"
                />
            </a>

            <a
                href="#projects"
                className="group
                    px-6 py-3 sm:px-8 sm:py-4
                    rounded-2xl
                    border border-secondary/40
                    bg-white/5 backdrop-blur-md
                    text-secondary
                    font-semibold
                    transition-all duration-300
                    hover:px-10
                    hover:border-secondary
                    hover:bg-cyan-500/10"
            >
                <span className="flex items-center gap-2">
                    View Projects
                    <span className="transition-transform duration-300 group-hover:translate-x-3">
                        →
                    </span>
                </span>
            </a>

        </div>
    )
}
