import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";

export default function EducationCard() {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <SchoolIcon className="text-secondary mb-4" fontSize="large" />

            <h3 className="text-xl font-semibold text-white">
                Damascus University
            </h3>

            <p className="text-gray-400 mt-2">
                Information Technology Engineering
            </p>

            <div className="flex items-center gap-2 mt-6 text-gray-400">
                <CalendarMonthIcon fontSize="small" />
                Graduated 2024
            </div>

            <p className="text-gray-300 mt-6 leading-relaxed">
                Studied software engineering, databases,
                system analysis, software architecture,
                and web application development.
            </p>

            <div className="flex justify-center lg:justify-end mt-6">
                <Link
                    to="/certificates"
                    className="text-center w-full
                        px-6 py-3
                        rounded-xl
                        border border-secondary/40
                        text-secondary
                        font-medium
                        transition-all duration-300
                        hover:bg-secondary/10
                        hover:border-secondary">
                    View Certificates →
                </Link>
            </div>
        </div>
    );
}