import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';

function ProductCards({ products, onEdit, onDelete }) {
  const handleDeleteProduct = (productId) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      return;
    }
    onDelete(productId);
  };

  return (
    <>
      {products.map((product) => (
        <Sheet 
          key={product.id} 
          variant="outlined" 
          sx={{ 
            borderRadius: 'md', 
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ p: 2, display: 'flex', gap: 2 }}>
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
              />
            ) : (
              <Box 
                sx={{ 
                  width: '80px', 
                  height: '80px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: 'background.level2',
                  borderRadius: '4px'
                }}
              >
                <Typography level="body-xs">Sin imagen</Typography>
              </Box>
            )}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography level="title-md" sx={{ mb: 0.5 }}>{product.name}</Typography>
              <Typography level="body-sm" sx={{ mb: 0.5 }}>Categoría: {product.category}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography level="body-sm">Cantidad: {product.quantity}</Typography>
                <Typography level="body-sm">Precio: ${product.price.toFixed(2)}</Typography>
              </Box>
              {product.description && (
                <Typography level="body-sm" sx={{ mb: 0.5 }}>
                  {product.description.length > 50
                    ? `${product.description.substring(0, 50)}...`
                    : product.description}
                </Typography>
              )}
            </Box>
          </Box>
          <Divider />
          <Box sx={{ p: 1.5, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button
              size="sm"
              variant="plain"
              color="primary"
              onClick={() => onEdit(product)}
            >
              Editar
            </Button>
            <Button
              size="sm"
              variant="plain"
              color="danger"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Eliminar
            </Button>
          </Box>
        </Sheet>
      ))}
    </>
  );
}

export default ProductCards;