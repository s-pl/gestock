import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';

function CustomModal({ open, onClose, title, children }) {
  return (
    <Modal
      aria-labelledby={`modal-title-${title}`}
      open={open}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          width: '100%',
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg',
          maxHeight: '80vh',
          overflow: 'auto'
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id={`modal-title-${title}`}
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={2}
        >
          {title}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {children}
        </Box>
      </Sheet>
    </Modal>
  );
}

export default CustomModal;