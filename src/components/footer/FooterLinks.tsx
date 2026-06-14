import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { SOCIAL } from "@/utils/config";

export default function FooterLinks() {
    const className = `
                p-3
                rounded-xl
                border border-white/10
                text-text
                transition-all duration-300

                hover:text-secondary
                hover:border-secondary
                hover:backdrop-brightness-110
            `

    return (
        <>
            {/* Socials */}
            <div className="flex items-center gap-4">
                <a
                    href={SOCIAL.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className={className}
                >
                    <GitHubIcon />
                </a>

                <a
                    href={SOCIAL.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className={className}
                >
                    <LinkedInIcon />
                </a>

                <a
                    href={SOCIAL.email}
                    aria-label="Email"
                    className={className}
                >
                    < EmailRoundedIcon />
                </a>
            </div>
        </>
    )
}
