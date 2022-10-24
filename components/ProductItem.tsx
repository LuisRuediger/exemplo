import React, { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string
  }
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})

/**
 * Fluxo de renderizacao React:
 * 1- Criar uma nova versao do componente
 * 2- Comprar a nova versao com a anterior
 * 3- Case tenha alteracoes vai atualizar o que alterou
 */

/**
 * Quando usar o Memo:
 * 1- Pure functional components
 * 2- Too often Renders
 * 3- Re-renders with the same props
 * 4- For Medium to big size applications
 */