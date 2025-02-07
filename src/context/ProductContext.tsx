// src/context/ProductContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import InvalidInputMessage from '../Components/InvalidInputMessage';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  highlight: boolean;
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
      {/* Monta a URL da API com os filtros*/}
      let url = 'http://localhost:3001/products';
      if (category) {
        const params = new URLSearchParams();
        params.append('category', category);
        url += `?${params.toString()}`;
      }
      const response = await fetch(url);


      if (!response.ok) {
        throw new Error('Erro ao carregar produtos');
      }
      let data: Product[] = await response.json();


      {/* Filtra os produtos pelo termo de busca */}
      if (searchTerm) {
        data = data.filter((product: Product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  

      {/* Ordena os produtos destacados primeiro */}
      data.sort((a, b) => (a.highlight === b.highlight ? 0 : a.highlight ? -1 : 1));


      
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