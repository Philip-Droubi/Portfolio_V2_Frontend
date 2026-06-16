import { INFO } from '@/utils/config'
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function AboutMeInfoCards() {
    const cards = [
        {
            icon: <LocationOnIcon />,
            title: "Location",
            description: INFO.address,
        },
        {
            icon: <SchoolIcon />,
            title: "Education",
            description: INFO.university,
        },
    ];

    return (
        <div className="grid sm:grid-cols-2 gap-4 pt-4">

            {cards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
                    <div className="flex items-center gap-3 text-secondary mb-2">
                        {card.icon}
                        <span className="font-medium text-white">
                            {card.title}
                        </span>
                    </div>

                    <p className="text-description">
                        {card.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
