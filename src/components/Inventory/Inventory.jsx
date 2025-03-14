import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Alert from '@mui/joy/Alert';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid';

function Inventory() {
  const { currentUser } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    description: ''
  });

  const categories = [
    'Electrónica',
    'Ropa',
    'Hogar',
    'Alimentos',
    'Juguetes',
    'Otros'
  ];

 
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
          productsData.push({ id: doc.id, ...doc.data() });
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
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 
  const handleCategoryChange = (e, newValue) => {
    setFormData({
      ...formData,
      category: newValue
    });
  };

 
  const handleAddProduct = () => {
    setCurrentProduct(null);
    setFormData({
      name: '',
      category: '',
      quantity: '',
      price: '',
      description: ''
    });
    setOpenModal(true);
  };

 
  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      quantity: product.quantity.toString(),
      price: product.price.toString(),
      description: product.description || ''
    });
    setOpenModal(true);
  };

  
  const handleSaveProduct = async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      setError('Debes iniciar sesión para realizar esta acción');
      return;
    }

    try {
      const productData = {
        name: formData.name,
        category: formData.category,
        quantity: parseInt(formData.quantity, 10),
        price: parseFloat(formData.price),
        description: formData.description,
        userId: currentUser.uid,
        updatedAt: new Date()
      };

      if (currentProduct) {
        
        await updateDoc(doc(db, 'products', currentProduct.id), productData);
        setProducts(products.map(p => 
          p.id === currentProduct.id ? { id: currentProduct.id, ...productData } : p
        ));
      } else {
       
        productData.createdAt = new Date();
        const docRef = await addDoc(collection(db, 'products'), productData);
        setProducts([...products, { id: docRef.id, ...productData }]);
      }

      setOpenModal(false);
      setError('');
    } catch (err) {
      console.error('Error saving product:', err);
      setError('Error al guardar el producto. Por favor, inténtalo de nuevo.');
    }
  };

  
  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'products', productId));
      setProducts(products.filter(p => p.id !== productId));
      setError('');
    } catch (err) {
      console.error('Error deleting product:', err);
      setError('Error al eliminar el producto. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography level="h2">Inventario</Typography>
        <Button 
          onClick={handleAddProduct} 
          size="md"
        >
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
          <Button onClick={handleAddProduct}>Añadir Producto</Button>
        </Sheet>
      ) : (
        <Sheet variant="outlined" sx={{ borderRadius: 'md', overflow: 'auto' }}>
          <Table stickyHeader hoverRow>
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Nombre</th>
                <th style={{ width: '15%' }}>Categoría</th>
                <th style={{ width: '10%' }}>Cantidad</th>
                <th style={{ width: '15%' }}>Precio</th>
                <th style={{ width: '20%' }}>Descripción</th>
                <th style={{ width: '15%' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>€{product.price.toFixed(2)}</td>
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
                        onClick={() => handleEditProduct(product)}
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
      )}


      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalDialog
          aria-labelledby="product-modal-title"
          aria-describedby="product-modal-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="product-modal-title" level="h4" component="h2">
            {currentProduct ? 'Editar Producto' : 'Añadir Producto'}
          </Typography>
          <Typography id="product-modal-description" level="body-sm">
            Completa los detalles del producto a continuación.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <form onSubmit={handleSaveProduct}>
            <Grid container spacing={2}>
              <Grid xs={12}>
                <FormControl required>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre del producto"
                  />
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <FormControl required>
                  <FormLabel>Categoría</FormLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleCategoryChange}
                    placeholder="Selecciona una categoría"
                  >
                    {categories.map((category) => (
                      <Option key={category} value={category}>
                        {category}
                      </Option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={6}>
                <FormControl required>
                  <FormLabel>Cantidad</FormLabel>
                  <Input
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                  />
                </FormControl>
              </Grid>
              <Grid xs={6}>
                <FormControl required>
                  <FormLabel>Precio</FormLabel>
                  <Input
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <FormControl>
                  <FormLabel>Descripción</FormLabel>
                  <Input
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Descripción del producto (opcional)"
                    multiline
                    minRows={2}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button variant="plain" color="neutral" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
              <Button type="submit">
                Guardar
              </Button>
            </Box>
          </form>
        </ModalDialog>
      </Modal>
    </Box>
  );
}

export default Inventory;
