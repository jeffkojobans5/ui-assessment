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
    flex: 1;

    a {
        text-decoration: none;
    }

    p {
        font-size: 1rem;
        font-weight: 600;
        color: black;
        margin-top: 1rem;
    }


    :hover {
        transform: translateY(-10px)
    }

`

export default CountryLeagueProps