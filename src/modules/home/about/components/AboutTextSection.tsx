import { INFO } from "@/utils/config";
import { t } from "i18next";

export default function AboutTextSection() {
    return (
        <div className="space-y-6 text-center lg:text-start">
            <h3 className="text-2xl md:text-4xl font-semibold text-white">
                {t("AboutHeader")}
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
                {t("I_m")} <span className="text-secondary text-xl font-bold">{t(INFO.name)}</span>{t("AboutSec_1")}
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
                {t("AboutSec_2")}
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
                {t("AboutSec_3")}
            </p>
        </div>
    )
}
