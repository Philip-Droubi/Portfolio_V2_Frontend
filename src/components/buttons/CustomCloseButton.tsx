import { IconButton, type SxProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const CustomCloseButton = ({
  handleClose,
  sx,
  className = "",
  size = "small",
  color = "error",
}: {
  handleClose: () => void;
  sx?: SxProps;
  className?: string;
  size?: "small" | "medium" | "large";
  color?:
  | "inherit"
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";
}) => {
  return (
    <div className={className}>
      <IconButton
        size={size}
        color={color}
        sx={{ backgroundColor: "#974e4e16", ...sx }}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};
