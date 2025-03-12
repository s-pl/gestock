import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, completa todos los campos requeridos.');
      return;
    }
    
    // send this data to some backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setError('');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: 2 }}>
      <Typography level="h2" sx={{ mb: 3 }}>
        Contacto
      </Typography>
      
      <Grid container spacing={4}>
        <Grid xs={12} md={6}>
          <Sheet variant="outlined" sx={{ borderRadius: 'md', p: 4 }}>
            <Typography level="h4" sx={{ mb: 3 }}>
              Envíanos un mensaje
            </Typography>
            
            {submitted && (
              <Alert color="success" sx={{ mb: 3 }}>
                ¡Gracias por tu mensaje! Te responderemos lo antes posible.
              </Alert>
            )}
            
            {error && (
              <Alert color="danger" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}
            
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                  <FormControl required sx={{ mb: 2 }}>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12} md={6}>
                  <FormControl required sx={{ mb: 2 }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl sx={{ mb: 2 }}>
                    <FormLabel>Asunto</FormLabel>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Asunto de tu mensaje"
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl required sx={{ mb: 3 }}>
                    <FormLabel>Mensaje</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Escribe tu mensaje aquí"
                      minRows={4}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              
              <Button type="submit" sx={{ mt: 1 }}>
                Enviar mensaje
              </Button>
            </form>
          </Sheet>
        </Grid>
        
        <Grid xs={12} md={6}>
          <Sheet variant="outlined" sx={{ borderRadius: 'md', p: 4, height: '100%' }}>
            <Typography level="h4" sx={{ mb: 3 }}>
              Información de contacto
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography level="title-md" sx={{ mb: 1 }}>
                Dirección
              </Typography>
              <Typography>
                Calle Leon Y Castillo, 26, Las Palmas de Gran Canaria
              </Typography>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography level="title-md" sx={{ mb: 1 }}>
                Teléfono
              </Typography>
              <Typography>
                +34 885 444 000 333
              </Typography>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography level="title-md" sx={{ mb: 1 }}>
                Email
              </Typography>
              <Typography>
                info@gestock.com
              </Typography>
            </Box>
            
            <Box>
              <Typography level="title-md" sx={{ mb: 1 }}>
                Horario de atención
              </Typography>
              <Typography>
                Lunes a Viernes: 9:00 - 18:00
              </Typography>
              <Typography>
                Sábados: 10:00 - 14:00
              </Typography>
            </Box>
          </Sheet>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;