import styled from "styled-components"

import PopularProps from "../props/PopularProps"

// assets 
import { Left, Right } from "../components/assets"

function Popular () {
    return (
        <Wrapper>
            <div className="container">
                <div className="text-slider-controller">
                            <div className="text">
                                <h1> Most Popular T-Shirts </h1>
                            </div>
                            <div className="slider-controller">
                                <div className="left">
                                    <Left />
                                </div>
                                <div className="right">
                                    <Right />
                                </div>
                            </div>
                </div>                
                <div className="popular-shirts">
                    <PopularProps />
                    <PopularProps />
                    <PopularProps />
                    <PopularProps />
                    <PopularProps />
                    <PopularProps />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin-top: 3rem;

    .text-slider-controller {
        display: flex;
        margin-bottom: 5rem;

        .text {
            flex: 1;
            display: flex;
            align-items: center;

            h1 {
                text-transform: uppercase;
            }
        }

        .slider-controller {
            display: flex;
            justify-content: end;
            align-items: center;
            flex: 1;
            gap: 20px;

            svg path {
                height: 35px;
                width: 35px;
                fill : black;
            }

            .left , .right {
                border: 1px solid #EAEAEC;  
                height: 35px;
                width: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .popular-shirts {
        display: flex;
        overflow-x: visible;
        gap: 40px;
    }

    @media only screen and (max-width: 720px) {
        margin-top: 1rem !important;

        .text h1 {
            font-size: 1.3rem            
        }

        .text-slider-controller {
            margin-bottom: 2rem;
        }       
`
export default Popular