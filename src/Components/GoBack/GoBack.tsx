import { useNavigate } from 'react-router-dom'
// import './GoBack.scss'

export const GoBack = () => {

    const navigate = useNavigate()

    const goToPreviousPage = (): void => {
        navigate(-1)
    }

    return (
        <div 
        className="go-back"
        style={{ margin: '50px 0'}}
        >
            <p 
            onClick={goToPreviousPage}
            style={{ 
                color: '#7D7D7D',
                cursor: 'pointer',
                fontSize: '.9em',
                display: 'inline-block'
            }}
            >Go back</p>
        </div>
    )
}