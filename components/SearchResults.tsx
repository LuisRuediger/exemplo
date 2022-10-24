import React, { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results])

  return ( 
    <div>
       <h2>{totalPrice}</h2>

      {results.map(product => {
        return(
          <ProductItem key={product.id}product={product}/>
        )
      })}
    </div>
  )
}

/**
 * Quando usar useMemo:
 * 1- Calculos pesados
 * 2- Igualdade referencial (Quando a informacao e repassada para um componente filho)
 */