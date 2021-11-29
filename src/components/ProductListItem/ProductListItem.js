import React from 'react'

function ProductListItem({ product, isSelected, onClick }) {
  console.log('product list item 4') 
  return (
    <div className={`product-list-item ${isSelected ? ' selected' : ''}`}>
        <img className="product-list-item-photo"
             src={product.photo.filename}
             alt={`${product.name}`}
        />
        <button onClick={onClick}>{product.name}</button>
    </div>
  )
}

export default ProductListItem;
