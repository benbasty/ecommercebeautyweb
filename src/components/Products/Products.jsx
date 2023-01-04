import './Products.css'
import React, { useState } from 'react'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
const Products = () => {
    const [MenuProducts, setMenuProducts] = useState(ProductsData);
  return (
    <div className='container-products'>
        <img src={Plane} alt="" />
        <h1>Our Featured Products</h1>

        <div className="products">
            <ul className="menu-products">
                <li>All</li>
                <li>Skin Care</li>
                <li>Conditioners</li>
                <li>Foundations</li>
            </ul>
            <div className="list-products">
                {
                    MenuProducts.map((product, i) => (
                        <div className="product">
                            Products
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Products