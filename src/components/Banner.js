import styled from "styled-components"

import  Hero  from '../media/assets/images/hero.jpg';

import { Bag } from "./assets"

function Banner () {
    return (
        <Wrapper>
            <div className="container banner-desktop">
                <div className="banner">
                    <div className="left">
                        <div className="top">
                            <h1> Your favorite customized <br/> <span> Club Jerseys. </span></h1>
                        </div>
                        <div className="bottom">
                                <div className="controls">                                    
                                    <div className="control active"></div>
                                    <div className="control"></div>
                                    <div className="control"></div>
                                    <div className="control"></div>
                                    <div className="control"></div>
                                </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="shop">
                            <div className="shop-now">
                                <p> Show Now</p>
                            </div>
                            <div className="icon">
                                <Bag />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <h1> Your favorite customized <br/> <span> Club Jerseys. </span></h1>
                <div className="info_">
                    <div className="controls">                                    
                                        <div className="control active"></div>
                                        <div className="control"></div>
                                        <div className="control"></div>
                                        <div className="control"></div>
                                        <div className="control"></div>
                    </div>
                    <div className="shop">
                        <div className="shop">
                                <div className="shop-now">
                                    <p> Show Now</p>
                                </div>
                                <div className="icon">
                                    <Bag />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    --color: #F9DC38;

    .mobile {
        display: none;
    }
    .right {
        display: flex;
        justify-content: end;
        align-items: end;

        .shop {
            position: relative;
            top: -30px;
            display: flex;
            border: 2px solid white;
        }

        p {
            color: white;
        }

        .shop-now {
            display: flex;
            justify-content: center;
            align-itemm: center;
            backdrop-filter: blur(16px);
            background: rgba(17, 17, 18, 0.4);
            padding: .9rem .9rem .9rem .9rem;
        }

        svg path {
            fill : #000000;
        }

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            padding: .5rem 1.1rem .5rem 1.1rem;
        }
    }

    font-family: 'Montserrat', sans-serif;
    
    .banner {
        margin-top: 2rem;
        height: 400px;
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${Hero});
        background-repeat: no-repeat;
        background-position: center center; 
        background-size: cover;
        display: flex;
        padding: 1rem 4rem;

        .left {
            flex: 1;
            flex-diection: column;

            .top {
                height: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                h1 {
                    font-size: 3rem;
                    color: white;
                }

                span {
                    color: var(--color)
                }
            }

            .bottom  {
                height: 50%;
                display: flex;
                justify-content: start;
                align-items: end;     
            }

            .controls {
                display: flex;
                margin-bottom: 2.5rem;
                margin-left: 1rem;
                
                .active {
                    background-color: var(--color) !important;
                    opacity: 1 !important;
                }

                .control {
                    height: 4px;
                    width: 70px;
                    background-color: white;
                    margin: 0rem 1rem 0rem 0rem;
                    opacity: 0.4;
                }
            }
        }

        .right {
            flex: 1
        }
    }
    
    @media only screen and (max-width: 720px) {
            .desktop {
                display: none important;
            }

            .mobile {
                display: block;
                padding: 2rem;
                height: 400px;
                width: 100%;
                background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${Hero});
                background-repeat: no-repeat;
                background-position: center right; 
        
                .info_  {
                    display: flex;
                    flex: 1;
                    height: 33vh;
                    align-items: end;
                }
        
                h1 {
                    font-size: 1.5rem;
                    color: white;
                }
        
                .controls {
                    display: flex;
                    gap: 5px;
                    flex: 1;
                }
                .controls div {
                    height: 3px;
                    width: 30px;
                    background-color: #FFFFFF;
                    opacity:  0.16;
                }
        
                .controls div:nth-child(1) {
                    opacity:  1;
                    background-color: #F9DC38;
                }
        
                span {
                    color: var(--color)
                }        
        
                .shop {
                    position: relative;
                    display: flex;
                    border: 1px solid white;
                }
        
                p {
                    color: white;
                }
        
                .shop-now {
                    display: flex;
                    justify-content: center;
                    align-itemm: center;
                    backdrop-filter: blur(16px);
                    background: black;            
                    padding: .9rem .9rem .9rem .9rem;
                }
        
                svg path {
                    fill : #000000;
                }
        
                .icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    padding: .5rem 1.1rem .5rem 1.1rem;
                }
        
            }
        }
    }
`
export default Banner