import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { SOCIAL } from "@/utils/config";

const contacts = [
    {
        icon: LinkedInIcon,
        label: "LinkedIn",
        value: "Philip Droubi",
        href: SOCIAL.linkedIn,
    },
    {
        icon: EmailIcon,
        label: "Email",
        value: SOCIAL.email,
        href: `mailto:${SOCIAL.email}`,
    },
    {
        icon: WhatsAppIcon,
        label: "WhatsApp",
        value: "Chat Instantly",
        href: SOCIAL.whatsApp,
    },
    {
        icon: PhoneIcon,
        label: "Phone",
        value: SOCIAL.phone_number,
        href: `tel:${SOCIAL.phone_number}`,
    },
    {
        icon: GitHubIcon,
        label: "GitHub",
        value: "Philip-Droubi",
        href: SOCIAL.github,
    },
    {
        icon: TelegramIcon,
        label: "Telegram",
        value: "@PhilipDroubi",
        href: SOCIAL.telegram,
    },
];

export default function ContactCard() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="space-y-4">
                {contacts.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="
                            group
                            flex items-center
                            justify-between
                            gap-4
                            rounded-2xl
                            border border-white/10
                            bg-white/5
                            p-4
                            transition-all duration-300
                            hover:border-secondary/50
                            hover:bg-white/8
                            hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="
                                    w-12 h-12
                                    rounded-xl
                                    bg-secondary/10
                                    flex items-center justify-center
                                    text-secondary
                                    transition-transform
                                    group-hover:scale-110"
                                >
                                    <Icon />
                                </div>

                                <div>
                                    <div className="text-white font-medium">
                                        {item.label}
                                    </div>

                                    <div className="text-sm text-description">
                                        {item.value}
                                    </div>
                                </div>
                            </div>

                            <div
                                className="
                                    text-gray-500
                                    transition-all
                                    duration-200
                                    group-hover:text-secondary
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1">
                                <ArrowOutwardIcon />
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}