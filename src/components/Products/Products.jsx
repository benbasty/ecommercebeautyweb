import './Products.css'
import React, { useState } from 'react'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Products = () => {
    const [parent] = useAutoAnimate();
    const [MenuProducts, setMenuProducts] = useState(ProductsData);
    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>product.type === type));
    }
  return (
    <div className='container-products'>
        <img src={Plane} alt="" />
        <h1>Our Featured Products</h1>

        <div className="products">
            <ul className="menu-products" ref={parent}>
                <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioners</li>
                <li onClick={()=>filter("foundation")}>Foundations</li>
            </ul>
            <div className="list-products">
                {
                    MenuProducts.map((product, i) => (
                        <div className="product">
                            <div className="left-side">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Shop Now</div>
                                <img src={product.img} alt="product" className='img-product'/>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Products