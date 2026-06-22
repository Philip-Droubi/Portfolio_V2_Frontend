import { SOCIAL } from "@/utils/config";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function HeroLinks() {
    const className = "text-gray-400 hover:text-secondary transition-all duration-200 hover:scale-110"

    return (
        <div
            className="flex justify-center lg:justify-start items-center gap-8 pt-6">
            <a href={SOCIAL.linkedIn} target="_blank" rel="noopener noreferrer" className={className}>
                <LinkedInIcon fontSize="large" />
            </a>

            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className={className}>
                <GitHubIcon fontSize="large" />
            </a>

            <a href={`mailto:${SOCIAL.email}`} className={className} target="_blank" rel="noopener noreferrer">
                <EmailIcon fontSize="large" />
            </a>

        </div>
    )
}
