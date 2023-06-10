import './ProductCategory.scss'

interface ProductCategory {
    category: string;
}

interface details {
    id: string;
    productName: string;
    productDescription: string;
}

export const ProductCategory = ({category}: ProductCategory)  => {

    console.log(category)

    // const ProductDetails


    return (
        <div className="product-category">
            <div className="category-name">
                <h1>{category.toUpperCase()}</h1>
            </div>
            <div className="contents">

            </div>
        </div>
    )
}