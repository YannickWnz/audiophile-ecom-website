import './Button.scss'
import { Link } from 'react-router-dom'

interface ProductID {
    id?: number;
    buttonText?: string;
}


export const Button = ({id, buttonText = 'SEE PRODUCT' }: ProductID) => {
    return (
        <Link to="#" className="button">{buttonText}</Link>
    )
}