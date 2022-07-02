import styled from "styled-components"

import { PersonalizationImg , Social , Fb , Tw , In } from "./assets"

function Personalization () {
    return (
        <Wrapper>
            <div className="container">
                <div className="per-social">
                    <div className="per">
                        <div className="image">
                            <img src={ PersonalizationImg } alt="personalization" />
                        </div>
                        <div className="caption">
                            <h2>  PERSONALIZATION </h2>
                            <p> <br/> Put a custom print on the football shirt of your choice with our Personalization service. <br/><br/> Tell us what name, what number and we put it. <b> FREE!!!</b> </p>
                        </div>
                    </div>
                    <div className="social">
                    <div className="image">
                            <img src={ Social } alt="social" />
                        </div>
                        <div className="caption">
                            <h2>  PERSONALIZATION </h2>
                            <p> <br/> Share your shirts with us with the #CamisetasFutbolSpainnn <br/><br/> </p>
                            <div className="s-media">
                                <div className="fb box"> <Fb /> </div>
                                <div className="tw box"> <Tw /> </div>
                                <div className="in box"> <In /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin-top: 6rem;
    margin-bottom: 5rem;

    .container {
    }

    .per-social {
        display: flex;
        gap : 30px;

        .per , .social {
            flex: 1;
            position: relative
        }
    }

    img {
        width: 100%;
        filter: brightness(50%);
    }
    
    .caption {
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        padding: 2rem;
        color: white;
    }

    .s-media {
        display: flex;
        gap: 6px;
    }

    svg path {
        fill : #000000;
    }

    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 30px;
        background-color: white;
    }

`

export default Personalization