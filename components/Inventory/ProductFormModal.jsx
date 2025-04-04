import React, { useState, useRef, useEffect } from 'react';
import { addDoc, updateDoc, doc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';

const categories = [
  'Electrónica',
  'Ropa',
  'Hogar',
  'Alimentos',
  'Juguetes',
  'Otros'
];

function ProductFormModal({ open, onClose, product, onSave, currentUser }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    description: '',
    image: ''
  });
  
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        quantity: product.quantity.toString(),
        price: product.price.toString(),
        description: product.description || '',
        image: product.image || ''
      });
    } else {
      setFormData({
        name: '',
        category: '',
        quantity: '',
        price: '',
        description: '',
        image: ''
      });
    }
    setError('');
  }, [product, open]);

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

  const handleSubmit = async (e) => {
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

      if (product) {
      
        await updateDoc(doc(db, 'products', product.id), productData);
        onSave({ id: product.id, ...productData });
      } else {
       
        productData.createdAt = new Date();
        const docRef = await addDoc(collection(db, 'products'), productData);
        onSave({ id: docRef.id, ...productData });
      }
      
      onClose();
    } catch (err) {
      console.error('Error saving product:', err);
      setError('Error al guardar el producto. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description"
        sx={{ maxWidth: 500, width: { xs: '90%', sm: '500px' }, margin: { xs: '16px', sm: 'auto' } }}
      >
        <Typography id="product-modal-title" level="h4" component="h2">
          {product ? 'Editar Producto' : 'Añadir Producto'}
        </Typography>
        <Typography id="product-modal-description" level="body-sm">
          Completa los detalles del producto a continuación.
        </Typography>
        <Divider sx={{ my: 2 }} />
        
        {error && (
          <Alert color="danger" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        <form onSubmit={handleSubmit}>
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
            <Button variant="plain" color="neutral" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              Guardar
            </Button>
          </Box>
        </form>
      </ModalDialog>
    </Modal>
  );
}

export default ProductFormModal;