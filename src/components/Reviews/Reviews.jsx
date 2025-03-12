import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
// Remove these imports
// import { Rating } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';

function Reviews() {
    const testimonials = [
        {
            name: "María García",
            role: "Gerente de Operaciones",
            company: "TechSolutions S.L.",
            avatar: "https://i.pravatar.cc/150?img=32",
            comment: "Gestock ha transformado completamente nuestra gestión de inventario. Ahora podemos rastrear cada producto en tiempo real y tomar decisiones basadas en datos precisos.",
            rating: 5
        },
        {
            name: "Carlos Rodríguez",
            role: "Director de Logística",
            company: "Distribuciones Rápidas",
            avatar: "https://i.pravatar.cc/150?img=67",
            comment: "Desde que implementamos Gestock, hemos reducido nuestros errores de inventario en un 85% y mejorado la eficiencia de nuestro almacén significativamente.",
            rating: 5
        },
        {
            name: "Laura Martínez",
            role: "Propietaria",
            company: "Boutique Elegance",
            avatar: "https://i.pravatar.cc/150?img=47",
            comment: "Como pequeña empresa, necesitábamos una solución sencilla pero potente. Gestock es exactamente eso - fácil de usar pero con todas las funciones que necesitamos.",
            rating: 4
        }
    ];

    // Simple star rating component using Joy UI
    const StarRating = ({ value }) => {
        return (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
                {[...Array(5)].map((_, i) => (
                    <Typography
                        key={i}
                        component="span"
                        fontSize="xl"
                        sx={{
                            color: i < value ? 'warning.500' : 'neutral.300',
                        }}
                    >
                        ★
                    </Typography>
                ))}
            </Box>
        );
    };

    return (
        <Box sx={{
            maxWidth: '1450px',
            margin: '0 auto',
            padding: 2
        }}>
            <Typography level="h2" textAlign="center" sx={{ mb: 4 }}>
                Lo que opinan nuestros usuarios
            </Typography>
            
            <Grid container spacing={3}>
                {testimonials.map((testimonial, index) => (
                    <Grid xs={12} md={4} key={index}>
                        <Card
                            variant="outlined"
                            sx={{
                                height: '100%',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: 'md',
                                }
                            }}
                        >
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Avatar 
                                        src={testimonial.avatar} 
                                        sx={{ width: 60, height: 60, mr: 2 }}
                                    />
                                    <Box>
                                        <Typography level="title-md">{testimonial.name}</Typography>
                                        <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                                            {testimonial.role}
                                        </Typography>
                                        <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>
                                            {testimonial.company}
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Divider sx={{ my: 2 }} />
                                
                                <Typography 
                                    level="body-md" 
                                    sx={{ 
                                        fontStyle: 'italic',
                                        mb: 2,
                                        minHeight: '100px'
                                    }}
                                >
                                    "{testimonial.comment}"
                                </Typography>
                                
                                <StarRating value={testimonial.rating} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Reviews;