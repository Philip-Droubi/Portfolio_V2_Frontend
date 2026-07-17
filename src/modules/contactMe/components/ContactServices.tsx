import { t } from "i18next";

export default function ContactServices() {
    const services = [
        "Backend_Development",
        "Frontend_Development",
        "REST_API_Design",
        "Database_Architecture",
        "Performance_Optimization",
        "Deployment_Maintenance",
    ];

    return (
        <div className="grid sm:grid-cols-2 gap-3 mt-8">
            {
                services.map((service) => (
                    <div
                        key={service}
                        className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4"
                    >
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-gray-300">{t(service)}</span>
                    </div>
                ))
            }
        </div>
    )
}
