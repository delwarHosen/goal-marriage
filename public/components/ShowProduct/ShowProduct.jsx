import React from 'react';
import './ShowProduct.css'

const ShowProduct = (props) => {
    // console.log(props.product)
    const { category, img, description, date } = props.product;
    console.log(img, 'h')
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>

                <h2>{category}</h2>
                <p>{description.length > 20 ? description.slice(0, 80) + '...' : description}</p>
                <h5>{date}</h5>
            </div>
            <button className='button'>Booking</button>
        </div>
    );
};

export default ShowProduct;