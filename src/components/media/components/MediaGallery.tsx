import { Box, IconButton } from "@mui/material";
import MediaCounter from "./MediaCounter";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import MediaViewerThumbnails from "./MediaViewerThumbnails";

export default function MediaGallery({
    isOpen,
    media,
    index,
    setIndex,
    zoom,
    setZoom,
    open,
    previous,
    next,
    handleTouchStart,
    handleTouchEnd,
}: {
    isOpen: boolean,
    media: string[],
    index: number,
    setIndex: (i: number) => void,
    zoom: number,
    setZoom: (z: number) => void,
    open: () => void,
    previous: () => void,
    next: () => void,
    handleTouchStart: (e: React.TouchEvent) => void,
    handleTouchEnd: (e: React.TouchEvent) => void,
}) {
    const selectImage = (i: number) => {
        setIndex(i);
        setZoom(1);
    };

    return (
        <Box
            sx={{
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >

            {/* counter */}
            <MediaCounter index={index} length={media.length} />

            {/* image */}
            <Box
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                sx={{
                    touchAction: "pan-y",
                    maxWidth: "90%",
                }}
            >
                <Box
                    component="img"
                    src={media[index]}
                    onClick={open}
                    sx={{
                        // maxHeight: "100%",
                        objectFit: "contain",
                        cursor: isOpen ? "auto" : "pointer",
                        transform: `scale(${zoom})`,
                        transition: "transform .25s",
                    }}
                />
            </Box>

            {/* arrows */}
            {media.length > 1 && (
                <>
                    <IconButton
                        onClick={previous}
                        sx={{
                            ":hover": { bgcolor: "rgba(0,0,0,.7)" },
                            position: "absolute",
                            left: 20,
                            top: "50%",
                            color: "white",
                            bgcolor: "rgba(0,0,0,.4)"
                        }}
                    >
                        <ArrowBackIos />
                    </IconButton>


                    <IconButton
                        onClick={next}
                        sx={{
                            ":hover": { bgcolor: "rgba(0,0,0,.7)" },
                            position: "absolute",
                            right: 20,
                            top: "50%",
                            color: "white",
                            bgcolor: "rgba(0,0,0,.4)"
                        }}
                    >
                        <ArrowForwardIos />
                    </IconButton>
                </>
            )}

            {/* thumbnails */}
            <MediaViewerThumbnails media={media} index={index} selectImage={selectImage} />
        </Box>
    )
}
