import { Dialog, DialogContent } from "@mui/material";
import type { ProjectType } from "../../types";
import { getDir } from "@/utils/functions";
import MediaViewer from "@/components/mediaViewer/MediaViewer";
import ProjectDialogTechs from "./ProjectDialogTechs";
import ProjectDialogTitle from "./ProjectDialogTitle";
import ProjectDialogDescription from "./ProjectDialogDescription";
import ProjectDialogInfo from "./ProjectDialogInfo";

export default function ProjectDialog({
    open,
    close,
    project,
    lang,
}: {
    open: boolean;
    close: () => void;
    project: ProjectType;
    lang: string;
}) {
    const media = [
        project.main_image,
        ...(project.media?.map(item => item.media_url) ?? [])
    ];

    return (
        <Dialog
            open={open}
            onClose={close}
            maxWidth="lg"
            fullWidth
            dir={getDir()}
            slotProps={{
                paper: {
                    sx: {
                        background: "#171c1e",
                        borderRadius: "24px",
                        color: "#fff",

                        width: {
                            xs: "95%",   // mobile
                            sm: "90%",   // small screens
                            md: "85%",   // medium screens
                            lg: "80%",   // large screens
                        },
                    },
                },
            }}
        >

            {/* Dialog Title */}
            <ProjectDialogTitle
                project={project}
                close={close}
                lang={lang}
            />

            <DialogContent
                dividers
                sx={{
                    px: { xs: "12px", sm: "24px" }
                }}
            >
                {/* MEDIA */}
                <MediaViewer media={media} />

                <div dir={getDir()} className="flex flex-wrap mt-8 justify-around gap-8 lg:gap-0">
                    <ProjectDialogDescription project={project} lang={lang} />
                    <ProjectDialogInfo project={project} />
                </div>

                {/* TECH */}
                <ProjectDialogTechs techs={project.teches ?? []} lang={lang} />
            </DialogContent>
        </Dialog>
    );
}