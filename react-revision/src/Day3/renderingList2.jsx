import React from 'react'

const HardwareProducts = () => {
    const products = [
        { product_id: 1, name: "SSD", price: 800 },
        { product_id: 2, name: "HDD", price: 1400 },
        { product_id: 3, name: "LCD 14 inch", price: 1900 }
    ]

    const totalPrice = products.reduce((acc, prod) => acc + prod.price, 0);   //acc stores result of each iteration
    console.log(`Total Price ${totalPrice}`);

    const filteredProducts = products.filter((prod) => prod.price > 1200);

    return (
        <div>
            <p>----------------------------------</p>
            <b>Total Prices of All Products In Inventory {totalPrice}</b>

            <h3 style={{ display: 'flex', justifyContent: "center" }}>All Products</h3>
            <ol>
                {filteredProducts.map((prod) =>
                    <li key={prod.product_id}>
                        Product_Name: {prod.name} | Price:{prod.price}

                    </li>)}

            </ol>
        </div>
    )
}

export default HardwareProducts
