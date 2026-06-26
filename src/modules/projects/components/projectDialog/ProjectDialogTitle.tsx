import { CustomCloseButton } from "@/components/buttons/CustomCloseButton";
import { Chip, DialogTitle, Typography } from "@mui/material";
import type { ProjectType } from "../../types";
import { Apartment } from "@mui/icons-material";

export default function ProjectDialogTitle({
    project,
    close,
    lang,
}: {
    project: ProjectType,
    close: () => void,
    lang: string,
}) {
    return (
        <DialogTitle
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700
                }}
            >
                <div className="flex flex-wrap gap-2 mt-1 items-center">
                    {project[`name_${lang}`] ?? ""}
                    {
                        project.tags?.map((tag) => (
                            <Chip label={tag[`name_${lang}`]}
                                sx={{
                                    border: "1px solid",
                                    borderColor: "var(--color-secondary)",
                                    borderRadius: "8px"
                                }} />
                        ))
                    }
                    {
                        project.is_company &&
                        <Chip label={'company'}
                            icon={<Apartment className="text-orange-400!" />}
                            sx={{
                                color: "var(--color-orange-400)",
                                border: "1px solid",
                                borderColor: "var(--color-orange-400)",
                                borderRadius: "8px"
                            }} />
                    }
                </div>
            </Typography>

            <CustomCloseButton handleClose={close} />
        </DialogTitle>
    )
}
