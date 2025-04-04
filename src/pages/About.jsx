import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

function About() {
  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: 2 }}>
      <Typography level="h2" sx={{ mb: 3 }}>
        Acerca de Gestock
      </Typography>
      
      <Sheet variant="outlined" sx={{ borderRadius: 'md', p: 4, mb: 4 }}>
        <Typography level="h4" sx={{ mb: 2 }}>
          Nuestra Misión
        </Typography>
        <Typography sx={{ mb: 3 }}>
          En Gestock, nuestra misión es proporcionar a las empresas una herramienta intuitiva y potente para gestionar su inventario de manera eficiente. 
          Creemos que una gestión de inventario efectiva es fundamental para el éxito de cualquier negocio, y estamos comprometidos a hacer que este proceso sea lo más sencillo posible.
        </Typography>
        
        <Typography level="h4" sx={{ mb: 2, mt: 4 }}>
          ¿Por qué elegir Gestock?
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid xs={12} md={4}>
            <Sheet variant="soft" sx={{ p: 3, borderRadius: 'md', height: '100%' }}>
              <Typography level="h5" sx={{ mb: 2 }}>
                Fácil de usar
              </Typography>
              <Typography>
                Nuestra interfaz intuitiva permite a cualquier usuario, independientemente de su experiencia técnica, gestionar su inventario de manera eficiente.
              </Typography>
            </Sheet>
          </Grid>
          <Grid xs={12} md={4}>
            <Sheet variant="soft" sx={{ p: 3, borderRadius: 'md', height: '100%' }}>
              <Typography level="h5" sx={{ mb: 2 }}>
                Acceso en tiempo real
              </Typography>
              <Typography>
                Accede a tu inventario desde cualquier lugar y en cualquier momento, con datos actualizados en tiempo real para tomar decisiones informadas.
              </Typography>
            </Sheet>
          </Grid>
          <Grid xs={12} md={4}>
            <Sheet variant="soft" sx={{ p: 3, borderRadius: 'md', height: '100%' }}>
              <Typography level="h5" sx={{ mb: 2 }}>
                Análisis detallado
              </Typography>
              <Typography>
                Obtén informes y estadísticas detalladas sobre tu inventario para optimizar tus procesos y reducir costos.
              </Typography>
            </Sheet>
          </Grid>
        </Grid>
      </Sheet>
      
      <Sheet variant="outlined" sx={{ borderRadius: 'md', p: 4 }}>
        <Typography level="h4" sx={{ mb: 3 }}>
          Nuestro Equipo
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Somos un equipo de profesionales apasionados por la tecnología y la gestión empresarial. 
          Nuestro objetivo es crear soluciones que realmente marquen la diferencia en la operación diaria de tu negocio.
        </Typography>
        
        <Typography level="body-sm" sx={{ mt: 4, textAlign: 'center', fontStyle: 'italic' }}>
          "Creemos que la tecnología debe simplificar, no complicar. Gestock es el resultado de esta filosofía."
        </Typography>
      </Sheet>
    </Box>
  );
}

export default About;