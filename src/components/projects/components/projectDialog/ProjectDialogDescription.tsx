import { Box, Typography } from "@mui/material";
import type { ProjectType } from "../../types";
import DOMPurify from "dompurify";
import HtmlElementViewer from "@/components/misc/HtmlElementViewer";

export default function ProjectDialogDescription({
    project,
    lang,
}: {
    project: ProjectType;
    lang: string;
}) {

    const sections = [
        {
            title: "Summary",
            content: project[`tiny_description_${lang}`],
        },
        {
            title: "About The Project",
            content: project[`description_${lang}`],
        }
    ];

    return (
        <Box sx={{ flex: "1 1 600px", minWidth: 0 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >

                {sections.map((section) => (
                    <Box
                        key={section.title}
                        sx={{
                        }}
                    >

                        <Typography
                            variant="h6"
                            sx={{ color: "var(--color-secondary)", }}
                        >
                            {section.title}
                        </Typography>

                        <Typography
                            sx={{
                                mt: 1,
                                p: 2,
                                lineHeight: 1.8,
                                whiteSpace: "pre-line",
                                border: "1px dashed var(--color-description)",
                                borderRadius: 3,
                            }}
                        >
                            <HtmlElementViewer html={DOMPurify.sanitize(section.content ?? "")} />
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}