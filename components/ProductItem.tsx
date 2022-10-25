import { spawn } from "child_process";
import dynamic from "next/dynamic";
import React, { memo, useState } from "react";
import { AddProductToWishListProps } from './AddProductToWishlist'

import lodash from 'lodash'


const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishList)
}, {
  loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string
    title: string
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

     { isAddingToWishlist && (
          <AddProductToWishList
            onAddToWishlist={() => onAddToWishList(product.id)}
            onRequestClose={() => setIsAddingToWishlist(false)}
          />
        )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product)
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