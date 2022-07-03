import styled from "styled-components"
import { Link } from "react-router-dom"

import { Lingard }  from "../components/assets"

function PopularProps () {
    
    return (
        <Wrapper>
            <Link to="/product">
                <img src={Lingard} alt="popular kits" />
                    <p className="save"> Save 67% </p>
                    <div className="caption">
                        <p> Manchester United 21 - 22 <br/> Home Shirt </p>
                        <p className="price"> €30.00 <span className="discount">89.95</span></p>
                    </div>  
            </Link>            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    transition: 0.3s all;

    a {
        text-decoration: none;
    }

    :hover {
        transform: translateY(-10px)
    }

    .caption {
        position: relative;
        top: -23px;
        color: black;
        padding: .3rem 1rem 1rem 1rem;
        line-height: 1.5rem;
        border: 1px solid #EAEAEC;
    }

    .discount {
        position: relative;
        top: -3px;
        font-weight: normal;
        font-size: .9rem;
        color: #EE503E;
        text-decoration: line-through;
    }

    .price {
        font-weight: 700;
        font-size: 1.3rem;
        margin-top: 1rem;
    }
    .save {
        background-color: #23C353;
        display: inline;
        padding: .5rem;
        color: white;
        font-size: 0.9rem;
        position: relative;
        top: -3rem;
        left: 1rem;
        font-weight: 600;
    }

`

export default PopularProps