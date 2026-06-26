import { motion, useMotionValue, useSpring } from "framer-motion";
import Card from "@mui/material/Card";
import type { ProjectType } from "../../types";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardBody from "./ProjectCardBody";
import { useDisclosure } from "@/hooks/useDisclosure";
import ProjectDialog from "../projectDialog/ProjectDialog";

export default function ProjectCard({
    project,
    lang,
}: {
    project: ProjectType;
    lang: string;
}) {
    const {
        isOpen,
        open,
        close,
    } = useDisclosure(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(mouseY, {
        stiffness: 400,
        damping: 25,
    });

    const rotateY = useSpring(mouseX, {
        stiffness: 400,
        damping: 25,
    });

    const name = project[`name_${lang}` as keyof ProjectType] as string;

    return (
        <>
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformPerspective: 400,
                }}
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    mouseX.set(((x / rect.width) - .5) * 6);
                    mouseY.set(((y / rect.height) - .5) * -6);
                }}
                onMouseLeave={() => {
                    mouseX.set(0);
                    mouseY.set(0);
                }}
            >
                <Card
                    onClick={open}
                    elevation={0}
                    sx={{
                        background: "#162449",
                        borderRadius: "24px",
                    }}

                    className="
                        cursor-pointer
                        group
                        overflow-hidden
                        bg-blue-950
                        border
                        border-white/10
                        transition-all
                        duration-300
                        hover:border-secondary/60
                        hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">

                    {/* IMAGE */}
                    <ProjectCardImage project={project} name={name} />

                    {/* CONTENT */}
                    <ProjectCardBody project={project} lang={lang} />
                </Card>
            </motion.div >

            <ProjectDialog
                open={isOpen}
                close={close}
                project={project}
                lang={lang}
            />
        </>
    );
}