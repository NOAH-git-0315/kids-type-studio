import { Box, Typography, Paper } from '@mui/material';

type TextDisplayProps = {
  currentText: string;
  keyName: string;
  charIndex:number;
};

export default function TextDisplay({ currentText, keyName,charIndex }: TextDisplayProps) {
  const highlighted = (() => {

    return (
      <>
        {currentText.slice(0, charIndex)}
        <Box
          component="span"
          sx={{ backgroundColor: '#FFD54F', fontWeight: 'bold' }}
        >
          {currentText.slice(charIndex, charIndex + keyName.length)}
        </Box>
        {currentText.slice(charIndex + keyName.length)}
      </>
    );
  })();

  return (
    <Box>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        gutterBottom
      >
        {keyName}
      </Typography>
<Paper
  elevation={1}
  sx={{
    width: "900px",
    height: '250px',
    p: 2,
    fontSize: '120px',
    lineHeight: 1.2,
    borderRadius: 1,
    border: '1px solid #ccc',
    bgcolor: "#FFFFFF",
    overflowY: 'auto',
    whiteSpace: 'pre-wrap',
    fontFamily: `'Roboto Mono', monospace`,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    letterSpacing: '0.05em',
    fontWeight: 'bold',
    transform: 'scaleX(1.3)',
    transformOrigin: 'JetBrains Mono',
  }}
>
  {highlighted}
</Paper>
    </Box>
  );
}
