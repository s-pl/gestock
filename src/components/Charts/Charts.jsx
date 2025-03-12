import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Charts() {
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Estadísticas de Inventario',
      },
    },
  };


  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [
      {
        label: 'Productos Entrantes',
        data: [125, 98, 142, 110],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Productos Salientes',
        data: [95, 120, 88, 105],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Stock Disponible',
        data: [230, 208, 262, 267],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Productos en Alerta',
        data: [15, 12, 8, 10],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
    ],
  };

  return (
    <Box sx={{ 
      maxWidth: '1450px', 
      margin: '0 auto', 
      padding: 2 
    }}>
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid xs={12} md={5}>
          <Box sx={{ p: 2 }}>
            <Typography level="h4" sx={{ mb: 2 }}>
              Visualización de Datos en Tiempo Real
            </Typography>
            <Typography level="body-lg">
              Nuestro sistema de gestión de inventario proporciona análisis detallados y visualizaciones en tiempo real de todos tus datos.
            </Typography>
            <Typography level="body-md" sx={{ mt: 2 }}>
              Con tecnología avanzada de procesamiento de datos, podrás:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li">Monitorear tendencias de inventario</Typography>
              <Typography component="li">Analizar el rendimiento trimestral</Typography>
              <Typography component="li">Identificar patrones de consumo</Typography>
              <Typography component="li">Optimizar la gestión de stock basada en datos</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={7}>
          <div style={{ height: '400px', width: '100%'}}>
            <Bar options={options} data={data} />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Charts;