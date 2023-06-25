import { About } from "../../Components/About/About"
import { Button } from "../../Components/Button/Button"
import { Categories } from "../../Components/Categories/Categories"
import { ProductCategory } from "../ProductCategory/ProductCategory"
import './Speakers.scss'
import {headphonesProductDetails} from '../../Components/Interfaces'
import { useEffect, useState } from "react"
import axios from 'axios'


export const Speakers = () => {

    const [speakers, setSpeakers] = useState<headphonesProductDetails[]>([])

    const getProductCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/getspeakers/`)
            setSpeakers(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProductCategory()
    }, [])

    function getProductImage(index: number): string {
        const path: string[] = JSON.parse(speakers[index].imagePath)
        return path[0]
    }

    return (
        <div className="speakers">
            <div className="speakers-container">
                {speakers.length > 0 && speakers.map((product, index) => {
                    return (
                        <div key={product.id} className={`speakers-content-wrapper ${index === 1 ? 'row-reverse' : ''} `}>
                            <div 
                            className="img-wrapper"
                            style={{ backgroundImage: `url(${getProductImage(index)})` }}
                            ></div>
                            <div className="product-desc">
                                {index === 0 && <p className="intro">NEW PRODUCT</p>}
                                <h1>{product.name.toUpperCase()}</h1>
                                <p>{product.description}</p>
                                <Button id={product.id} />
                            </div>
                        </div>
                    )
                }) }
                <Categories />
                <About />
            </div>
        </div>
        // <ProductCategory category="speakers" />
    )
}