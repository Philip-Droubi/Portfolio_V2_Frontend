import ArticleIcon from "@mui/icons-material/Article";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { SOCIAL } from "@/utils/config";

export default function ContactDevTo() {
    return (
        <div className="mt-8">

            {/* Divider */}
            <div className="relative flex items-center select-none">
                <div className="grow border-t border-description" />

                <span
                    className="px-4 text-md font-bold tracking-[0.25em] uppercase text-description">
                    Knowledge Sharing
                </span>

                <div className="grow border-t border-description" />
            </div>

            <p className="text-description leading-relaxed mt-6">
                Beyond building software, I enjoy sharing what I learn.
                <span className="block">
                    I write practical articles about web development,
                    software architecture, and lessons learned from real-world projects.
                </span>
            </p>

            <div className="flex items-center justify-center">

                <a
                    href={SOCIAL.dev_to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 mt-5 group">
                    <div
                        className="
                        flex items-center justify-center
                        w-10 h-10
                        rounded-xl
                        bg-secondary/10
                        text-secondary
                        border border-secondary/20
                        transition-all duration-300
                        group-hover:bg-secondary/20
                        group-hover:border-secondary/40">
                        <ArticleIcon fontSize="small" />
                    </div>

                    <div>
                        <div
                            className="flex items-center gap-2 text-white font-medium transition-colors duration-300 group-hover:text-secondary">
                            DEV Community

                            <div
                                className="
                                    transition-all
                                    duration-200
                                    group-hover:text-secondary
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1">
                                <ArrowOutwardIcon fontSize="small" />
                            </div>
                        </div>

                        <div className="text-sm text-description text-start">
                            @PhilipDroubi
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
