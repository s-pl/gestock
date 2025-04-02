import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
import GoogleButton from 'react-google-button';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import LoginWithGithubButton from '../GithubButton/LoginWithGithubButton';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  
  async function handleGoogleLogin() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      setError('');
      setLoading(true);
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
async function handleGithubLogin() {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    try {
      setError('');
      setLoading(true);
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      setError(error.message);
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
          Iniciar sesión
        </Typography>
        <Typography level="body-sm" sx={{ mb: 3 }}>
          Ingresa tus credenciales para acceder a tu cuenta
        </Typography>

        {error && (
          <Alert color="danger" sx={{ mb: 2 }}>
            {error}
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
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Iniciar sesión
          </Button>

         
          <GoogleButton
            onClick={handleGoogleLogin}
            style={{ marginBottom: '10px', width: '100%' }}
          />
          <LoginWithGithubButton onClick={handleGithubLogin}/>
        </form>

        <Typography level="body-sm" sx={{ mb: 2, textAlign: 'center' }}>
          <Link to="/reset-password" style={{ textDecoration: 'none' }}>
            ¿Olvidaste tu contraseña?
          </Link>
        </Typography>

        <Divider sx={{ my: 2 }}>
          <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>
            o
          </Typography>
        </Divider>

        <Typography level="body-sm" sx={{ textAlign: 'center' }}>
          ¿No tienes una cuenta?{' '}
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            Regístrate
          </Link>
        </Typography>
      </Sheet>
    </Box>
  );
}

export default Login;
