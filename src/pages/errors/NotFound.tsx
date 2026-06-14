import {
    Box,
    Typography,
    Button,
    Stack,
    useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function NotFound() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const messages = [
        "Oops! The page escaped.",
        "404: Page went on vacation.",
        "You found the internet's secret basement.",
        "This page is currently hiding.",
        "The developer swears this existed yesterday.",
        "Looks like you took a wrong turn at the router.",
        "Scanning the galaxy for your page...",
        "Houston, we have a missing page.",
    ];

    const [randomMessage] = useState(
        () => messages[Math.floor(Math.random() * messages.length)]
    );

    const [lostPageClicks, setLostPageClicks] = useState(0);

    // Mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Glow follows cursor
    const glowX = useTransform(x, (v) => v - 750);
    const glowY = useTransform(y, (v) => v - 350);

    // 404 rotates toward cursor
    const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);
    const rotateX = useTransform(y, [0, window.innerHeight], [10, -10]);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, [x, y]);

    const floatingObjects = ["🚀", "🛸", "👾", "🌍", "🛰️"];

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                px: 2,
                background: isDark
                    ? "#050505"
                    : "linear-gradient(180deg, #fafafa, #eaeaea)",
            }}
        >
            {/* Grid Background */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundSize: "50px 50px",
                    opacity: 0.08,
                    backgroundImage: isDark
                        ? "linear-gradient(#fff1 1px, transparent 1px), linear-gradient(90deg, #fff1 1px, transparent 1px)"
                        : "linear-gradient(#0001 1px, transparent 1px), linear-gradient(90deg, #0001 1px, transparent 1px)",
                }}
            />

            {/* Floating Objects */}
            {floatingObjects.map((item, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -25, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        position: "absolute",
                        left: `${10 + i * 19}%`,
                        top: `${15 + (i % 2) * 50}%`,
                        fontSize: "2rem",
                        opacity: 0.25,
                        pointerEvents: "none",
                    }}
                >
                    {item}
                </motion.div>
            ))}

            {/* Cursor Glow */}
            <motion.div
                style={{
                    position: "absolute",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: isDark
                        ? "rgba(0, 255, 255, 0.32)"
                        : "rgba(255, 0, 0, 0.21)",
                    filter: "blur(80px)",
                    x: glowX,
                    y: glowY,
                    pointerEvents: "none",
                }}
            />

            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 500,
                }}
            >
                <Box
                    sx={{
                        p: 4,
                        textAlign: "center",
                        borderRadius: 4,
                        backdropFilter: "blur(12px)",
                        background: isDark
                            ? "rgba(255,255,255,0.04)"
                            : "rgba(255,255,255,0.7)",
                        border: "1px solid",
                        borderColor: isDark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(0,0,0,0.08)",
                        boxShadow: isDark
                            ? "0 0 30px rgba(0,255,255,0.15)"
                            : "0 10px 30px rgba(0,0,0,0.08)",
                    }}
                >
                    {/* Interactive 404 */}
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: {
                                    xs: "4rem",
                                    sm: "7rem",
                                },
                                fontWeight: 900,
                                lineHeight: 1,
                                cursor: "default",
                                textShadow: isDark
                                    ? "0 0 20px rgba(0,255,255,0.3)"
                                    : "0 0 12px rgba(0,0,0,0.15)",
                            }}
                        >
                            <span className="glitch-lite">
                                {lostPageClicks >= 5
                                    ? "FOUND?"
                                    : "404"}
                            </span>
                        </Typography>
                    </motion.div>

                    <Typography
                        variant="h6"
                        sx={{
                            mt: 2,
                            color: "text.secondary",
                        }}
                    >
                        {randomMessage}
                    </Typography>

                    {/* Mini Game */}
                    <Box sx={{ mt: 4 }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                        >
                            Catch the lost page
                        </Typography>

                        <motion.div
                            whileHover={{
                                scale: 1.3,
                                rotate: 10,
                            }}
                            whileTap={{
                                scale: 0.8,
                            }}
                            onClick={() =>
                                setLostPageClicks(
                                    (prev) => prev + 1
                                )
                            }
                            style={{
                                fontSize: "3rem",
                                cursor: "pointer",
                                display: "inline-block",
                                userSelect: "none",
                            }}
                        >
                            👾
                        </motion.div>

                        <Typography
                            variant="body2"
                            sx={{ mt: 1 }}
                        >
                            Progress: {lostPageClicks}/5
                        </Typography>

                        {lostPageClicks >= 5 && (
                            <Typography
                                sx={{
                                    mt: 2,
                                    color: "success.main",
                                    fontWeight: 700,
                                }}
                            >
                                🎉 You found it!...
                                Unfortunately it's still 404.
                            </Typography>
                        )}
                    </Box>

                    {/* Buttons */}
                    <Stack
                        direction={{
                            xs: "column",
                            sm: "row",
                        }}
                        spacing={2}
                        sx={{ mt: 4, display: "flex", justifyContent: "center" }}
                    >
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Button
                                variant="contained"
                                color="error"
                                size="large"
                                sx={{
                                    borderRadius: 2,
                                    px: 4,
                                    fontWeight: 700,
                                    textTransform: "none",
                                }}
                            >
                                Go Back Home
                            </Button>
                        </Link>

                    </Stack>

                </Box>
            </motion.div>

            <style>
                {`
                .glitch-lite {
                    position: relative;
                }

                .glitch-lite::after {
                    content: attr(data-text);
                    position: absolute;
                    left: 2px;
                    top: 0;
                    color: rgba(255,0,0,0.35);
                    animation: glitch-lite 1.5s infinite;
                }

                @keyframes glitch-lite {
                    0% { transform: translate(0,0); }
                    20% { transform: translate(-2px,1px); }
                    40% { transform: translate(2px,-1px); }
                    60% { transform: translate(-1px,2px); }
                    80% { transform: translate(1px,-2px); }
                    100% { transform: translate(0,0); }
                }
                `}
            </style>
        </Box>
    );
}