import { Box, Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import { useDisclosure } from "@/hooks/useDisclosure";
import MediaGallery from "./components/MediaGallery";
import MediaDialogButtons from "./components/MediaDialogButtons";
import { useRef } from "react";

export default function MediaViewer({
    media
}: {
    media: string[];
}) {

    const [index, setIndex] = useState(0);
    const [zoom, setZoom] = useState(1);
    const touchStart = useRef<number | null>(null);

    const {
        isOpen,
        open,
        close,
    } = useDisclosure(false);

    const next = () => {
        setIndex(prev =>
            prev === media.length - 1 ? 0 : prev + 1
        );
        setZoom(1);
    };

    const previous = () => {
        setIndex(prev =>
            prev === 0 ? media.length - 1 : prev - 1
        );
        setZoom(1);
    };

    useEffect(() => {
        const key = (e: KeyboardEvent) => {
            if (!open) return;
            if (e.key === "ArrowRight")
                next();
            if (e.key === "ArrowLeft")
                previous();
            if (e.key === "Escape")
                close();
        };

        window.addEventListener(
            "keydown",
            key
        );

        return () =>
            window.removeEventListener(
                "keydown",
                key
            );

    }, [open]);

    const handleTouchStart = (
        e: React.TouchEvent
    ) => {
        touchStart.current = e.touches[0].clientX;
    };


    const handleTouchEnd = (
        e: React.TouchEvent
    ) => {
        if (touchStart.current === null)
            return;
        const touchEnd = e.changedTouches[0].clientX;
        const distance =
            touchStart.current - touchEnd;
        const minSwipe = 50;
        if (distance > minSwipe) {
            next();
        }
        if (distance < -minSwipe) {
            previous();
        }
        touchStart.current = null;
    };

    return (
        <>
            {/* normal viewer */}
            <Box
                sx={{
                    height: 420,
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative"
                }}
            >
                <MediaGallery
                    isOpen={isOpen}
                    media={media}
                    index={index}
                    setIndex={setIndex}
                    zoom={zoom}
                    setZoom={setZoom}
                    open={open}
                    previous={previous}
                    next={next}
                    handleTouchStart={handleTouchStart}
                    handleTouchEnd={handleTouchEnd}
                />
            </Box>

            {/* fullscreen */}
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
                    media={media}
                    isOpen={isOpen}
                    index={index}
                    setIndex={setIndex}
                    zoom={zoom}
                    setZoom={setZoom}
                    open={open}
                    previous={previous}
                    next={next}
                    handleTouchStart={handleTouchStart}
                    handleTouchEnd={handleTouchEnd}
                />
            </Dialog>
        </>
    );
}