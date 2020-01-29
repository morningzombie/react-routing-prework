import React from 'react';

const Products = ({ products }) => {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {
                    products.map(product => {
                        return (
                            <li key={product.id}>
                                {product.name}
                                <br />
                                Suggested Price:
        ${product.suggestedPrice.toFixed(2)}
                            </li>
                        );
                    })

                }

            </ul>
        </div>
    )
}



export default Products;