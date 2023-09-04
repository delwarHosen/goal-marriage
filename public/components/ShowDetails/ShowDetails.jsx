// import React, from 'react';
import React, { useEffect, useState } from 'react';
import './ShowDetails.css'
import ShowProduct from '../ShowProduct/ShowProduct';

const ShowDetails = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='showDetails'>
            <div className='showCard'>
                {
                    products.map(product => <ShowProduct
                        key={product.id}
                        product={product}
                    ></ShowProduct>)
                }
            </div>
            <div>cart</div>
        </div>
    );
};

export default ShowDetails;