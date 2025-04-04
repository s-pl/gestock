// src/components/Inventory/Inventory.jsx
import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    if (!currentUser) return;
    
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, 'products'),
          where('userId', '==', currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const productsData = [];

        querySnapshot.forEach((doc) => {
          const productData = doc.data();
          if (!filter || productData.name.toLowerCase().includes(filter.toLowerCase())) {
            productsData.push({ id: doc.id, ...productData });
          }
        });

        setProducts(productsData);
        setError('');
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Error al cargar los productos. Por favor, inténtalo de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentUser, filter]);

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setOpenModal(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setOpenModal(true);
  };

  const handleProductUpdated = (updatedProduct) => {
    if (updatedProduct.id) {
    
      setProducts(products.map(p => 
        p.id === updatedProduct.id ? updatedProduct : p
      ));
    } else {
      
      setProducts([...products, updatedProduct]);
    }
  };

  const handleProductDeleted = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
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
          onKeyUp={(e) => setFilter(e.target.value)}
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
      ) : products.length === 0 ? (
        <EmptyInventory onAddProduct={handleAddProduct} />
      ) : (
        <>
          {/* Desktop view */}
          <Box sx={{ display: { xs: 'none', md: 'block' }, width: '100%' }}>
            <ProductTable 
              products={products} 
              onEdit={handleEditProduct} 
              onDelete={handleProductDeleted} 
            />
          </Box>
          
          {/* Mobile view */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 2 }}>
            <ProductCards 
              products={products} 
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