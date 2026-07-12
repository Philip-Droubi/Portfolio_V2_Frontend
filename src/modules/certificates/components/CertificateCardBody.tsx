import { getDir } from "@/utils/functions";
import type { CertificateType } from "../types";

export default function CertificateCardBody({
    certificate,
    lang,
}: {
    certificate: CertificateType;
    lang: string;
}) {
    return (
        <div className="px-4 py-4" dir={getDir()}>
            <h3 className="text-white text-xl font-bold line-clamp-2 min-h-15">
                {certificate[`title_${lang}`]}
            </h3>

            <div className="text-sm text-secondary mb-3">
                {new Date(certificate.issue_date).toLocaleDateString()}
            </div>

            <p className="text-description text-sm leading-relaxed h-18 overflow-y-auto
                [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-secondary/50
                hover:[&::-webkit-scrollbar-thumb]:bg-secondary/80

                [scrollbar-width:thin]
                [scrollbar-color:var(--color-secondary)_transparent]
                "
            >
                {certificate[`description_${lang}`]}
            </p>
        </div>
    );
}