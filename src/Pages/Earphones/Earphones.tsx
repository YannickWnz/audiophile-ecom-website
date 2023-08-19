import './Earphones.scss'
import {headphonesProductDetails} from '../../Components/Interfaces'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Categories } from "../../Components/Categories/Categories"
import { About } from "../../Components/About/About"
import { Button } from "../../Components/Button/Button"


export const Earphones = () => {

    const [earphones, setEarphones] = useState<headphonesProductDetails[]>([])

    const getProductCategory = async () => {
        try {
            // const response = await axios.get(`http://localhost:8800/getearphones/`)
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/getearphones/`)
            setEarphones(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProductCategory()
    }, [])

    function getProductImage(index: number): string {
        const path: string[] = JSON.parse(earphones[index].imagePath)
        return path[0]
    }

    return (
        <div className="earphones">
            <div className="earphones-container">
                {earphones.length > 0 && earphones.map((product, index) => {
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
    )
}