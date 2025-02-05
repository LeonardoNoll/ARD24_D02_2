// src/context/ProductContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: (category?: string, searchTerm?: string) => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (category?: string, searchTerm?: string) => {
    setLoading(true);
    setError(null);

    try {
      // Monta a URL da API com os filtros
      let url = 'http://localhost:3001/products';
      if (category || searchTerm) {
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        if (searchTerm) params.append('name_like', searchTerm);
        url += `?${params.toString()}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Erro ao carregar produtos');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError('Erro ao carregar produtos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts deve ser usado dentro de um ProductProvider');
  }
  return context;
};