import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;

    vx: number;
    vy: number;

    impulseX: number;
    impulseY: number;
}

interface Shockwave {
    x: number;
    y: number;
    radius: number;
    life: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        let mouseX = -9999;
        let mouseY = -9999;

        const particles: Particle[] = [];
        const shockwaves: Shockwave[] = [];

        const PARTICLE_COUNT = getParticleCount();
        const LINK_DISTANCE = 150;
        const CURSOR_RADIUS = 150;
        const EXPLOSION_FORCE = 4;
        const SHOCKWAVE_EFFECT = 250;
        const PARTICLE_RUN_FROM_CURSOR_FORCE = 2;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,

                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,

                impulseX: 0,
                impulseY: 0,
            });
        }

        const spawnExplosion = (
            x: number,
            y: number
        ) => {
            shockwaves.push({
                x,
                y,
                radius: 0,
                life: 1,
            });

            particles.forEach((particle) => {
                const dx = particle.x - x;
                const dy = particle.y - y;

                const distance = Math.sqrt(
                    dx * dx + dy * dy
                );

                if (
                    distance < SHOCKWAVE_EFFECT &&
                    distance > 0
                ) {
                    const force =
                        (SHOCKWAVE_EFFECT - distance) / SHOCKWAVE_EFFECT;

                    particle.impulseX +=
                        (dx / distance) *
                        force * EXPLOSION_FORCE;

                    particle.impulseY +=
                        (dy / distance) *
                        force * EXPLOSION_FORCE;
                }
            });
        };

        const handleClick = (
            e: MouseEvent
        ) => {
            const target =
                e.target as HTMLElement;

            if (!target) return;

            const cursor =
                window.getComputedStyle(
                    target
                ).cursor;

            const isInteractive =
                cursor === "pointer" ||
                target.closest("button") ||
                target.closest("a") ||
                target.closest(
                    "[role='button']"
                );

            if (isInteractive) return;

            spawnExplosion(
                e.clientX,
                e.clientY
            );
        };

        const handleMouseMove = (
            e: MouseEvent
        ) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseX = -9999;
            mouseY = -9999;
        };

        window.addEventListener(
            "resize",
            resize
        );

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        window.addEventListener(
            "mouseleave",
            handleMouseLeave
        );

        window.addEventListener(
            "click",
            handleClick
        );

        let animationFrame: number;

        const render = () => {
            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            particles.forEach((particle) => {
                particle.impulseY *= 0.95;
                particle.impulseX *= 0.95;

                particle.x +=
                    particle.vx +
                    particle.impulseX;

                particle.y +=
                    particle.vy +
                    particle.impulseY;

                if (particle.x < -30)
                    particle.x =
                        canvas.width + 30;

                if (
                    particle.x >
                    canvas.width + 30
                )
                    particle.x = -30;

                if (particle.y < -30)
                    particle.y =
                        canvas.height + 30;

                if (
                    particle.y >
                    canvas.height + 30
                )
                    particle.y = -30;

                const dx =
                    particle.x - mouseX;

                const dy =
                    particle.y - mouseY;

                const distance = Math.sqrt(
                    dx * dx + dy * dy
                );

                if (
                    distance <
                    CURSOR_RADIUS &&
                    distance > 0
                ) {
                    const force =
                        (CURSOR_RADIUS -
                            distance) /
                        CURSOR_RADIUS;

                    particle.x +=
                        (dx / distance) *
                        force *
                        PARTICLE_RUN_FROM_CURSOR_FORCE;

                    particle.y +=
                        (dy / distance) *
                        force *
                        PARTICLE_RUN_FROM_CURSOR_FORCE;
                }
            });

            // Connections
            for (
                let i = 0;
                i < particles.length;
                i++
            ) {
                for (
                    let j = i + 1;
                    j < particles.length;
                    j++
                ) {
                    const p1 =
                        particles[i];

                    const p2 =
                        particles[j];

                    const dx =
                        p1.x - p2.x;

                    const dy =
                        p1.y - p2.y;

                    const distance =
                        Math.sqrt(
                            dx * dx +
                            dy * dy
                        );

                    if (
                        distance <
                        LINK_DISTANCE
                    ) {
                        const opacity =
                            (1 -
                                distance /
                                LINK_DISTANCE) *
                            0.15;

                        ctx.beginPath();

                        ctx.moveTo(
                            p1.x,
                            p1.y
                        );

                        ctx.lineTo(
                            p2.x,
                            p2.y
                        );

                        ctx.strokeStyle =
                            distance < 80
                                ? `rgba(34,211,238,${opacity *
                                1.6
                                })`
                                : `rgba(99,102,241,${opacity})`;

                        ctx.lineWidth = 1;

                        ctx.stroke();
                    }
                }
            }

            // Shockwaves
            for (
                let i =
                    shockwaves.length -
                    1;
                i >= 0;
                i--
            ) {
                const s =
                    shockwaves[i];

                s.radius += 4;
                s.life -= 0.02;

                if (s.life <= 0) {
                    shockwaves.splice(
                        i,
                        1
                    );
                    continue;
                }

                ctx.beginPath();

                ctx.arc(
                    s.x,
                    s.y,
                    s.radius,
                    0,
                    Math.PI * 2
                );

                ctx.strokeStyle = `rgba(
                    34,
                    211,
                    238,
                    ${s.life * 0.25}
                )`;

                ctx.lineWidth = 2;

                ctx.stroke();
            }

            // Particles
            particles.forEach((particle) => {
                const speed =
                    Math.sqrt(
                        particle.impulseX *
                        particle.impulseX +
                        particle.impulseY *
                        particle.impulseY
                    );

                // Motion trail
                if (speed > 0.5) {
                    ctx.beginPath();

                    ctx.moveTo(
                        particle.x,
                        particle.y
                    );

                    ctx.lineTo(
                        particle.x -
                        particle
                            .impulseX *
                        10,
                        particle.y -
                        particle
                            .impulseY *
                        10
                    );

                    ctx.strokeStyle = `rgba(
                        34,
                        211,
                        238,
                        ${Math.min(
                        speed / 10,
                        0.45
                    )}
                    )`;

                    ctx.lineWidth = 2;

                    ctx.stroke();
                }

                const dx =
                    particle.x - mouseX;

                const dy =
                    particle.y - mouseY;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );

                const glow =
                    distance <
                        CURSOR_RADIUS
                        ? 1 -
                        distance /
                        CURSOR_RADIUS
                        : 0;

                const size =
                    1.6 + glow * 3;

                if (glow > 0) {
                    ctx.beginPath();

                    ctx.arc(
                        particle.x,
                        particle.y,
                        size * 5,
                        0,
                        Math.PI * 2
                    );

                    ctx.fillStyle = `rgba(
                        34,
                        211,
                        238,
                        ${glow * 0.12}
                    )`;

                    ctx.fill();
                }

                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    size,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    glow > 0
                        ? "#22D3EE"
                        : "rgba(255,255,255,0.35)";

                ctx.fill();
            });

            animationFrame =
                requestAnimationFrame(
                    render
                );
        };

        render();

        return () => {
            cancelAnimationFrame(
                animationFrame
            );

            window.removeEventListener(
                "resize",
                resize
            );

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );

            window.removeEventListener(
                "click",
                handleClick
            );
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="
                fixed
                inset-0
                z-1
                pointer-events-none
            "
        />
    );
}

const getParticleCount = () => {
    if (window.innerWidth < 640) return 50;      // mobile
    if (window.innerWidth < 1024) return 100;    // tablet
    return 154;                                  // desktop
};