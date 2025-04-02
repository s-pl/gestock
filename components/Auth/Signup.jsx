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
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('Las contraseñas no coinciden');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      navigate('/');
    } catch (error) {
      setError('Error al crear la cuenta: ' + error.message);
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
          Crear cuenta
        </Typography>
        <Typography level="body-sm" sx={{ mb: 3 }}>
          Regístrate para acceder a todas las funcionalidades
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
          <FormControl className="form-control">
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <FormControl className="form-control">
            <FormLabel>Confirmar contraseña</FormLabel>
            <Input
              type="password"
              placeholder="********"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
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
            Registrarse
          </Button>
          

          
          <GoogleButton
            onClick={handleGoogleLogin}
            style={{ marginBottom: '10px', width: '100%' }}
          />
          <LoginWithGithubButton onClick={handleGithubLogin}/>
        </form>

        <Divider sx={{ my: 2 }}>
          <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>
            o
          </Typography>
        </Divider>

        <Typography level="body-sm" sx={{ textAlign: 'center' }}>
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Iniciar sesión
          </Link>
        </Typography>
      </Sheet>
    </Box>
  );
}

export default Signup;