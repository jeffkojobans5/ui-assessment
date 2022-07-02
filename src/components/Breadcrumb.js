import styled from "styled-components"
import { Link } from "react-router-dom"

function Breadcrumb () {
    return (
        <Wrapper>
            <div className="prod-container">
                    <div className="breadcrumb">
                        <Link to="/"> Home </Link> <span className="sep"> > </span>
                        <Link to="/"> England - Premier League </Link> <span className="sep"> > </span>
                        <Link to="/" className="curr-product"> Manchester United 21-22 Home Shirt </Link>
                    </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin-top: 2rem;
    font-size: .9rem;
    
    .breadcrumb {

        a {
            text-decoration : none;
            color : #1256DB;
        }

        .curr-product {
            color: black;
        }

        .sep {
            margin: 0 1rem;
        }
    }

`

export default Breadcrumb