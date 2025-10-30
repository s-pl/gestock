import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';

const InventoryContext = createContext();

export function useInventory() {
  return useContext(InventoryContext);
}

export function InventoryProvider({ children }) {
  const { currentUser } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = useCallback(async () => {
    if (!currentUser) {
      setProducts([]);
      setLoading(false);
      return;
    }

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
  }, [currentUser]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const updateProduct = useCallback((updatedProduct) => {
    setProducts(prevProducts => {
      const existingProductIndex = prevProducts.findIndex(p => p.id === updatedProduct.id);
      if (existingProductIndex !== -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts[existingProductIndex] = updatedProduct;
        return updatedProducts;
      }
      return [...prevProducts, updatedProduct];
    });
  }, []);

  const deleteProduct = useCallback((productId) => {
    setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
  }, []);

  const value = {
    products,
    loading,
    error,
    fetchProducts,
    updateProduct,
    deleteProduct
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
}
