import React, {useState, useEffect} from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {
  const [sideOpen, setSideOpen] = useState(
    JSON.parse(localStorage.getItem('sideOpen')) || false
  );
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem('product')) || ''
  );
  
  useEffect(() => {
    if (product) localStorage.setItem('product', JSON.stringify(product));
    if (sideOpen) localStorage.setItem('sideOpen', JSON.stringify(sideOpen));
  }, [product, sideOpen]);
  
  useEffect(() => {
    if (product) {
      setSideOpen(true);
    }
  }, [product]);

  useEffect(() => {
    if (!sideOpen) {
      setProduct();
    }
  }, [sideOpen]);

  console.log('product view 22');
  
  return (
    <div className="product-view">
        <div className="product-main-area">
            <h1>Products</h1>
            <div className="product-list">
                {products.map(item =>
                    <ProductListItem
                        key={item.id}
                        product={item}
                        onClick={() => setProduct(item)}
                        isSelected={product ? product.id === item.id : false}
                    />
                )}
            </div>
        </div>
        <div className="product-side-panel">
            <div className="product-side-panel-toggle-wrapper">
                <div className="product-side-panel-toggle"
                     onClick={() => setSideOpen(!sideOpen)}>
                    {sideOpen ? '>' : '<'}
                </div>
            </div>
            <ProductDetails
            visible={sideOpen}
            product={product} />
        </div>
    </div>
  );
}

export default ProductView;
