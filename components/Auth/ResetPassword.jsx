import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Alert from '@mui/joy/Alert';
import Divider from '@mui/joy/Divider';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Revisa tu correo electrónico para seguir las instrucciones');
    } catch (error) {
      setError('Error al restablecer la contraseña: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        py: 4,
      }}
    >
      <Sheet
        sx={{
          width: 400,
          mx: 'auto',
          p: 3,
          borderRadius: 'md',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <Typography level="h4" component="h1" sx={{ mb: 2 }}>
          Restablecer contraseña
        </Typography>
        <Typography level="body-sm" sx={{ mb: 3 }}>
          Ingresa tu correo electrónico para recibir instrucciones
        </Typography>

        {error && (
          <Alert color="danger" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {message && (
          <Alert color="success" sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <FormControl sx={{ mb: 2 }}>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            loading={loading}
            disabled={loading}
            sx={{ mt: 1, mb: 2 }}
          >
            Restablecer contraseña
          </Button>
        </form>

        <Divider sx={{ my: 2 }}>
          <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>
            o
          </Typography>
        </Divider>

        <Typography level="body-sm" sx={{ textAlign: 'center' }}>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Volver a iniciar sesión
          </Link>
        </Typography>
      </Sheet>
    </Box>
  );
}

export default ResetPassword;