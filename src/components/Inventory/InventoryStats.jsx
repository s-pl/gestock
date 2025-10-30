import React, { useMemo } from 'react';
import { useInventory } from '../../contexts/InventoryContext';
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
import Sheet from '@mui/joy/Sheet';
import Alert from '@mui/joy/Alert';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function InventoryStats() {
  const { products, loading, error } = useInventory();

  // Memoize expensive calculations
  const { categoryData, priceData } = useMemo(() => {
    const categoryMap = {};
    const categoryValueMap = {};

    products.forEach(product => {
      const category = product.category || 'Sin categoría';
      categoryMap[category] = (categoryMap[category] || 0) + 1;
      
      const value = product.price * product.quantity;
      categoryValueMap[category] = (categoryValueMap[category] || 0) + value;
    });

    const categoryLabels = Object.keys(categoryMap);
    const categoryCounts = categoryLabels.map(label => categoryMap[label]);
    const valueLabels = Object.keys(categoryValueMap);
    const valueData = valueLabels.map(label => categoryValueMap[label]);

    return {
      categoryData: {
        labels: categoryLabels,
        counts: categoryCounts
      },
      priceData: {
        labels: valueLabels,
        values: valueData
      }
    };
  }, [products]);

  const categoryChartData = {
    labels: categoryData.labels,
    datasets: [
      {
        label: 'Cantidad de Productos',
        data: categoryData.counts,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const valueChartData = {
    labels: priceData.labels,
    datasets: [
      {
        label: 'Valor del Inventario',
        data: priceData.values,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
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
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: 2 }}>
      <Typography level="h2" sx={{ mb: 3 }}>
        Estadísticas de Inventario
      </Typography>

      {error && (
        <Alert color="danger" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Typography>Cargando estadísticas...</Typography>
      ) : categoryData.labels.length === 0 ? (
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: 'md',
            p: 4,
            textAlign: 'center',
            backgroundColor: 'background.level1'
          }}
        >
          <Typography level="h4" sx={{ mb: 2 }}>
            No hay datos disponibles
          </Typography>
          <Typography>
            Añade productos a tu inventario para ver estadísticas.
          </Typography>
        </Sheet>
      ) : (
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Sheet
              variant="outlined"
              sx={{
                borderRadius: 'md',
                p: 2,
                height: '100%',
                backgroundColor: 'background.level1'
              }}
            >
              <Typography level="h4" sx={{ mb: 2, textAlign: 'center' }}>
                Productos por Categoría
              </Typography>
              <Box sx={{ height: 300 }}>
                <Bar data={categoryChartData} options={chartOptions} />
              </Box>
            </Sheet>
          </Grid>
          <Grid xs={12} md={6}>
            <Sheet
              variant="outlined"
              sx={{
                borderRadius: 'md',
                p: 2,
                height: '100%',
                backgroundColor: 'background.level1'
              }}
            >
              <Typography level="h4" sx={{ mb: 2, textAlign: 'center' }}>
                Valor del Inventario por Categoría
              </Typography>
              <Box sx={{ height: 300 }}>
                <Bar data={valueChartData} options={chartOptions} />
              </Box>
            </Sheet>
          </Grid>
          <Grid xs={12}>
            <Sheet
              variant="outlined"
              sx={{
                borderRadius: 'md',
                p: 3,
                mt: 2,
                backgroundColor: 'background.level1'
              }}
            >
              <Typography level="h4" sx={{ mb: 2 }}>
                Resumen del Inventario
              </Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={4}>
                  <Sheet
                    variant="soft"
                    sx={{
                      p: 2,
                      borderRadius: 'md',
                      textAlign: 'center'
                    }}
                  >
                    <Typography level="h2">
                      {categoryData.counts.reduce((a, b) => a + b, 0)}
                    </Typography>
                    <Typography>Total de Productos</Typography>
                  </Sheet>
                </Grid>
                <Grid xs={12} sm={4}>
                  <Sheet
                    variant="soft"
                    sx={{
                      p: 2,
                      borderRadius: 'md',
                      textAlign: 'center'
                    }}
                  >
                    <Typography level="h2">
                      {categoryData.labels.length}
                    </Typography>
                    <Typography>Categorías</Typography>
                  </Sheet>
                </Grid>
                <Grid xs={12} sm={4}>
                  <Sheet
                    variant="soft"
                    sx={{
                      p: 2,
                      borderRadius: 'md',
                      textAlign: 'center'
                    }}
                  >
                    <Typography level="h2">
                    €{priceData.values.reduce((a, b) => a + b, 0).toFixed(2)}
                    </Typography>
                    <Typography>Valor Total</Typography>
                  </Sheet>
                </Grid>
              </Grid>
            </Sheet>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default InventoryStats;