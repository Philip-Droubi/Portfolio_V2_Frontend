import { Stack, Typography } from '@mui/material';

export default function InfoRow(
    {
        label,
        value,
        minWidth = 110,
        labelIcon,
        lableColor = 'text.secondary',
        valueColor = 'text.primary',
    }: {
        label: string;
        value: string;
        minWidth?: number;
        labelIcon?: React.ReactNode,
        lableColor?: string,
        valueColor?: string
    }
) {
    return (
        <Stack direction="row" spacing={1}>
            <Typography variant="subtitle1" sx={{ fontWeight: 400, minWidth: minWidth }} color={lableColor}>
                {labelIcon} {label}:
            </Typography>
            <Typography variant="subtitle1" color={valueColor}>
                {value}
            </Typography>
        </Stack>
    );
}
