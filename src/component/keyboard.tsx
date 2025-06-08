import { Box } from "@mui/material"

type Props = {
  keyName: string;
}

export default function Keyboard({ keyName }: Props) {
  return (
    <Box
      component="img"
      src={`/kids-type-studio/keyboard/${keyName}.svg`}
      alt={`${keyName} key glowing`}
      sx={{
        width: 800,
        height: 296,
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: 2,
        boxShadow: 3,
        margin: 'auto',
        display: 'block',
      }}
    />
  );
}
