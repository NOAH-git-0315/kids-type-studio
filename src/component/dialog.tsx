import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

const ButtonSX = {
  position: 'fixed',  
  bottom: '20px',
  right: '20px',     
  zIndex: 1500,
  background:"white",
  color:"black"
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: '1500px',
    maxWidth: 'none',
    height: 'auto',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Dialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} sx={ButtonSX}>
        ローマ字表を開く
      </Button>
      <BootstrapDialog
          open={open}
          onClose={handleClose}
          maxWidth={false}
          fullWidth={false} 
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          ローマ字表
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
            <Box
              component="img"
              src="/kids-type-studio/dialog.png"
              alt="dialog"
              sx={{ width: 1500, height: 600, borderRadius: 2 }}
            />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            とじる
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}