import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

export default function MediaViewerThumbnails({
    media,
    index,
    selectImage
}: {
    media: string[],
    index: number,
    selectImage: (i: number) => void
}) {
    const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        thumbnailRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }, [index]);

    return (
        <Box
            sx={{
                background: "#0000003d",
                py: 1,
                px: 2,
                borderRadius: "8px",
                position: "absolute",
                bottom: 4,
                display: "flex",
                gap: 1,
                overflowX: "auto",
                maxWidth: "90%",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }}
        >
            {media.map((img, i) => (
                <Box
                    key={img}
                    component="img"
                    ref={(el: HTMLImageElement | null) => {
                        thumbnailRefs.current[i] = el;
                    }}
                    src={img}
                    onClick={() => selectImage(i)}
                    sx={{
                        width: 70,
                        height: 50,
                        objectFit: "cover",
                        borderRadius: 1,
                        cursor: "pointer",
                        flexShrink: 0,
                        opacity: i === index ? 1 : 0.5,
                        transition: "all .1s ease-in-out",
                        border: i === index
                            ? "2px solid white"
                            : "none",
                        ":hover": {
                            filter: "brightness(1.1)",
                            transform: "scale(1.05)"
                        }
                    }}
                />
            ))}
        </Box>
    );
}