import React, { useState, useEffect, useRef } from 'react';
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
  const [filter, setFilter] = useState(null);
  const [showUID, setShowUID] = useState(false); 

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    description: '',
    image: ''
  });
  
  const fileInputRef = useRef(null);

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
    console.log(currentUser.uid);
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, 'products'),
          where('userId', '==', currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const productsData = [];

        if (!filter) {
          querySnapshot.forEach((doc) => {
            productsData.push({ id: doc.id, ...doc.data() });

          });

        } else {
          querySnapshot.forEach((doc) => {
            if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
              productsData.push({ id: doc.id, ...doc.data() });
            } else {
              return;
            }
          });
        }

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
  }, [currentUser,filter]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('El archivo seleccionado no es una imagen. Por favor, selecciona una imagen.');
        return;
      }
      if (file.size > 1048576) {
        setError('El tamaño de la imagen no debe exceder 1MB. Por favor, selecciona una imagen más pequeña.');
        return;
      }
       // basic image validation, firebase db only allow up to 1MB
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result
        });
        setError(''); 
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleImageClick = () => {
    fileInputRef.current.click();
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
      description: '',
      image: ''
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
      description: product.description || '',
      image: product.image || ''
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
        image: formData.image,
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

      setError('Error al eliminar el producto. Por favor, inténtalo de nuevo.');
    }
  };
   
  return (
    
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: { xs: 1, sm: 2 } }}>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'stretch', sm: 'center' }, gap: 2, mb: 3 }}>
        <Typography level="h2">Inventario</Typography>
        <Input
  placeholder="Busca por nombre del producto"
  onKeyUp={(e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  }}
  sx={{
    maxWidth: { xs: '100%', sm: '400px' },
    width: '100%'
  }}
/>

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
        <>
         
          <Box sx={{ display: { xs: 'none', md: 'block' }, width: '100%' }}>
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
          </Box>
          
         
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 2 }}>
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
              </Sheet>
            ))}
          </Box>
        </>
      )}


      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalDialog
          aria-labelledby="product-modal-title"
          aria-describedby="product-modal-description"
          sx={{ maxWidth: 500, width: { xs: '90%', sm: '500px' }, margin: { xs: '16px', sm: 'auto' } }}
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
              <Grid xs={12}>
                <FormControl>
                  <FormLabel>Imagen del Producto</FormLabel>
                  <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      ref={fileInputRef}
                      onChange={handleImageChange}
                    />
                    {formData.image ? (
                      <Box 
                        sx={{ 
                          position: 'relative',
                          '&:hover .overlay': { opacity: 1 }
                        }}
                      >
                        <img 
                          src={formData.image} 
                          alt="Vista previa" 
                          style={{ 
                            width: '100%', 
                            maxHeight: '200px', 
                            objectFit: 'contain',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}
                          onClick={handleImageClick}
                        />
                        <Box 
                          className="overlay"
                          sx={{ 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            right: 0, 
                            bottom: 0, 
                            backgroundColor: 'rgba(0,0,0,0.5)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            opacity: 0,
                            transition: 'opacity 0.2s',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}
                          onClick={handleImageClick}
                        >
                          <Typography sx={{ color: 'white' }}>Cambiar imagen</Typography>
                        </Box>
                      </Box>
                    ) : (
                      <Button 
                        variant="outlined" 
                        onClick={handleImageClick}
                        sx={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'column', gap: 1 }}
                      >
                        <Typography>Seleccionar imagen</Typography>
                        <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>
                          Formatos: JPG, PNG, GIF
                        </Typography>
                        <Typography level="body-sm" sx={{ color: 'warning.500', fontWeight: 'bold' }}>
                          Tamaño máximo: 1MB
                        </Typography>
                      </Button>
                    )}
                  </Box>
                </FormControl>
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
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
      <Box sx={{ mt: 3 }}>
  {!showUID && (
    <Button
      onClick={() => setShowUID(true)} 
      size="md"
      variant="outlined"
      sx={{ mt: 1 }}
    >
      Mostrar Api Key
    </Button>
  )}
  {showUID && (
    <Typography level="body1" sx={{ mt: 2 }}>
     {currentUser?.uid}
    </Typography>
  )}
</Box>
    </Box>
  );
}

export default Inventory;