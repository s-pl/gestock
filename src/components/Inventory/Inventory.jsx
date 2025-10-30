import React, { useState, useMemo } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useInventory } from '../../contexts/InventoryContext';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';
import Input from '@mui/joy/Input';
import Sheet from '@mui/joy/Sheet';

import ProductTable from './ProductTable';
import ProductCards from './ProductCards';
import ProductFormModal from './ProductFormModal';
import ApiKeyDisplay from './ApiKeyDisplay';

function Inventory() {
  const { currentUser } = useAuth();
  const { products, loading, error, updateProduct, deleteProduct } = useInventory();
  const [openModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [filter, setFilter] = useState('');

  // Client-side filtering using useMemo for performance
  const filteredProducts = useMemo(() => {
    if (!filter) return products;
    return products.filter(product => 
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setOpenModal(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setOpenModal(true);
  };

  const handleProductUpdated = (updatedProduct) => {
    updateProduct(updatedProduct);
  };

  const handleProductDeleted = (productId) => {
    deleteProduct(productId);
  };

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: { xs: 1, sm: 2 } }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        justifyContent: 'space-between', 
        alignItems: { xs: 'stretch', sm: 'center' }, 
        gap: 2, 
        mb: 3 
      }}>
        <Typography level="h2">Inventario</Typography>
        <Input
          placeholder="Busca por nombre del producto"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{
            maxWidth: { xs: '100%', sm: '400px' },
            width: '100%'
          }}
        />
        <Button onClick={handleAddProduct} size="md">
          Añadir Producto
        </Button>
      </Box>

      {error && (
        <Alert color="danger" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Typography>Cargando productos...</Typography>
      ) : filteredProducts.length === 0 ? (
        products.length === 0 ? (
          <EmptyInventory onAddProduct={handleAddProduct} />
        ) : (
          <Typography level="body-md" sx={{ textAlign: 'center', my: 4 }}>
            No se encontraron productos que coincidan con tu búsqueda.
          </Typography>
        )
      ) : (
        <>
         
          <Box sx={{ display: { xs: 'none', md: 'block' }, width: '100%' }}>
            <ProductTable 
              products={filteredProducts} 
              onEdit={handleEditProduct} 
              onDelete={handleProductDeleted} 
            />
          </Box>
          
          
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 2 }}>
            <ProductCards 
              products={filteredProducts} 
              onEdit={handleEditProduct} 
              onDelete={handleProductDeleted} 
            />
          </Box>
        </>
      )}

      <ProductFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        product={currentProduct}
        onSave={handleProductUpdated}
        currentUser={currentUser}
      />

      <ApiKeyDisplay currentUser={currentUser} />
    </Box>
  );
}


function EmptyInventory({ onAddProduct }) {
  return (
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
        No hay productos en tu inventario
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Comienza añadiendo tu primer producto haciendo clic en el botón "Añadir Producto".
      </Typography>
      <Button onClick={onAddProduct}>Añadir Producto</Button>
    </Sheet>
  );
}

export default Inventory;
