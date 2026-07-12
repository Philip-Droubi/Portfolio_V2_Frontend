import { Card, Dialog } from "@mui/material";
import type { CertificateType } from "../types";
import CertificateCardImage from "./CertificateCardImage";
import CertificateCardBody from "./CertificateCardBody";
import MediaGallery from "@/components/mediaViewer/components/MediaGallery";
import { useDisclosure } from "@/hooks/useDisclosure";
import { useState } from "react";
import MediaDialogButtons from "@/components/mediaViewer/components/MediaDialogButtons";

export default function CertificateCard({
    certificate,
    lang,
}: {
    certificate: CertificateType;
    lang: string;
}) {

    const { isOpen, open, close } = useDisclosure(false);

    const [index, setIndex] = useState(0);
    const [zoom, setZoom] = useState(1);

    return (
        <>
            <Card
                elevation={0}
                onClick={open}
                sx={{
                    background: "#162449",
                    borderRadius: "24px",
                }}
                className="
                        group
                        cursor-pointer
                        overflow-hidden
                        border
                        border-white/10
                        transition-all
                        duration-300
                        hover:border-secondary/60
                        hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                    "
            >
                <CertificateCardImage certificate={certificate} lang={lang} />
                <CertificateCardBody certificate={certificate} lang={lang} />
            </Card>

            <Dialog
                fullScreen
                open={isOpen}
                onClose={close}
                slotProps={{
                    paper: {
                        sx: { bgcolor: "black" },
                    },
                }}
            >
                <MediaDialogButtons close={close} setZoom={setZoom} />
                <MediaGallery
                    isOpen={isOpen}
                    media={[certificate.file_url]}
                    index={index}
                    setIndex={setIndex}
                    zoom={zoom}
                    setZoom={setZoom}
                    hasThumbnails={false}
                />
            </Dialog>
        </>
    );
}