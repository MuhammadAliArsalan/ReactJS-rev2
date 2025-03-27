import React from "react";

const Item = ({ isPacked, name, quantity }) => {
    let itemName = name;

    if (isPacked) {
        return (
            <p>The {itemName} is packed in quantity of {quantity}: <span>✅</span></p>
        )
    }
    else {
        return (
            <p>
                The {itemName} is packed in quantity of {quantity}:<span>❌</span>
            </p>
        )
    }

}

export default function ItemList() {
    return (
        <section>
            <h2>Ali's Packing List</h2>
            <ul>
                <li>
                    <Item isPacked={true} name="Hiking Kit" quantity={3} />
                </li>
                
                <li>
                    <Item isPacked={false} name="Helmet with a golden leaf" quantity={4} />
                </li>
            </ul>
        </section>
    )
}