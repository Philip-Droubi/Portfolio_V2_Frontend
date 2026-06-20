import { CustomCloseButton } from '@/components/buttons/CustomCloseButton'
import { ZoomIn, ZoomOut } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import type { Dispatch, SetStateAction } from 'react';

export default function MediaDialogButtons({
    close,
    setZoom,
}: {
    close: () => void;
    setZoom: Dispatch<SetStateAction<number>>;
}) {
    return (
        <>
            <CustomCloseButton handleClose={close} sx={{
                position: "absolute",
                right: 20,
                top: 20,
                zIndex: 5,
            }} />

            <Box
                sx={{
                    position: "absolute",
                    right: 80,
                    top: 20,
                    zIndex: 5
                }}
            >
                <IconButton
                    onClick={() =>
                        setZoom(z => Math.min(z + 0.25, 3))
                    }
                    sx={{ color: "white" }}
                >
                    <ZoomIn />
                </IconButton>


                <IconButton
                    onClick={() =>
                        setZoom(z => Math.max(z - 0.25, 1))
                    }
                    sx={{ color: "white" }}
                >
                    <ZoomOut />
                </IconButton>

            </Box >
        </>
    )
}
