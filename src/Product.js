import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';
import cat1 from './imgs/cat1.png';
import cat2 from './imgs/cat2.png';
import cat3 from './imgs/cat3.png';
import cat4 from './imgs/cat4.png';
import cat5 from './imgs/cat5.png';
import cat6 from './imgs/cat6.png';

// Product database
const products = {
  'agil-herbicide': {
    title: 'AGIL HERBICIDE 500 ML',
    image: cat3,
    description: 'Adama Agil is A Selective, Broad-Spectrum Herbicide...',
    brand: 'Adma',
    size: '5.12 x 3.54 x 1.97 Inches',
    weight: '500g',
    price: 150,
    originalPrice: 300
  },
  'growth-promoter': {
    title: 'GROWTH PROMOTER',
    image: cat2,
    description: 'High-quality growth promoters for plants and crops...',
    brand: 'GrowthPro',
    size: 'Varies',
    weight: 'Varies',
    price: 200,
    originalPrice: 250
  },
  'machinery-tools': {
    title: 'AGRICULTURAL MACHINERY',
    image: cat4,
    description: 'Various tools and machinery for farming...',
    brand: 'FarmTools',
    size: 'Varies',
    weight: 'Varies',
    price: 500,
    originalPrice: 600
  },
  // Add other products as needed
};

const Product = () => {
  // Get the productId from URL
  const { productId } = useParams();
  
  // Find the product in our database
  const product = products[productId];
  
  // If product not found, show an error message
  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="product-description">{product.description}</p>
        
        <div className="product-specs">
          <div className="spec-row">
            <span className="spec-label">Product Brand</span>
            <span className="spec-value">{product.brand}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Product Size</span>
            <span className="spec-value">{product.size}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Product weight</span>
            <span className="spec-value">{product.weight}</span>
          </div>
        </div>

        <div className="product-rating">
          <span>★★★★★</span>
        </div>
        <div className="product-prices">
          <span className="discounted-price">₹{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="quantity-selector">
          <label>Choose Quantity</label>
          <select>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div className="product-actions">
          <button className="add-to-cart">Add to cart</button>
          <button className="add-to-wishlist">Add to wishlist</button>
          <button className="purchase-now">Purchase now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;