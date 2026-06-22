import { Box } from "@mui/material";

export default function MediaCounter({
    index,
    length,
}: {
    index: number,
    length: number,
}) {
    return (
        <Box
            sx={{
                position: "absolute",
                top: 15,
                left: 20,
                zIndex: 3,
                color: "white",
                background: "rgba(0,0,0,.5)",
                px: 2,
                py: .5,
                borderRadius: 2
            }}
        >
            {index + 1} / {length}
        </Box>
    )
}
