import { INFO } from "@/utils/config";
import { t } from "i18next";

export default function FooterName() {
    return (
        <>
            <div className="text-center md:text-start">
                <h2 className="text-3xl font-bold text-title">
                    {t(INFO.name)}
                </h2>

                <p className="mt-3 mb-3 max-w-xl text-description leading-relaxed md:mb-0">
                    {t('footerDescription')}
                </p>
            </div >
        </>
    )
}
