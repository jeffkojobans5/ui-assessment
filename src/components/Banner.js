import styled from "styled-components"

import  Hero  from '../media/assets/images/hero.jpg';

function Banner () {
    return (
        <Wrapper>
            <div className="container">
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
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    --color: #F9DC38;

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

            .bottom {
                height: 50%;
                display: flex;
                justify-content: start;
                align-items: end;     
                
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
                        width: 80px;
                        background-color: white;
                        margin: 0rem 1rem 0rem 0rem;
                        opacity: 0.4;
                    }
                }
            }
        }

        .right {
            flex: 1
        }
    }
`
export default Banner