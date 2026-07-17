import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import StorageIcon from "@mui/icons-material/Storage";
import { t } from "i18next";

export default function AboutMeCards() {
    const cards = [
        {
            icon: <CodeIcon />,
            title: "Full_Stack_Development",
            description:
                "Full_Stack_Development_Desc",
        },
        {
            icon: <StorageIcon />,
            title: "Backend_Databases",
            description:
                "Backend_Database_Desc",
        },
        {
            icon: <SchoolIcon />,
            title: "Continuous_Learning",
            description:
                "Continuous_Learning_Desc",
        },
    ];

    return (
        <div className="grid gap-5">

            {cards.map((card) => (
                <div
                    key={card.title}
                    className="
                                group
                                rounded-2xl
                                border border-white/10
                                bg-white/5
                                backdrop-blur-md
                                p-6
                                transition-all duration-300
                                hover:border-secondary/40
                                hover:bg-white/8
                            "
                >
                    <div className="text-secondary mb-4">
                        {card.icon}
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-2">
                        {t(card.title)}
                    </h4>

                    <p className="text-description leading-relaxed">
                        {t(card.description)}
                    </p>
                </div>
            ))}

        </div>
    )
}
