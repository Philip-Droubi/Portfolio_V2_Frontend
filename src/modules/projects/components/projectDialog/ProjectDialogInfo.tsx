import { Divider, Typography } from "@mui/material"
import type { ProjectType } from "../../types"
import { getDir, getDuration } from "@/utils/functions";
import InfoRow from "@/components/misc/InfoRow";
import { AccessTime, Code, DateRange, OpenInNew } from "@mui/icons-material";

export default function ProjectDialogInfo({
    project,
}: {
    project: ProjectType,
}) {
    const items = [
        {
            title: "Start",
            icon: <DateRange color="warning" />,
            content: project.start_date?.slice(0, 7), // "YYYY-MM"
        },
        {
            title: "End",
            icon: <DateRange color="warning" />,
            content: project.end_date ? project.end_date.slice(0, 7) : "Present",
        },
        {
            title: "Techs",
            icon: <Code color="warning" />,
            content: String(project.teches?.length ?? 0) + ' Used',
        },
        {
            title: "Duration",
            icon: <AccessTime color="warning" />,
            content: getDuration(project.start_date, project.end_date),
        }
    ];

    const buttonClassName = `text-center w-full
                        px-6 py-3
                        rounded-md
                        border border-transparent
                        font-medium
                        transition-all duration-300
                        bg-primary/60
                        hover:bg-primary/10
                        hover:border-primary
                        hover:text-primary`;

    return (
        <div dir={getDir()} className="border-2 rounded-xl border-primary px-4 py-2 w-full lg:w-2/7 min-w-60 h-fit">
            <Typography variant="h6" sx={{ color: "var(--color-secondary)" }}>
                Project Info
            </Typography>

            <Divider className="h-1" />

            <div className="space-y-2 my-2">
                {items.map(item =>
                    <InfoRow
                        key={item.title}
                        label={item.title}
                        value={item.content}
                        labelIcon={item.icon}
                        minWidth={100}
                        lableColor="textDisabled"
                    />
                )}
            </div>

            {
                (project.live_url || project.url)
                &&
                <>
                    <Divider />
                    <div className="my-4 flex flex-col gap-4">
                        {/* Live URL  */}
                        {
                            project.live_url &&
                            <a href={project.live_url} target="_blank" rel="noopener noreferrer"
                                className={buttonClassName}
                            >
                                <OpenInNew /> Live Website
                            </a>
                        }
                        {/* URL */}
                        {
                            project.url &&
                            <a href={project.url} target="_blank" rel="noopener noreferrer"
                                className={buttonClassName}
                            >
                                <OpenInNew /> Website
                            </a>
                        }

                    </div>
                </>
            }
        </div >
    )
}
