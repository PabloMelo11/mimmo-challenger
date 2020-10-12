import React, { useCallback, createContext, useState, useContext } from 'react';

import api from '../services/api';

interface IProduct {
  name: string;
  image: string;
  brand?: string;
}

interface IBrands {
  name: string;
  products: IProduct[];
}

export interface IProductsProps {
  category: string;
  brands: IBrands[];
}

interface IProductsContext {
  loading: boolean;
  productsSkinCare: IProductsProps[];
  productsSnacks: IProductsProps[];
  handleGetProducts(): void;
  handleAddNewProductSkinCare(newProduct: IProduct): void;
}

const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

export const ProductsProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [productsSkinCare, setProductsSkinCare] = useState<IProductsProps[]>(
    [],
  );
  const [productsSnacks, setProductsSnacks] = useState<IProductsProps[]>([]);

  const handleGetProducts = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);

      const response = await api.get<IProductsProps[]>('/products');

      const productsSkinCare = response.data.filter(
        product => product.category === 'Skin Care',
      );

      const productsSnacks = response.data.filter(
        product => product.category === 'Snacks',
      );

      setProductsSkinCare(productsSkinCare);
      setProductsSnacks(productsSnacks);

      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, []);

  const handleAddNewProductSkinCare = useCallback(
    (newProduct: IProduct) => {
      for (let product of productsSkinCare) {
        const productsSkinJeunesse = product.brands[0].products;
        const productsSkinNivea = product.brands[1].products;

        const newProductsJeunesse = [...productsSkinJeunesse, newProduct];

        const products: IProductsProps[] = [
          {
            category: product.category,
            brands: [
              {
                name: product.brands[0].name,
                products: newProductsJeunesse,
              },
              {
                name: product.brands[1].name,
                products: productsSkinNivea,
              },
            ],
          },
        ];

        setProductsSkinCare(products);
      }
    },
    [productsSkinCare],
  );

  return (
    <ProductsContext.Provider
      value={{
        loading,
        productsSkinCare,
        productsSnacks,
        handleGetProducts,
        handleAddNewProductSkinCare,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export function useProducts(): IProductsContext {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be used within an ProductsProvider');
  }

  return context;
}
