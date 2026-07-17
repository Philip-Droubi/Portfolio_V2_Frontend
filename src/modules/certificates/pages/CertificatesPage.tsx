import CertificateCard from "../components/CertificateCard";
import data from "@/assets/json/data.json";
import type { CertificateType } from "../types";
import i18next from "i18next";
import { t } from "i18next";

export default function CertificatesPage() {
    const certificates = data.certificate as CertificateType[];
    const lang = i18next.language;

    const groupedCertificates = [...certificates]
        .sort((a, b) => {
            if (a.source !== b.source) {
                return a.source.localeCompare(b.source);
            }

            return (
                new Date(b.issue_date).getTime() -
                new Date(a.issue_date).getTime()
            );
        })
        .reduce<Record<string, CertificateType[]>>((groups, certificate) => {
            if (!groups[certificate.source]) {
                groups[certificate.source] = [];
            }

            groups[certificate.source].push(certificate);

            return groups;
        }, {});

    return (
        <>
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-5xl font-bold text-white">
                    {t("Certificates")} &{" "}
                    <span className="text-secondary">{t("Achievements")}</span>
                </h2>

                <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
                    {t("CertificatesDescription")}
                </p>
            </div>

            <div className="space-y-10">
                {Object.entries(groupedCertificates).map(
                    ([source, certificates]) => (
                        <section key={source}>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px flex-1 bg-white/10" />

                                <h3 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
                                    {source}
                                </h3>

                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            <div className="flex flex-wrap justify-center gap-8">
                                {certificates.map((certificate) => (
                                    <div
                                        key={certificate.id}
                                        className="w-full max-w-97.5 flex"
                                    >
                                        <CertificateCard
                                            certificate={certificate}
                                            lang={lang}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )
                )}
            </div>
        </>
    );
}