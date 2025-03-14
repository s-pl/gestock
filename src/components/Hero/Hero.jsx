import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Card from "../Card/Card";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Hero() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleGetStarted = () => {
    if (currentUser) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography level="h2" sx={{ mb: 2 }}>
        Bienvenido a Gestock
      </Typography>
      <Typography sx={{ mb: 4 }}>
        La plataforma online que te permite gestionar tus inventarios de manera fácil y rápida.
      </Typography>
      <Button size="lg" sx={{ mb: 4 }} onClick={handleGetStarted}>Empezar ahora</Button>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center'
      }}>
        <Card
          title="Gestión de Stock"
          description="Controla en tiempo real la cantidad de productos disponibles, con alertas automáticas por bajo inventario."
        />
        <Card
          title="Historial de Movimientos"
          description="Consulta todos los ingresos y salidas de productos para llevar un control preciso del flujo de almacén."
        />
        <Card
          title="Gestión de Categorías"
          description="Organiza tus productos por categorías personalizadas para una navegación más sencilla y eficiente."
        />
        <Card
          title="Panel de Estadísticas"
          description="Visualiza informes y gráficas del rendimiento del inventario, ventas y reposiciones."
        />
      </Box>
    </Box>
  );
}

export default Hero;