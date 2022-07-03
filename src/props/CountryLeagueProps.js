import styled from "styled-components"
import { Link } from "react-router-dom"


function CountryLeagueProps ( props ) {
    const { league , image } = props
    return (
        <Wrapper>
            <Link to="/">
                <div className="image">
                    <img src={ image } alt={ image } />
                </div>
                <p> { league } </p> 
            </Link>            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    transition: 0.3s all;
    width: 20%;
    padding: 0.5rem;
    float: left;

    a {
        text-decoration: none;
    }

    p {
        font-size: 1rem;
        font-weight: 600;
        color: black;
        margin-top: 1rem;
    }

    img {
        height: auto;
        max-width: 100%
    }

    :hover {
        transform: translateY(-10px)
    }

    @media only screen and (max-width: 720px) {
        width: 50%;
    }
`

export default CountryLeagueProps