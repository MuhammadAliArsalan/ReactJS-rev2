import React from "react";

const Product = () => {

    const productFeatures={
        "feature 1":"Screen Size: 34 inches",
        "feature 2":"Resolution: QHD Ultra Wide 1440p",
        "feature 3":"Aspect Ratio: 2.39:1",
        "feature 4":"Screen Surface: Glossy"
    }

    return (
        <div style={{marginLeft:50}}>
            <h2>My products </h2>
            <img src="http://res.cloudinary.com/dj5vvjv9q/image/upload/v1742498162/suwjztt5cysrll14nqay.png"
                alt="TV image" width={190} height={330}
            >
            </img>
            <h3>Its features are: </h3>
            <ul>
                <li>Feature 1 :<span style={{fontSize:16,fontWeight:"bold"}}>{productFeatures["feature 1"]}</span></li>
                <li>Feature 2: <span style={{fontSize:16,fontWeight:"bold"}}>{productFeatures["feature 2"]}</span></li>
                <li>Feature 3: <span style={{fontSize:16,fontWeight:"bold"}}>{productFeatures["feature 3"]}</span></li>
                <li>Feature 4: <span style={{fontSize:16,fontWeight:"bold"}}>{productFeatures["feature 4"]}</span></li>
            </ul>
        </div>
    )
}
export default Product;