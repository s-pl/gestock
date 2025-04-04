import React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

function ProductTable({ products, onEdit, onDelete }) {
  const handleDeleteProduct = (productId) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      return;
    }
    onDelete(productId);
  };

  return (
    <Sheet variant="outlined" sx={{ borderRadius: 'md', overflow: 'auto', maxWidth: '100%' }}>
      <Table stickyHeader hoverRow>
        <thead>
          <tr>
            <th style={{ width: '15%' }}>Imagen</th>
            <th style={{ width: '20%' }}>Nombre</th>
            <th style={{ width: '10%' }}>Categoría</th>
            <th style={{ width: '10%' }}>Cantidad</th>
            <th style={{ width: '10%' }}>Precio</th>
            <th style={{ width: '20%' }}>Descripción</th>
            <th style={{ width: '15%' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} 
                  />
                ) : (
                  <Typography level="body-xs">Sin imagen</Typography>
                )}
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                {product.description && product.description.length > 30
                  ? `${product.description.substring(0, 30)}...`
                  : product.description}
              </td>
              <td>
                <Box sx={{ display: 'flex', gap: 1 }}>
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
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}

export default ProductTable;