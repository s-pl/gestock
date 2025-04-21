import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';

function ApiKeyDisplay({ currentUser }) {
  const [showUID, setShowUID] = useState(false);

  return (
    <Box sx={{ mt: 3 }}>
      {!showUID && (
        <Button
          onClick={() => setShowUID(true)} 
          size="md"
          variant="outlined"
          sx={{ mt: 1 }}
        >
          Mostrar Api Key
        </Button>
      )}
      {showUID && (
        <Typography level="body1" sx={{ mt: 2 }}>
          {currentUser?.uid}
        </Typography>
      )}
    </Box>
  );
}

export default ApiKeyDisplay;