import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
// eslint-disable-next-line import/no-unresolved
// import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import { Typography } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other}>
      {children}
      {onClose ? (
        <IconButton
          disableRipple
          aria-label="close"
          onClick={onClose}
          sx={{
            color: '#fff',
            position: 'absolute',
            right: 8,
            top: 8,
            // "&:hover": {
            //   color: "#FFB6C1"
            // }
          }}
        >
          x{/* <HighlightOffIcon fontSize="large" color="#000000" /> */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs({
  divider = true,
  title = '',
  open,
  setOpen,
  children,
  headerColor = '#25D366',
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{ backgroundColor: headerColor, color: 'white' }}
        >
          <Typography fontSize="1.35rem" color={'white'} fontWeight={600}>
            {title}
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers={divider}>{children}</DialogContent>
      </BootstrapDialog>
    </div>
  );
}
