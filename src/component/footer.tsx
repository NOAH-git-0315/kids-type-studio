import { Box, Typography } from "@mui/material";
import LeftDrawer from "./LeftDrawer";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        bgcolor: '		#A5D6A7',
        borderTop: '1px solid #eee',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        height: '40px',
      }}
    >
      <LeftDrawer/>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Kids Type Studio
      </Typography>
    </Box>
  );
}
