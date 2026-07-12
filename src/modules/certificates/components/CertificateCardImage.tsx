import type { CertificateType } from "../types";
import { getDir } from "@/utils/functions";

export default function CertificateCardImage({
    certificate,
    lang,
}: {
    certificate: CertificateType;
    lang: string;
}) {
    return (
        <div className="relative h-56 overflow-hidden" dir={getDir()}>
            {/* Blurred background */}
            <img
                src={certificate.file_url}
                alt=""
                aria-hidden
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    blur-[3px]
                    scale-110
                    brightness-105
                    "
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Main image */}
            <img
                src={certificate.file_url}
                alt={certificate[`title_${lang}`] ?? ""}
                className="
                    relative
                    z-10
                    w-full
                    h-full
                    object-contain
                    "
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent z-20" />
        </div>
    );
}