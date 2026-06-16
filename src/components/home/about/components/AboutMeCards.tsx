import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import StorageIcon from "@mui/icons-material/Storage";

export default function AboutMeCards() {
    const cards = [
        {
            icon: <CodeIcon />,
            title: "Full-Stack Development",
            description:
                "Building responsive frontend experiences and robust backend systems using modern technologies.",
        },
        {
            icon: <StorageIcon />,
            title: "Backend & Databases",
            description:
                "Developing business logic, designing databases, and creating scalable systems that solve real-world problems.",
        },
        {
            icon: <SchoolIcon />,
            title: "Continuous Learning",
            description:
                "Continuously improving my skills through projects, experimentation, and exploring emerging technologies.",
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
                        {card.title}
                    </h4>

                    <p className="text-description leading-relaxed">
                        {card.description}
                    </p>
                </div>
            ))}

        </div>
    )
}
