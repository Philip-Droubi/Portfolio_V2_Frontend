/**
 * @deprecated This system was replaced
 * Use: CursorProvider (src/context/CursorProvider.tsx)
 */

import { useEffect, useState } from "react";

const SYMBOLS = [
    "0",
    "1",
    "{}",
    "|",
    "<>",
    "█"
];

const GREENS = [
    "#00ff88",
    "#22c55e",
    "#4ade80",
    "#86efac",
];

interface Particle {
    id: number;
    x: number;
    y: number;
    value: string;
    color: string;
    rotation: number;
    size: number;
    dx: number;
    dy: number;
}

export default function BinaryCursorTrail() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        let id = 0;
        let lastSpawn = 0;
        const density = 120;

        const handleMove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (!target) return;

            const cursor = window.getComputedStyle(target).cursor;

            // Don't spawn on interactive elements
            if (
                cursor === "pointer" ||
                cursor === "text" ||
                cursor === "grab" ||
                cursor === "grabbing" ||
                cursor === "not-allowed"
            ) {
                return;
            }

            const now = Date.now();

            if (now - lastSpawn < density) return;
            lastSpawn = now;

            const particle: Particle = {
                id: id++,

                x: e.clientX,
                y: e.clientY,

                value:
                    SYMBOLS[
                    Math.floor(Math.random() * SYMBOLS.length)
                    ],

                color:
                    GREENS[
                    Math.floor(Math.random() * GREENS.length)
                    ],

                rotation: Math.random() * 80 - 40,

                size: 12 + Math.random() * 8,

                dx: Math.random() * 40 - 20,

                dy: 30 + Math.random() * 40,
            };

            setParticles((prev) => [...prev.slice(-40), particle]);

            setTimeout(() => {
                setParticles((prev) =>
                    prev.filter((p) => p.id !== particle.id)
                );
            }, 1400);
        };

        window.addEventListener("mousemove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-9999 overflow-hidden">
            {particles.map((particle) => (
                <span
                    key={particle.id}
                    className="code-particle fixed font-mono font-semibold"
                    style={{
                        left: particle.x,
                        top: particle.y,

                        color: particle.color,

                        fontSize: particle.size,

                        ["--dx" as string]: `${particle.dx}px`,
                        ["--dy" as string]: `${particle.dy}px`,
                        ["--rotate" as string]: `${particle.rotation}deg`,
                    }}
                >
                    {particle.value}
                </span>
            ))}
        </div>
    );
}